const EventEmitter = require("events");

// Custom class extending EventEmitter
class ChatApp extends EventEmitter {
  sendMessage(user, message) {
    console.log(`${user} sent a message`);

    // Custom event
    this.emit("messageSent", user, message);
  }
}

const chat = new ChatApp();

// Listener for custom event
chat.on("messageSent", (user, message) => {
  console.log(`New message from ${user}: ${message}`);
});

// Trigger custom event
chat.sendMessage("Surya", "Hello everyone!");
