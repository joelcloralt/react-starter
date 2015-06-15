'use strict';

var React         = require('react/addons');
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var App           = require('./app');
var HomePage      = require('./pages/homepage');
// var SearchPage    = require('./pages/SearchPage');
// var NotFoundPage  = require('./pages/NotFoundPage');

module.exports = (
  <Route handler={App} path='/'>

    <DefaultRoute handler={HomePage} />

    <Route name='Home' path='/' handler={HomePage} />
        

  </Route>
);