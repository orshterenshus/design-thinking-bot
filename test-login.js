// Quick test script to check the login API error with more details
require('dotenv').config({ path: '.env.local' });

const mongoose = require('mongoose');

async function testConnection() {
    console.log('=== Testing MongoDB Connection ===');
    console.log('MONGODB_URI defined:', process.env.MONGODB_URI ? 'YES' : 'NO');

    if (!process.env.MONGODB_URI) {
        console.error('ERROR: MONGODB_URI is not defined in .env.local');
        return;
    }

    // Mask the URI for security
    const maskedUri = process.env.MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');
    console.log('Masked URI:', maskedUri);

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connection successful!');
        console.log('Database name:', mongoose.connection.name);

        // Try to find users
        const User = mongoose.model('User', new mongoose.Schema({
            username: String,
            password: String,
            email: String
        }));

        const users = await User.find({});
        console.log('Total users found:', users.length);
        if (users.length > 0) {
            console.log('First user:', users[0].username);
        }

        await mongoose.disconnect();
    } catch (error) {
        console.error('❌ Connection failed!');
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
    }
}

testConnection();
