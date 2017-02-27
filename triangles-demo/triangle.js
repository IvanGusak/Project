import React from "react";
import ReactDOM from "react-dom";

import { Button } from "../components/";

import styles from "./style.scss";

class Triangle extends React.Component {
  constructor(...arg){
    super(...arg);
    this.state ={
      mass: {},
      id: 0,
      active: false
    }
    this.createMass = this.createMass.bind(this);
    this.drawMass = this.drawMass.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentDidMount(){
      this.setState({mass: this.createMass()});
  }
  componentWillUnmount () {
      clearInterval(this.state.id);
      this.setState( { active: false } );
  }
  
  handleToggle() {
    const id = this.state.id;
    let mass = Object.assign( {}, this.state.mass);
    if(!this.state.active) {
      this.setState( { id: setInterval(() => { mass = this.drawMass(mass) } ,20), active: true } )
    }
    else {
      clearInterval(id);
      this.setState( { active: false } );
    }
  }
  drawMass(arg){
    const canvas = this.refs.canvas;
    const context = canvas.getContext("2d");
    let mass = arg,
        gradient = "",
        arr = [];
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let key in mass){
      context.beginPath();
      context.arc(mass[key].pos[0],mass[key].pos[1],mass[key].size,0,2*Math.PI);
      context.fillStyle = mass[key].color;
      context.strokeStyle = mass[key].color;
      context.fill(); 
      mass[key].move();
      mass[key].drawTriangle(mass);
      context.stroke();
    }
    return mass;
  }
  randomPos(){
    const canvas = this.refs.canvas;
    let x = 0,y = 0;
    x = Math.ceil(Math.random()*canvas.width*0.95 + 1);
    y = Math.ceil(Math.random()*canvas.height*0.95 + 1);
    return [x,y];
  }
  createMass(){
    const pallete = ["#05CDE5","#FFB803","#FF035B","#3D3E3E"];
    const canvas = this.refs.canvas;
    const context = canvas.getContext("2d");
    let mass = {};       
    for(let i = 0; i < 100; i ++){
      mass[i] = {
        "size": Math.ceil(Math.random()*2),
        "color": pallete[Math.floor(Math.random()*4)],
        "speed": Math.random()*1.5,
        "pos": this.randomPos(),
        "incrX": true,
        "incrY": true,
        "drawTriangle": (obj)=>{
          const that = mass[i];
          let res = [];
          let arr = obj;
          let dx = 0;
          let dy = 0;
          for(let key in arr){
            dx = Math.sqrt(Math.pow((arr[key].pos[0] - that.pos[0]),2));
            dy = Math.sqrt(Math.pow((arr[key].pos[1] - that.pos[1]),2));
            if(((dx + dy) > 0) && ((dx + dy) < 60)){
              res.push([arr[key].pos[0],arr[key].pos[1]]);
            }
          }
          if((res.length>1)){
            res.reduce((pre,curr,i)=>{
              if(!((i+1)%2)){
                context.beginPath();
                context.moveTo(that.pos[0],that.pos[1]);
                context.lineTo(curr[0],curr[1]);
                context.globalAlpha = 0.4;
                context.lineTo(pre[0],pre[1]);
                context.fillStyle = that.color;
                context.fill();
              }
              return curr;
            })
          }
        },
        "move": ()=>{
          const that = mass[i];
          const limX = (canvas.width - that.size);
          const limY = (canvas.height - that.size);
          let x = that.pos[0];
          let y = that.pos[1];   
           if((that.pos[0] < that.size) || (that.pos[0] > limX)){
            that.incrX = !that.incrX;
          }
          if((that.pos[1] < that.size) || (that.pos[1] > limY)){
            that.incrY = !that.incrY;
          }
          x += (that.incrX)? that.speed : -that.speed;
          y += (that.incrY)? that.speed : -that.speed;
          that.pos = [x,y];
        }
      }
    }
    return mass;
  }
  render(){
    return (
		<div className={styles["container"]}>
			<div className={styles["frame"]}>
				<canvas className={styles["canvas"]} width="650" height="400" ref="canvas"/>
			</div>
			<hr/>
			<Button
				ripple
				wave
				theme="dark" 
				handleClick={this.handleToggle} 
			> 
				{(this.state.active) ? "Stop" : "Start"} 
			</Button>
		</div>
	)
  }
};

export { Triangle };