import React, { Component } from "react";
import "./Profile.css";
import {FiEdit} from 'react-icons/fi';


export default class Profile extends Component {
    state = {
        isEditing: false,
        description: "Hi I am a Aayush Maharjan. I am originally from Nepal. I really love working with technology. As it grows I am really excited to see more of it."
    }

    changeEditing = () => {
        this.setState(prevState => {
            return {
                isEditing: !prevState.isEditing
            }
        })
    }

    changeDescription = (event) => {
        const {name} = event.target;
        this.setState(prevState => {
            return {
                [name]: event.target.value
            }
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.changeEditing()
    }


    render() {
        return ( 
            <div className="profile-container">
                {
                    this.state.isEditing ? 
                    <div>
                        <form onSubmit={this.submitForm}>
                            <textarea 
                                    name="description" 
                                    onChange={this.changeDescription} 
                                    value={this.state.description}
                            />
                            <button className="submit-button">Submit</button>
                        </form>
                    </div> :
                    <div>
                        <p>{this.state.description}</p>
                        <FiEdit className="edit-button" onClick={this.changeEditing}/>
                    </div>
                }
            </div>
        )
    }
}