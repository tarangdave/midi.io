var Appbase = require("appbase-js");
var config = {
  "appname": "midi",
  "username": "xEZJC9JaA",
  "password": "6b96a817-3a70-4703-8ee2-3a3c960ae9dd",
  "type": "midi"
};
var appbaseRef = new Appbase({
  url: 'https://scalr.api.appbase.io',
  appname: config.appname,
  username: config.username,
  password: config.password
});

exports.appbaseRef = appbaseRef;
exports.config = config;
