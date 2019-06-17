"use strict";
let datafire = require('datafire');

let google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let encodedMessage = await google_gmail.buildMessage({}, context);
    let message = await google_gmail.users.messages.send({
      userId: oliviakgosselin,
    }, context);
    return message;
  },
});
