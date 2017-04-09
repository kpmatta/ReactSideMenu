import React, { Component } from 'react';
import './SettingsMenu.css';

class SettingsMenuItem extends Component {

  onClick(){
    this.props.onClick();
  }

  render(){
    return(
      <div className="settings-menu-item" onClick={this.props.onClick}>{this.props.children}</div>
    );
  }
}

export default SettingsMenuItem;
