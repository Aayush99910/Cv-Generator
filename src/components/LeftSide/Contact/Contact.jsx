import React, { Component } from "react";
import Card from "./Card.jsx"
import address from "../../../assets/home.png";
import phone from "../../../assets/phone.png"
import email from "../../../assets/mail.png";
import "./Contact.css";


export default class Contact extends Component {
    render() {
        // card array having various information about the card in contact component
        const cards = [
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
 
        // mapping over each element and returning a Card component
        const cardElements = cards.map(card => {
            return <Card 
                    photo={card.photo}
                    title={card.title}
                    description={card.description}
                    key={card.id} />
        })

        return (
            <div className="contact-container">
                <h3>CONTACTS</h3>
                {cardElements}
            </div>
        )
    }
}