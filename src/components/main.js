import React from "react"
import {cards} from "./cards"

export default function Main() {

    const one_card = cards.map(
        (info) => {
            return (
                <div className="card">
                    <img src = {info.image} alt = "" className="card-image" />
                    <p>hot scoops</p>
                    <h3>{info.heading}</h3>
                    <p>{info.description}</p>
                </div>
            );
        }
    )
    
    
    return (
        <div className="main">
            <h3 className="main-text">Top Stories for you </h3>
            <ul className="flex-row">
                <li className = "category-selected">All</li>
                <li>Finance</li>
                <li>Business</li>
                <li>Opportunity</li>
                <li>Personal</li>
                <li>Company</li>
            </ul>

            <div className = "mob-card">
                {one_card}
            </div>

        </div>
    )
}