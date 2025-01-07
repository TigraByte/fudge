// Connect to the WebSocket server
const socket = new WebSocket('ws://localhost:3000');

// Get DOM elements
const sendButton = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

// Send message when "Send" button is clicked
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    
    if (message) {
        // Send message to the WebSocket server
        socket.send(message);
        
        // Clear input field
        messageInput.value = '';
    }
});

// Listen for messages from the server (other clients)
socket.addEventListener('message', (event) => {
    const message = event.data;
    displayMessage(message);
});

// Function to display messages in the chat box
function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    
    // Scroll to the bottom of the chat box
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Handle WebSocket connection opening
socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
});

// Handle WebSocket errors
socket.addEventListener('error', (error) => {
    console.log('WebSocket error:', error);
});
