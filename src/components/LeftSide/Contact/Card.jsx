import React, { Component } from "react";

export default class Card extends Component {
    render() {
        return (
            <div className="contact-card">
                <img />
                <div>
                    <h5>{this.props.title}</h5>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}