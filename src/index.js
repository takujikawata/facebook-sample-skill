'use strict';

var Alexa = require("alexa-sdk");
var FB = require('facebook-node');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'NewSession': function () {
      var accessToken = this.event.session.user.accessToken;
      if (accessToken) {
          FB.setAccessToken(accessToken);
          console.log("HAVE ACCESS TOKEN : " + accessToken);
          this.emit(':ask', "Welcome to Facebook test skill. Please say <s>post message</s> to post a message on your facebook page" , "say post message");
      }
      else {
          this.emit(':tell', "couldn't connect to facebook", "try again");
      }
    },
    'PostMessageIntent': function () {
      var date = new Date();
      var body = 'Post message from Alexa. Time now is ' + date.toUTCString();
      FB.api('me/feed', 'post', { message: body }, (res) => {
        if(!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }
        console.log('Post Id: ' + res.id);
        this.emit(":tell", "Ok, I successfully posted a message on your facebook page.");
      });
    },
    'Unhandled': function () {
      this.emit(":ask", "Say post message to post a message on your facebook page.", "say post message");
    }
};
