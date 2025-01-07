// server.js
const WebSocket = require('ws');
const path = require('path');
const express = require('express');

const app = express();
const server = app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

const wss = new WebSocket.Server({ server });

// Handle WebSocket connection
wss.on('connection', (ws) => {
    console.log('New client connected!');
    
    // When a message is received from the client
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        
        // Broadcast the message to all connected clients
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
    
    // When the connection is closed
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Serve static files (HTML, CSS, JS) from the public folder
app.use(express.static(path.join(__dirname, 'public')));