import React, { Component } from "react";
import Name from "./Name/Name.jsx";
import Profile from "./Profile/Profile.jsx";
import Education from "./Education/Education.jsx";
import Work from "./Work/Work.jsx";
import "./RightSide.css"

export default class RightSide extends Component {
    render() {
        return (
            <div className="right-container">
                <Name />
                <Profile />
                <Education />
                <Work />
            </div>
        )
    }
}