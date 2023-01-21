import React, { Component }  from "react";


export default class SkillCard extends Component {
    render() {
        return (
            <div className="skill-card-container">
                <div>
                    <h5>{this.props.title}</h5>
                </div>
                <div>
                    <p>{this.props.level}</p>
                </div>
            </div>
        )
    }
}