var React = require('react');
var NavBar = require('./nav/NavBar.jsx');
var Jumbotron = require('./Jumbotron.jsx');
var Footer = require('./Footer.jsx');

var navLinks = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Practice",
    href: "/product/"
  },
  {
    title: "Practice Two",
    href: "/product/2"
  }
];

// Main App Component
var App = React.createClass({
  render: function() {
  
    return (
      <div>
        <NavBar bgColor="#fff" titleColor="#3097d1" linkColor="" navData={navLinks}/>
        <Jumbotron />
      </div>
    )
  }
});

module.exports = App;