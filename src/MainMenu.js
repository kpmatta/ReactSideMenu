import React, { Component } from 'react';
import './MainMenu.css';
import '../public/external/css/font-awesome.css'
import SettingsMenu from './SettingsMenu';
import RenderSettings from './RenderSettings';

class MainMenu extends Component {
  constructor(props){
    super(props);
  }
  menuPanelClick() {
    var e = document.getElementById("menuPanelId");

    if(e.style.display === 'block'){
      e.style.display = 'none';
    }
    else {
      e.style.display = 'block';
    }
  }

  settingsMenuItemHeaderClick(){
    if(this.refs.settingsmenu.state.visible) {
      this.refs.settingsmenu.hide();
    }
    else {
      this.refs.settingsmenu.show();
    }
  }

  render() {

    return (
      <div>
        <div className="expandPanel">
          <button className="menuBtn" onClick={this.menuPanelClick} ><i className="fa fa-bars" aria-hidden="true"></i> </button>
        </div>
        <div id="menuPanelId" className="menuPanel">
          <button className="menuBtn"><i className="fa fa-file" aria-hidden="true"></i> </button>
          <button className="menuBtn"><i className="fa fa-home" aria-hidden="true"></i> </button>
          <button className="menuBtn"><i className="fa fa-arrows-alt" aria-hidden="true"></i> </button>
          <button className="menuBtn"><i className="fa fa-undo" aria-hidden="true"></i> </button>
          <button className="menuBtn"><i className="fa fa-undo fa-flip-horizontal" aria-hidden="true"></i> </button>
          <button className="menuBtn"><i className="fa fa-map-marker" aria-hidden="true"></i> </button>
          <button className="menuBtn"><i className="fa fa-camera" aria-hidden="true"></i> </button>
          <button className="menuBtn" onClick={this.settingsMenuItemHeaderClick.bind(this)}><i className="fa fa-cog" aria-hidden="true"></i> </button>
        </div>
        <SettingsMenu ref="settingsmenu" />
      </div>
    );
  }
}

export default MainMenu;
