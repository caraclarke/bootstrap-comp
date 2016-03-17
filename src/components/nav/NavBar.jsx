var React = require('react');
var NavItem = require('./NavItem.jsx');
var Link = require('react-router').Link;

// Navbar Component
var NavBar = React.createClass({
  propTypes: {
    brand: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      brand: 'My Website'
    }
  },
  render: function() {
    if (this.props.color == 'dark') {
      var navClass = 'navbar navbar-inverse';
    } else {
      var navClass = 'navbar navbar-default';
    }
    
    var navStyle = {
      WebkitBoxShadow: "0 0 4px rgba(0,0,0.4)",
      MozBoxShadow: "0 0 4px rgba(0,0,0.4)",
      boxShadow: "0 0 4px rgba(0,0,0.4)",
      borderRadius: 0,
      marginBottom: 25
    };
    
    var titleStyle = {};
    var linkStyle = {}
    
    if (this.props.bgColor)
      navStyle.background = this.props.bgColor;
    
    if (this.props.titleColor)
      titleStyle.color = this.props.titleColor;
      
    if (this.props.linkColor)
      linkStyle.color = this.props.linkColor;
    
    var createLinkItem = function(item, index) {
      return <NavItem aStyle={linkStyle} key={item.title + index} href={item.href} title={item.title}/>
    };
    
    return (
      <div>
        <nav className="navClass" style={navStyle}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link style={titleStyle} className="navbar-brand" to="/">{this.props.brand}</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
});

module.exports = NavBar;