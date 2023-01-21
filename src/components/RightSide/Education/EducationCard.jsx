import React, { Component } from "react";


export default class EducationCard extends Component {
    render() {
        return (
            <div className="education-card-container">
                <div>
                    <h3>{this.props.data.from} - {this.props.data.to}</h3>
                </div>
                <div>
                    <h3>{this.props.data.university}</h3>
                    <p>Degree: {this.props.data.degree}</p>
                    <p>Subject: {this.props.data.subject}</p>
                </div>
            </div>
        )
    }
}