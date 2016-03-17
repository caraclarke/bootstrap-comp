var React = require('react');
var Link = require('react-router').Link;

var Jumbotron = React.createClass({
  PropTypes: {
    heading: React.PropTypes.string,
    text: React.PropTypes.string,
    link: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      heading: 'Welcome',
      text: 'Welcome to our shiny new website built with React components',
      link: 'http://google.com'
    }
  },
  render: function() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <p><Link className="btn btn-primary btn-lg" to={this.props.link} target="_blank" role="button">Learn more &raquo;</Link></p>
        </div>
      </div>
    );
  }
});

module.exports = Jumbotron;