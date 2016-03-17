var React = require('react');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = require('react-router').hashHistory;

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var Jumbotron = require('./components/Jumbotron.jsx');
var AboutPage = require('./components/AboutPage.jsx');

var Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />
    </Route>
    <Route path="/about" component={BasePage}>
      <IndexRoute component={AboutPage} />
    </Route>
  </Router>
);

module.exports = Routes;