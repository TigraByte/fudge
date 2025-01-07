// Simple Chat System

document.getElementById('send-btn').addEventListener('click', function() {
    let messageInput = document.getElementById('message-input');
    let message = messageInput.value.trim();

    if (message) {
        displayMessage(message);
        messageInput.value = ''; // Clear input
    }
});

function displayMessage(message) {
    let messagesContainer = document.getElementById('messages');
    
    let messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = message;
    
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
}