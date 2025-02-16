/**
 * Main application routes
 */

'use strict';
const auth = require('./api/auth/auth.service')

module.exports = function (app) {
  // Insert routes below
  app.use('/api', require('./api/user/user.route'));
  app.use("/api", require("./api/auth/auth.route"));
  app.use("/api", require("./api/lostReason/lostReason.route"));
  app.use("/api", require("./api/leadStatus/leadStatus.route"));
};