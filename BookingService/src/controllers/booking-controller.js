const { StatusCodes } = require('http-status-codes');

const { BookingService } = require('../services/index');
const { get } = require('../routes');

const bookingService = new BookingService();

const create = async (req, res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        console.log("FROM BOOKING CONTROLLER", response);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully completed booking',
            success: true,
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }
}
const update = async (req, res) => {
    try {
        const response = await bookingService.updateBooking(req.params.bookingId);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully updated booking',
            success: true,
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }   
}

const getBookingById = async (req, res) => {
    try {
        const response = await bookingService.getBookingById(req.params.bookingId);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully fetched booking',
            success: true,
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }   
}
const getAllBookings = async (req, res) => {
    try {
        const response = await bookingService.getAllBookings();
        return res.status(StatusCodes.OK).json({
            message: 'Successfully fetched all bookings',
            success: true,
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }   
}

const getBookingByUserId = async (req, res) => {
    try {
        const response = await bookingService.getBookingByUserId(req.params.userId);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully fetched all bookings',
            success: true,
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }   
}

module.exports = {
    create,
    update,
    getBookingById,
    getAllBookings,
    getBookingByUserId
}