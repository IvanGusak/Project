require("babel-register")();

var socket = require('socket.io-client')('http://localhost:3333');
  socket.on('connect', function(){});
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
var jsdom = require("jsdom").jsdom;

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + './index.html');
});

var exposedProperties = ["window", "navigator", "document"];

global.document = jsdom("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === "undefined") {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: "node.js"
};
