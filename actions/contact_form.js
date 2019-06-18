"use strict";
let datafire = require('datafire');

let google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  inputs: [{
    type: "string",
    title: "firstName"
  }, {
    type: "string",
    title: "lastName"
  }, {
    type: "string",
    title: "email"
  }, {
    type: "string",
    title: "subject"
  }, {
    type: "string",
    title: "message"
  }],
  handler: async (input, context) => {
    let encodedMessage = await google_gmail.buildMessage({
      to: "oliviakgosselin@gmail.com:",
      from: "",
      subject: input.firstName + ' ' + input.lastName + ' <' + input.email + '> ' + input.subject,
      body: input.message,
    }, context);
    let message = await google_gmail.users.messages.send({
      body: {
        raw: encodedMessage,
      },
      userId: "me",
    }, context);
    return message;
  },
});
