import React, { Component } from "react";
import Name from "./Name/Name.jsx";
import Education from "./Education/Education.jsx";
import "./RightSide.css"

export default class RightSide extends Component {
    render() {
        return (
            <div className="right-container">
                <Name />
                <Education />
            </div>
        )
    }
}