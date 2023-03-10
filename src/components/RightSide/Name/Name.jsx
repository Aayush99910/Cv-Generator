import React, { Component } from "react";
import './Name.css';
import {FiEdit} from 'react-icons/fi';


export default class Name extends Component {
    state = {
        username: "AAYUSH MAHARJAN",
        job: "Web Developer",
        isEditing: false
    }

    changeEditingState = () => {
        this.setState(prevState => {
            return {
                isEditing: !prevState.isEditing
            }
        })
    }
    
    handleChange = (event) => {
        const {name} = event.target;
        const uppercaseName = event.target.value.toUpperCase();
        this.setState(prevState => {
            if (name === "username") {
                return {
                    [name]: uppercaseName
                }
            } else {
                return {
                    [name]: event.target.value
                }    
            }
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.changeEditingState()
    }

    render() {
        return (
            <div className="name-container">
                {
                    this.state.isEditing ? 
                    <div>
                        <form onSubmit={this.submitForm}>
                            <input  autoComplete="off"
                                    placeholder="Your full name"
                                    type="text" 
                                    name="username" 
                                    onChange={this.handleChange} 
                                    value={this.state.username}
                            />
                            <input  autoComplete="off"
                                    placeholder="Your current profession"
                                    type="text" 
                                    name="job" 
                                    onChange={this.handleChange} 
                                    value={this.state.job}
                            />
                            <button className="submit-button">Submit</button>
                            <button className="cancel-button" onClick={this.changeEditingState}>Cancel</button>
                        </form>
                    </div> :
                    <div>
                        <h1>{this.state.username}</h1>
                        <FiEdit className="name-edit-button" onClick={this.changeEditingState}/>
                        <p>{this.state.job}</p>
                    </div>
                }
            </div>
        )
    }
}