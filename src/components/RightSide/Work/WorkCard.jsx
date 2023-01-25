import React, { Component } from "react";
import {AiFillDelete} from 'react-icons/ai';


export default class WorkCard extends Component {
    render() {
        return (
            <div className="work-card-container" id={this.props.id}>
                <div className="date-details-container">
                    <div className="date">
                        <h3>{this.props.data.from} - {this.props.data.to}</h3>
                    </div>
                    <div>
                        <h3>{this.props.data.position}</h3>
                        <p>{this.props.data.company}, {this.props.data.location}</p>
                    </div>
                </div>
                <div>
                    <AiFillDelete onClick={this.props.deleteFunc}  className="delete-button"/>
                </div>  
            </div>
        )
    }
}