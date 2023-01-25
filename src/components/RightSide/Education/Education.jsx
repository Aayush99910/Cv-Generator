import React, { Component } from "react";
import EducationCard from "./EducationCard";
import "./Education.css";
import {IoMdAddCircle} from 'react-icons/io';
import {MdCancel} from "react-icons/md";
import { nanoid } from "nanoid";

export default class Education extends Component {
    state = {
        isEditing: false,
        education: {
            id: nanoid(),
            from: '',
            to: '',
            university: '',
            city: '',
            degree: '',
            subject: ''
        },
        educations: [
            {
                id: nanoid(),
                from: 2019,
                to: 2021,
                university: 'Xavier Academy',
                city: 'Kathmandu',
                degree: 'High School',
                subject: 'Science'
            },
            {
                id: nanoid(),
                from: 2023,
                to: 'Present',
                university: 'San Fransisco Bay University',
                city: 'Fremont',
                degree: 'Bachelors degree',
                subject: 'Computer Science'
            }
        ]
    } 

    delete = (e) => {
        const id = e.target.parentElement.parentElement.parentElement.id;

        this.setState(prevState => {
            const oldState = prevState.educations;
            const newState = oldState.filter(function(eachItem) {
                if (eachItem.id == id) {
                    return false;
                } else {
                    return true;
                }
            })
            
            return {
                educations: [...newState]
            }
        })
    }

    changeEditingMode = () => {
        this.setState(prevState => {
            return {
                isEditing: !prevState.isEditing
            }
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState(prevState => {
            return {
                education: {
                    ...prevState.education,
                    [name]: value
                }
            }
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                educations: [...prevState.educations, this.state.education],
                education: {
                    id: nanoid(),
                    from: '',
                    to: '',
                    university: '',
                    city: '',
                    degree: '',
                    subject: ''
                }
            }
        })
        this.changeEditingMode();
    }

    render() {
        const educationElements = this.state.educations.map(education => {
            return <EducationCard id={education.id} key={education.id} data={education} deleteFunc={this.delete}/>
        })

        return (
            <div className="education-container">
                {
                    this.state.isEditing ? 
                    <div>
                        <hr></hr>
                        <div className="education-heading">
                            <h1>EDUCATION</h1>
                            <MdCancel className="cancel-button" onClick={this.changeEditingMode}/>
                        </div>
                        <hr className="h"></hr>
                        <form onSubmit={this.handleFormSubmit}>
                            <input 
                                autoComplete="off"
                                type="text"
                                placeholder="From"
                                name="from"
                                onChange={this.handleChange}
                            />
                            <input 
                                autoComplete="off"
                                type="text"
                                placeholder="To"
                                name="to"
                                onChange={this.handleChange}
                            />
                            <input
                                autoComplete="off" 
                                type="text"
                                placeholder="Name of the University"
                                name="university"
                                onChange={this.handleChange}
                            />
                            <input 
                                autoComplete="off"
                                type="text"
                                placeholder="City"
                                name="city"
                                onChange={this.handleChange}
                            />
                            <input 
                                autoComplete="off"
                                type="text"
                                placeholder="Degree"
                                name="degree"
                                onChange={this.handleChange}
                            />
                            <input 
                                autoComplete="off"
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                onChange={this.handleChange}
                            />
                            <div>
                                <button>Add</button>
                                <button onClick={this.changeEditingMode}>Cancel</button>
                            </div>
                        </form>
                        {educationElements}
                    </div> :
                    <div>
                        <hr></hr>
                        <div className="education-heading">
                            <h1>EDUCATION</h1>
                            <IoMdAddCircle className="add-button" onClick={this.changeEditingMode}/>
                        </div>
                        <hr className="h"></hr>
                        {educationElements}
                    </div>
                }
            </div>
        )
    }
}