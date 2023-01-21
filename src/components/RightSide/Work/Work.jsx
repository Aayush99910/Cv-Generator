import React, { Component } from "react";
import WorkCard from "./WorkCard";
import "./Work.css"

export default class Work extends Component {
    render() {
        const works = [
            {
                id: 0,
                from: 2021,
                to: 2022,
                position: 'Junior Web Developer',
                company: 'IbrizNepal',
                location: 'Chhauni'
            },
            {
                id: 1,
                from: 2018,
                to: 2019,
                position: 'Content Writer',
                company: 'esewa-nepal',
                location: 'Lazimpat'
            }
        ]

        const workElements = works.map(work => {
            return <WorkCard key={work.id} data={work} />
        })

        return (
            <div className="work-container">
                <hr></hr>
                <h1>WORK EXPERIENCE</h1>
                <hr></hr>
                {workElements}
            </div>
        )
    }
}