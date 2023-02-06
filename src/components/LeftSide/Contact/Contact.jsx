import React, { Component } from "react";
import Card from "./Card.jsx"
import address from "../../../assets/home.png";
import phone from "../../../assets/phone.png"
import email from "../../../assets/mail.png";
import "./Contact.css";
import {FiEdit} from 'react-icons/fi';



export default class Contact extends Component {
    state = {
        isEditing: false,
        cards: [
            {
                id: 0,
                title: "Address",
                photo: address,
                description: "2714 Santa Clara, California"
            },
            {
                id: 1,
                title: "Phone",
                photo: phone,
                description: "(980)-987-0989"
            },
            {
                id: 2,
                title: "Email",
                photo: email,
                description: "someone123@email.com"
            }
        ]
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
            const newState = [];
            prevState.cards.map(eachState => {
                if (eachState.title == name) {
                    newState.push(
                        {
                            ...eachState,
                            description: value
                        }
                    )
                } else {
                    newState.push(
                        {
                            ...eachState
                        }
                    )
                }
            })
            
            return {
                cards: [...newState]
            }
        })
    }
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.changeEditingMode();
    }

    render() {
        const cardElements = this.state.cards.map(card => {
            return <Card 
                    photo={card.photo}
                    title={card.title}
                    description={card.description}
                    key={card.id} />
        })

        return (
            <div className="contact-container">
                {
                    this.state.isEditing ? 
                    <form className="contact-form-container" onSubmit={this.handleSubmit}>
                        <input 
                                id="contactInput"
                                autoComplete="off"
                                type="text"
                                placeholder="Your full address"
                                name="Address"
                                onChange={this.handleChange}
                        />
                        <input 
                                id="contactInput"
                                autoComplete="off"
                                type="text"
                                placeholder="Phone Number"
                                name="Phone"
                                onChange={this.handleChange}
                        />
                        <input 
                                id="contactInput"
                                autoComplete="off"
                                type="text"
                                placeholder="Email Address"
                                name="Email"
                                onChange={this.handleChange}
                        />
                        <div>
                            <button className="submit-button">Submit</button>
                            <button className="cancel-button" type="button" onClick={this.changeEditingMode}>Cancel</button>
                        </div>
                    </form> :
                    <div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <h3>CONTACTS</h3> &nbsp; &nbsp; 
                            <button className="edit-button-contact" onClick={this.changeEditingMode}><FiEdit /></button>
                        </div>
                        {cardElements}
                    </div>
                }
            </div>
        )
    }
}