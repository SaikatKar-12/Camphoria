const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    Event_SERVICE_PATH: process.env.Event_SERVICE_PATH
}