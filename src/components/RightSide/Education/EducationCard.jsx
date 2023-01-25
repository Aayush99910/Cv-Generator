import React, { Component } from "react";
import {AiFillDelete} from 'react-icons/ai';

export default class EducationCard extends Component {
    render() {
        return (
            <div className="education-card-container" id={this.props.id}>
                <div className="date-details-container">
                    <div className="date">
                        <h3>{this.props.data.from} - {this.props.data.to}</h3>
                    </div>
                    <div>
                        <h3>{this.props.data.university}, {this.props.data.city}</h3>
                        <p>Degree: {this.props.data.degree}</p>
                        <p>Subject: {this.props.data.subject}</p>
                    </div>
                </div>
                <div>
                    <AiFillDelete onClick={this.props.deleteFunc}  className="delete-button"/>
                </div>
            </div>
        )
    }
}