/**
 * EventEmitter in Node.js is a class used to create and handle custom events.
   One part of the application emits an event using emit(), and other parts listen to it using on().

   EventEmitter helps implement event-driven architecture in Node.js where one module emits events and other modules respond to them independently.
 */
const EventEmitter = require("events");

// Create emitter object
const emitter = new EventEmitter();

// Listener 1
emitter.on("orderPlaced", (customerName) => {
  console.log(`Restaurant received order from ${customerName}`);
});

// Listener 2
emitter.on("orderPlaced", (customerName) => {
  console.log(`Delivery partner assigned for ${customerName}`);
});

// Listener 3
emitter.on("orderPlaced", (customerName) => {
  console.log(`Email sent to ${customerName}`);
});

// Trigger event
emitter.emit("orderPlaced", "Surya");
