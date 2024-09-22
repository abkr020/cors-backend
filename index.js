const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors()); // Enable CORS

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.get('/api/request', (req, res) => {
    const data = {
        message: 'no',
        // timestamp: new Date(),
        additionalData: ["ak"]
        // message: 'Request received successfully!',
        // timestamp: new Date(),
        // additionalData: [1, 2, 3, 4, 5]
    };
    res.json(data); // Respond with JSON data
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
