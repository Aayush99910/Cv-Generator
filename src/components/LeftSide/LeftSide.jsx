import React, { Component } from "react";
import Photo from "./Photo/Photo";
import Profile from "../RightSide/Profile/Profile";
import Contact from "./Contact/Contact";
import Skill from "./Skill/Skill";
import "./Leftside.css"

export default class LeftSide extends Component {
    render() {
        return (
            <div className="left-container">
                <Photo />
                <Contact />
                {/* <Skill /> */}
            </div>    
        )
    }
}