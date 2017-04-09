import React, { Component } from 'react';
import './SettingsMenu.css';
import SettingsMenuItem from './SettingsMenuItem';
import SettingsMenuItemHeader from './SettingsMenuItemHeader';
import RenderSettings from './RenderSettings';

class SettingsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.state = { menuType: "main-menu"};
  }

  show() {
    this.setState({visible: true});
  }

  hide(){
    this.setState({visible: false});
  }

  setMainmenu() {
    this.setState({menuType: "main-menu"});
  }

  renderClick() {
    this.setState({menuType: "render-menu"});
  }

  envronmentClick() {

  }

  displayClick() {

  }

  selectionClick() {

  }

  miscClick() {

  }

  ConditionalMenu() {

  }

  render() {
    var visibleStateClass = this.state.visible ? "settings-menu" : "settings-menu-hidden";
    let renderObj;

    if (this.state.menuType === "main-menu") {
      renderObj = (
        <div>
          <SettingsMenuItemHeader onClick={this.hide.bind(this)}>Settings</SettingsMenuItemHeader>
          <SettingsMenuItem onClick={this.renderClick.bind(this)} > Render Settings</SettingsMenuItem>
          <SettingsMenuItem onClick={this.envronmentClick.bind(this)} >Environment Settings</SettingsMenuItem>
          <SettingsMenuItem onClick={this.displayClick.bind(this)} >Display Settings</SettingsMenuItem>
          <SettingsMenuItem onClick={this.selectionClick.bind(this)} >Selection Settings</SettingsMenuItem>
          <SettingsMenuItem onClick={this.miscClick.bind(this)} >Misc Settings</SettingsMenuItem>
        </div>
      )
    } else if (this.state.menuType === "render-menu") {
      renderObj = (<RenderSettings onClick={this.setMainmenu.bind(this)} />)
    }

    return (
      <div className={visibleStateClass}>
        { renderObj }
      </div>
    );
  }
}

export default SettingsMenu;
