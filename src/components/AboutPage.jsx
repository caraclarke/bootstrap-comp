var React = require('react');

var AboutPage = React.createClass({
  render: function() {
    return (
        <div className="container">
          <div className="row">
            <h2 className="page-header">About Us</h2>
            <p>Some Content</p>
          </div>
        </div>
    );
  }
});

module.exports = AboutPage;