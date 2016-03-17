var React = require('react');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = ReactRouter.IndexRoute;
// var HashHistory = require('react-router/lib/HashHistory').default;
// var browserHistory = require('react-router').browserHistory;

// router itself that we need
// individual routes
// 'show this when someone gets to the homepage'

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var Jumbotron = require('./components/Jumbotron.jsx');

// <Router history={browserHistory}>
var Routes = (
  <Router>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage}></IndexRoute>
    </Route>
  </Router>
);

module.exports = Routes;