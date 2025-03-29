const axios = require('axios');

const { BookingRepository } = require('../repository/index');
const { Event_SERVICE_PATH } = require('../config/serverConfig');
const { ServiceError } = require('../utils/errors');

class BookingService {
    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data) {
        try {
            const eventId = data.EventId;
            console.log(eventId);
            const getEventRequestURL = `${Event_SERVICE_PATH}/api/v1/event/${eventId}`;
            const response = await axios.get(getEventRequestURL);
            const eventData = response.data.data;
            console.log(eventData);
            let priceOfTheevent = eventData.price;
            if(data.noOfSeats > eventData.total_seats) {
                throw new ServiceError('Something went wrong in the booking process', 'Insufficient seats in the event');
            }
            const totalCost = priceOfTheevent * data.noOfSeats;
            const bookingPayload = {...data, totalCost};
            const booking = await this.bookingRepository.create(bookingPayload);
            const updateEventRequestURL = `${Event_SERVICE_PATH}/api/v1/event/${booking.eventId}`;
            console.log(updateEventRequestURL);
            const update_response = await axios.patch(updateEventRequestURL, {totalSeats: eventData.total_seats - booking.noOfSeats});
            const finalBooking = await this.bookingRepository.update(booking.id, {status: "Booked"});
            return finalBooking;
        } catch (error) { 
            console.log(error);
            if(error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }
            throw new ServiceError();
        }
    }
}

module.exports = BookingService;