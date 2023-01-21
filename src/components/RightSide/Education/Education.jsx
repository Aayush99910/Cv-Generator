import React, { Component } from "react";
import EducationCard from "./EducationCard";
import "./Education.css";


export default class Education extends Component {
    render() {
        const educations = [
            {
                id: 0,
                from: 2019,
                to: 2021,
                university: 'Xavier Academy, Kathmandu',
                degree: 'High School',
                subject: 'Science'
            },
            {
                id: 1,
                from: 2023,
                to: 2027,
                university: 'San Fransisco Bay University, Fremont',
                degree: 'Bachelors degree',
                subject: 'Computer Science'
            }
        ]

        const educationElements = educations.map(education => {
            return <EducationCard key={education.id} data={education} />
        })

        return (
            <div className="education-container">
                <hr></hr>
                <h1>EDUCATION</h1>
                <hr></hr>
                {educationElements}
            </div>
        )
    }
}