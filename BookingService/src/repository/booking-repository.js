const { StatusCodes } = require('http-status-codes');

const { Booking } = require('../models/index');
const { AppError, ValidationError } = require('../utils/errors/index');

class BookingRepository {
    async create(data) {
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError', 
                'Cannot create Booking', 
                'There was some issue creating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async update(bookingId, data) {
        try {
            const booking = await Booking.findByPk(bookingId);
            if(data.status) {
                booking.status = data.status;
            }
            await booking.save();
            return booking;
        } catch (error) {
            throw new AppError(
                'RepositoryError', 
                'Cannot update Booking', 
                'There was some issue updating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async getBookingById(bookingId) {
        try {
            const booking = await Booking.findByPk(bookingId);
            if(!booking) {
                throw new AppError(
                    'RepositoryError', 
                    'Cannot find Booking', 
                    'There was some issue finding the booking, please try again later',
                    StatusCodes.NOT_FOUND);
            }
            return booking;
        } catch (error) {
            throw new AppError(
                'RepositoryError', 
                'Cannot find Booking', 
                'There was some issue finding the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllBookings() {
        try {
            const bookings = await Booking.findAll();
            return bookings;
        } catch (error) {
            throw new AppError(
                'RepositoryError', 
                'Cannot find Bookings', 
                'There was some issue finding the bookings, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllBookingsByUserId(userId) {
        try {
            const bookings = await Booking.findAll({
                where: {
                    userId: userId
                }
            });
            return bookings;
        } catch (error) {
            throw new AppError(
                'RepositoryError', 
                'Cannot find Bookings', 
                'There was some issue finding the bookings, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = BookingRepository;