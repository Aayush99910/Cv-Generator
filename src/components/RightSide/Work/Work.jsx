import React, { Component } from "react";
import WorkCard from "./WorkCard";
import "./Work.css";
import {IoMdAddCircle} from 'react-icons/io';
import {MdCancel} from "react-icons/md";
import { nanoid } from 'nanoid';

export default class Work extends Component {
    state = {
        isEditing: false,
        work: {
            id: nanoid(),
            from: '',
            to: '',
            position: '',
            company: '',
            location: '',
        },
        works: [
            {
                id: nanoid(),
                from: 2021,
                to: 2022,
                position: 'Junior Web Developer',
                company: 'IbrizNepal',
                location: 'Chhauni'
            },
            {
                id: nanoid(),
                from: 2018,
                to: 2019,
                position: 'Content Writer',
                company: 'esewa-nepal',
                location: 'Lazimpat'
            }      
        ]
    } 

    delete = (e) => {
        const id = e.target.parentElement.parentElement.parentElement.id;

        this.setState(prevState => {
            const oldState = prevState.works;
            const newState = oldState.filter(function(eachItem) {
                if (eachItem.id == id) {
                    return false;
                } else {
                    return true;
                }
            })
            
            return {
                works: [...newState]
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
                work: {
                    ...prevState.work,
                    [name]: value
                }
            }
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                works: [...prevState.works, this.state.work],
                work: {
                    id: nanoid(),
                    from: '',
                    to: '',
                    position: '',
                    company: '',
                    location: '',
                }
            }
        })
        this.changeEditingMode();
    }

    render() {
        const workElements = this.state.works.map(work => {
            return <WorkCard id={work.id} key={work.id} data={work} deleteFunc={this.delete}/>
        })

        return (
            <div className="work-container">
                {
                    this.state.isEditing ? 
                    <div>
                        <div className="work-heading">
                            <h1>WORK EXPERIENCE</h1>
                            <MdCancel className="work-cancel-button" onClick={this.changeEditingMode}/>
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
                                placeholder="Position"
                                name="position"
                                onChange={this.handleChange}
                            />
                            <input 
                                autoComplete="off"
                                type="text"
                                placeholder="Company"
                                name="company"
                                onChange={this.handleChange}
                            />
                            <input 
                                autoComplete="off"
                                type="text"
                                placeholder="Location"
                                name="location"
                                onChange={this.handleChange}
                            />
                            <div>
                                <button className="submit-button">Submit</button>
                                <button className="cancel-button" onClick={this.changeEditingMode}>Cancel</button>
                            </div>
                        </form>
                        {workElements}
                    </div> :
                    <div>
                        <div className="work-heading">
                            <h1>WORK EXPERIENCE</h1>
                            <IoMdAddCircle className="add-button" onClick={this.changeEditingMode}/>
                        </div>
                        <hr className="h"></hr>
                        {workElements}
                    </div>
                }
            </div>
        )
    }
}