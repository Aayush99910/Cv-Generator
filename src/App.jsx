import React, { Component } from "react";
import LeftSide from "./components/LeftSide/LeftSide.jsx";
import RightSide from "./components/RightSide/RightSide.jsx";

export default class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="big-container">
                <LeftSide />
                <RightSide />
            </div>
        )
    }
}