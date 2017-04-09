import React, { Component } from 'react';

import MainMenu from './MainMenu';

class Goview extends Component {

  constructor(props){
    super(props);
    this.state = {date: new Date()};
    //this.state = {canvas: this.refs.canvas};
    //this.state = {ctx: this.state.canvas.getContext('2d')};
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentWillUnmount() {

  }

  loadBackgroundImage(ctx) {
    var myImg = new Image();

    myImg.onload = function(){
      ctx.drawImage(myImg, 0, 0);
    }

    myImg.src = './images/snap.png';
  }

  updateCanvas() {
    var canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    // load a temporary background image
    this.loadBackgroundImage(ctx);

  }

  render() {

    // Inline styles
    const canvasStyle = {
      position: 'relative',
    };

     return (
      <div>
        {/*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/}
        <canvas ref="canvas" width="800" height="600" style={canvasStyle} />
        <MainMenu />
      </div>
     );
  }
}

export default Goview;
