import React, { Component } from "react";


export default class WorkCard extends Component {
    render() {
        return (
            <div className="work-card-container">
                <div>
                    <h3>{this.props.data.from} - {this.props.data.to}</h3>
                </div>
                <div>
                    <h3>{this.props.data.position}</h3>
                    <p>{this.props.data.company}, {this.props.data.location}</p>
                </div>
            </div>
        )
    }
}