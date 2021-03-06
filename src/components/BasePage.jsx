var React = require('react');
var NavBar = require('./nav/NavBar.jsx');
var Jumbotron = require('./Jumbotron.jsx');
var HomePage = require('./HomePage.jsx');
var Footer = require('./Footer.jsx');

var navLinks = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "About",
    href: "/about/"
  }
];

// Main App Component
var App = React.createClass({
  render: function() {
    // const { main, content } = this.props.children
    
    return (
      <div>
        <NavBar titleColor="#3097d1" linkColor="" navData={navLinks}/>
          {this.props.children}
        <Footer />
      </div>
    )
  }
});

module.exports = App;