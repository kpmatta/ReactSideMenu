import React, { Component } from 'react';
import ToggleSwitch from './ToggleSwitch';
import SettingsMenuItemHeader from './SettingsMenuItemHeader';

import './SettingsMenu.css';
//import '../public/external/materialize/css/materialize.css'

class RenderSettings extends Component {

  onClick(){
    this.props.onClick();
  }

  render(){

    return(
      <div>
        <SettingsMenuItemHeader onClick={this.onClick.bind(this)}> &lt;&lt; &nbsp; &nbsp; &nbsp; Render Settings</SettingsMenuItemHeader>
        <ToggleSwitch Text="Sun Shadows"/>
        <ToggleSwitch Text="Anti Alias"/>
        <ToggleSwitch Text="Edge Enhance"/>
        <ToggleSwitch Text="Soft Shadows"/>
        <ToggleSwitch Text="Blur"/>
        <ToggleSwitch Text="Bloom"/>
        <ToggleSwitch Text="DOF"/>
        <ToggleSwitch Text="HDR"/>
        <ToggleSwitch Text="God Ray"/>
      </div>
    );
  }
}

export default RenderSettings;
