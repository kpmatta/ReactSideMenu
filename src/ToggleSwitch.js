import React, { Component } from 'react';
import './SettingsMenu.css';
//import '../public/external/materialize/css/materialize.css'

class ToggleSwitch extends Component {


  render(){
    return(
      <div className="toggle-switch-item">
        <label>{this.props.Text}</label>
        <label className="switch"><input type="checkbox"></input><div className="slider round"></div></label>
      </div>
    );
  }
}

export default ToggleSwitch;
