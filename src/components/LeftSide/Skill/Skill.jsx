import React, { Component } from "react";
import SkillCard from "./SkillCard";


export default class Skill extends Component {
    render() {
        const skillLevels = [
            {
                id: 0,
                title: "Html",
                level: "Advanced"
            },
            {
                id: 1,
                title: "Css",
                level: "Intermediate"
            },
            {
                id: 2,
                title: "Javascript",
                level: "Intermediate"
            },
            {
                id: 3,
                title: "React",
                level: "Beginner"
            },
            {
                id: 4,
                title: "Python",
                level: "Intermediate"
            },
        ]

        const skillLevelElements = skillLevels.map(skillLevel => {
            return <SkillCard 
            key={skillLevel.id} 
            title={skillLevel.title}
            level={skillLevel.level}
            />
        })

        return (
            <div className="skill-container">
                {skillLevelElements}
            </div>
        )
    }
}