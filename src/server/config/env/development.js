'use strict';
var path = require('path');

module.exports = {
  server: {
    localport: process.env.PORT || 1337,
    db: process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/shipped',
    static: {
      lib: [path.resolve(__dirname, '../../../client/libs')],
      app: [path.resolve(__dirname, '../../../client/')],
      node: [path.resolve(__dirname, '../../../client/node_modules')]
    }
  }
};
