var React = require('react');
var Jumbotron = require('./Jumbotron.jsx');

// Homepage Component
var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <Jumbotron />
        <div className="container">
            <div className="row">
                <p>Main content</p>
            </div>
          </div>
      </div>
    )
  }
});
module.exports = HomePage;