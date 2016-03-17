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
    var style = {
      paddingLeft: 15
    }
    
    return (
      <div>
        <hr />
        
        <footer style={style}>
          <p>&copy; {this.props.copy_year} {this.props.website}</p>
        </footer>
      </div>
    )
  }
});

module.exports = Footer;