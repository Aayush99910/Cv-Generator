import React, { Component } from "react";
import Card from "./Card.jsx"
import "./Contact.css";


export default class Contact extends Component {
    render() {
        // card array having various information about the card in contact component
        const cards = [
            {
                id: 0,
                title: "Address",
                description: "2714 Santa Clara, California"
            },
            {
                id: 1,
                title: "Phone",
                description: "(980)-987-0989"
            },
            {
                id: 2,
                title: "Email",
                description: "someone123@email.com"
            }
        ]
 
        // mapping over each element and returning a Card component
        const cardElements = cards.map(card => {
            return <Card 
                    title={card.title}
                    description={card.description}
                    key={card.id} />
        })

        return (
            <div className="contact-container">
                <h3>Contacts</h3>
                {cardElements}
            </div>
        )
    }
}