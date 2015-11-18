var express = require('express');
var colors = require('colors');
var config = require('./config/env/' + (process.env.NODE_ENV || 'development') + '.js');
var glob = require('glob');
var async = require('async');
var http = require('http');

var app = express();
app.use(require('body-parser').json());

async.series([
  function(cb) {
    config.server.static.app.forEach(function(p) {
      console.log('✓ Serving static files from '.bold.green + p);
      app.use('/', express.static(p));
    });

    cb();
  },

  function(cb) {
    var mongoose = require('mongoose');
    mongoose.connect(config.server.db, {
      server: {
        socketOptions: {
          keepAlive: 1
        }
      }
    });
  }

]);

console.log('Rocking out on port %d', config.server.localport);
http.createServer(app).listen(config.server.localport);
