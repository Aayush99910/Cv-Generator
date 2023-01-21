import React, { Component } from "react";

export default class Card extends Component {
    render() {
        return (
            <div className="contact-card">
                <div> 
                    <img src={this.props.photo} />
                </div>
                <div>
                    <h5>{this.props.title}</h5>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}