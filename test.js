
const axios = require('axios');
const fs = require('fs');
const qs = require('qs');

async function generateQR(userId, eventId) {
    try {
        const formData = qs.stringify({ userId, eventId });

        const response = await axios.post(
            'https://rich-myrtice-campusconnect-a9680a04.koyeb.app/api/payment/generateQR',
            formData,
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                responseType: 'arraybuffer', // Important: Treat response as binary
            }
        );

        // Save the binary data as a PNG file
        fs.writeFileSync(`qr_${userId}_${eventId}.png`, response.data);
        console.log(`QR code saved as qr_${userId}_${eventId}.png`);
    } catch (error) {
        console.error('Error generating QR code:', error.response ? error.response.data : error.message);
    }
}

// Example usage
generateQR(12345, 67890);
