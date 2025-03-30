const express = require('express');

const { BookingController } = require('../../controllers/index');

const router = express.Router();

router.post('/bookings', BookingController.create);
router.post('/bookings/:bookingId', BookingController.update);
router.get('/bookings/:bookingId', BookingController.getBookingById);
router.get('/bookings', BookingController.getAllBookings);
router.get('/bookings/user/:userId', BookingController.getBookingByUserId);

module.exports = router;