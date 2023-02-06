import React, { Component } from "react";
import './Photo.css';
import me from "../../../assets/Aayush.jpg";
import {FiEdit} from 'react-icons/fi';



export default class Photo extends Component {
    state = {
        isEditing: false,
        photo: 'https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
    
    changeEditingStyle = () => {
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
                [name]: value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.changeEditingStyle();
    }
    
    render() {
        return (
            <div className="user-photo-container">
                    {
                        this.state.isEditing ? 
                        <form className="photo-form-container" onSubmit={this.handleSubmit}>
                            <input autoComplete="off" placeholder="Image URL" name="photo" type="text" onChange={this.handleChange} />
                            <div>
                                <button className="submit-button">Submit</button>
                                <button className="cancel-button" type="button" onClick={this.changeEditingStyle}>Cancel</button>
                            </div>
                        </form> :
                        <div className="user-photo">
                            <img src={this.state.photo} />
                            <FiEdit className="edit-button" onClick={this.changeEditingStyle}/>
                        </div>
                    }
            </div>
        )
    }
}