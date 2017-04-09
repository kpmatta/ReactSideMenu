import React, { Component } from 'react';
import './SettingsMenu.css';

class SettingsMenuItemHeader extends Component {

  onClick() {
    this.props.onClick();
  }

  render(){
    return(
      <div className="settings-menu-item-header" onClick={this.onClick.bind(this)}>{this.props.children}</div>
    );
  }
}

export default SettingsMenuItemHeader;
