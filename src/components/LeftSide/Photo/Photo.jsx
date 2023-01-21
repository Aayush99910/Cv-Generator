import React, { Component } from "react";
import './Photo.css';
import me from "../../../assets/Aayush.jpg"


export default class Photo extends Component {
    render() {
        return (
            <div className="user-photo-container">
                <div  className="user-photo">
                    <img src={me}/>
                </div>
            </div>
        )
    }
}