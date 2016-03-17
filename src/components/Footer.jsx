var React = require('react');

// Footer Component
var Footer = React.createClass({
  getDefaultProps: function() {
    return {
      website: 'MyWebsite',
      copy_year: 2016
    }
  },
  render: function() {
    return (
      <div>
        <hr />
        
        <footer>
          <p>&copy; {this.props.copy_year} {this.props.website}</p>
        </footer>
      </div>
    )
  }
});

module.exports = Footer;