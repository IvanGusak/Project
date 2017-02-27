import React from "react";

import { Button } from "../components/";

import styles from "./style.scss";


class Signature extends React.Component {
    constructor() {
        super();
        this.clearButton = this.clearButton.bind(this);
        this.getMousePos = this.getMousePos.bind(this);
        this.saveData = this.saveData.bind(this);
        this.addMouseMove = this.addMouseMove.bind(this);
        this.getImage = this.getImage.bind(this);
        this.state = {
            Path: [[]],
            data: ""
        }
    }
    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.context = this.canvas.getContext("2d"),
        this.canvas.addEventListener("mousedown", this.addMouseMove);
        this.canvas.addEventListener("mouseup", this.getImage);
    };
    componentDidUpdate(prevProps, prevState) {
        this.canvas = this.refs.canvas;
        this.context = this.canvas.getContext("2d"),
        this.canvas.addEventListener("mousedown", this.addMouseMove);
        this.canvas.addEventListener("mouseup", this.getImage);
    }

    saveData() {
        let data = "";
        data = this.canvas.toDataURL();
        this.setState({ data: data });
        console.log(this.state.data);
    };
    addMouseMove() {
        this.context.beginPath();
        this.canvas.addEventListener("mousemove", this.getMousePos);
    }
    //---Save data and remove mouse events
    getImage() {
        let arr = this.state.Path.slice();
        this.context.beginPath();
        this.drawBezierCurve();
        arr.push([]);
        this.setState({ Path: arr });
        this.saveData();
        this.canvas.removeEventListener("mousemove", this.getMousePos);
    }
    //---Set current mouse(x,y) position to this.state.Path   
    getMousePos(event) {
        const elPos = event.target.getBoundingClientRect();
        const x = Math.round((event.clientX - elPos.left));
        const y = Math.round((event.clientY - elPos.top));
        const arr = this.state.Path.slice();
        const l = arr.length;
        this.context.lineCap = "round";
        this.context.lineWidth = 1;
        this.context.lineTo(x, y);
        this.context.stroke();
        arr[l - 1].push(x + " " + y);
        this.setState({ Path: arr });
    };
    //---Calculate control points[x1,y1,x2,y2]
    getControlPoints(x0, y0, x1, y1, x2, y2, t) {
        const a = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)),
            b = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
            fa = t * a / (a + b),
            fb = t * b / (a + b),
            p1x = x1 - fa * (x2 - x0),
            p1y = y1 - fa * (y2 - y0),
            p2x = x1 + fb * (x2 - x0),
            p2y = y1 + fb * (y2 - y0);
        return [p1x, p1y, p2x, p2y];
    }
    //---Getting  lineWidth 
    getLineWidth(p1, p2, p3, t, curr) {
        const ax = Math.sqrt(Math.pow((p2[0] - p1[0]), 2)),
            ay = Math.sqrt(Math.pow((p2[1] - p1[1]), 2)),
            bx = Math.sqrt(Math.pow((p3[0] - p2[0]), 2)),
            by = Math.sqrt(Math.pow((p3[1] - p2[1]), 2)),
            deltaA = (ax + ay) / 2,
            deltaB = (bx + by) / 2,
            max = 8, min = 1,
            kA = (1 + deltaA / 100) * (1 - deltaA / 100),
            kB = (1 + deltaB / 100) * (1 - deltaB / 100),
            widthA = max * kA + min * (1 - kA),
            widthB = max * kB + min * (1 - kB),
            pointWidth = Math.pow((1 - t), 3) * curr + 3 * t * Math.pow((1 - t), 2) * curr + 3 * t * t * (1 - t) * curr + t * t * t * widthB;
        return (pointWidth <= 0) ? 1 : pointWidth;
    }
    //---Draw Bezier's curve througth all path
    drawBezierCurve() {
        const path = this.state.Path.slice();
        let start = [], end = [], mid = [], ctrl = [], point = [];
        let step = 6, lineWidth = 6;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (path[0][0] == undefined) {
            return false;
        }
        //---Beating path into smaller segments
        path.forEach((curr) => {
            curr.forEach((curr, i, arr) => {
                if ((arr[i + step] == undefined) || (i % step)) {
                    return false;
                }
                start = [+arr[i].split(" ")[0], +arr[i].split(" ")[1]];
                end = [+arr[i + step].split(" ")[0], +arr[i + step].split(" ")[1]];
                mid = [+arr[Math.floor(i + step / 2)].split(" ")[0], +arr[Math.floor(i + step / 2)].split(" ")[1]];
                //--- Manual Bezier's method
                for (let t = 0; t < 1; t += 0.01) {
                    lineWidth = (this.getLineWidth(start, mid, end, t, lineWidth));
                    ctrl = this.getControlPoints(start[0], start[1], mid[0], mid[1], end[0], end[1], 0.5);
                    point[0] = Math.pow((1 - t), 3) * start[0] + 3 * t * Math.pow((1 - t), 2) * ctrl[0] + 3 * t * t * (1 - t) * ctrl[2] + t * t * t * end[0];
                    point[1] = Math.pow((1 - t), 3) * start[1] + 3 * t * Math.pow((1 - t), 2) * ctrl[1] + 3 * t * t * (1 - t) * ctrl[3] + t * t * t * end[1];
                    this.context.beginPath();
                    this.context.lineWidth = lineWidth;
                    this.context.moveTo(point[0], point[1]);
                    this.context.lineCap = "round";
                    this.context.lineTo(point[0], point[1]);
                    this.context.stroke();
                }
            });
        });
    };
    //---Reset  all data
    clearButton() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.setState({ Path: [[]] });
        this.render();
    };
    render() {
        return <div className={styles["container"]}>
            <div className={styles["frame"]}>
                <canvas className={styles["canvas"]} width="650" height="400" ref="canvas" />
            </div>
            <hr />
            <Button theme="dark" handleClick={this.clearButton}>Erase</Button>     
        </div>
    }
}

export { Signature };