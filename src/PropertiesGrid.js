import React, { Component } from 'react';
import SettingsMenuItemHeader from './SettingsMenuItemHeader';
import './PropertiesGrid.css';

//import './SettingsMenu.css';
//import '../public/external/materialize/css/materialize.css'

class PropertiesGrid extends Component {

  onClick(){
    this.props.onClick();
  }

  onButtonClick(){
    var panel = document.getElementById("idPanel1");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
  }

  onButtonClick2(){
    var panel = document.getElementById("idPanel2");
        if (panel.style.display === "none") {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
  }

  render(){

    return(
        <div className="pgBody">
          <SettingsMenuItemHeader onClick={this.onClick.bind(this)}> &lt;&lt; &nbsp; &nbsp; &nbsp; Properties</SettingsMenuItemHeader>
          <div>
          <div className="container">
            <p>Filter properties...</p>
            <select>
              <option value="(All)">(All)</option>
              <option value="Group 1">Group 1</option>
              <option value="Group 2">Group 2</option>
            </select>
          </div>
          <div className="container">
            <input type="search" style={{width:"230px"}} id="mySearch" placeholder="Search for something.."/>
          </div>
          <div className="pgGroupCell">
          <button onClick={this.onButtonClick.bind(this)} className="accordion">Group 1</button>
          </div>
          <div id="idPanel1" className="panel">
            <tbody>
              <tr className="pgRow">
                <td className="pgCellName">Name 1</td>
                <td className="pgCellValue">Value 1</td>
              </tr>
              <tr className="pgRow">
                <td className="pgCellName">Name 2</td>
                <td className="pgCellValue">Value 2</td>
              </tr>
              <tr className="pgRow">
                <td className="pgCellName">Name 3</td>
                <td className="pgCellValue">Value 3</td>
              </tr>
              <tr className="pgRow">
                <td className="pgCellName">Name 4</td>
                <td className="pgCellValue">Value 4</td>
              </tr>
            </tbody>
          </div>
          <div className="pgGroupCell">
            <button onClick={this.onButtonClick2.bind(this)} className="accordion">Group 2</button>
          </div>
          <div id="idPanel2" className="panel">
            <tbody>
            <tr className="pgRow">
              <td className="pgCellName">Name 1</td>
              <td className="pgCellValue">Value 1</td>
            </tr>
            <tr className="pgRow">
              <td className="pgCellName">Name 2</td>
              <td className="pgCellValue">Value 2</td>
            </tr>
            <tr className="pgRow">
              <td className="pgCellName">Name 3</td>
              <td className="pgCellValue">Value 3</td>
            </tr>
            <tr className="pgRow">
              <td className="pgCellName">Name 4</td>
              <td className="pgCellValue">Value 4</td>
            </tr>
            </tbody>
          </div>
        </div>
        </div>
    );
  }
}

export default PropertiesGrid;
