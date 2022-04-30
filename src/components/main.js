import React from "react"
import {cards} from "./cards"

export default function Main() {

    const one_card = cards.map(
        (info) => {
            return (
                <div className="card">
                    <img src = {`../images/${info.image}`} alt = "" className="card-image"/>
                    <p>hot scoops</p>
                    <h3>{info.heading}</h3>
                    <p>{info.description}</p>
                </div>
            );
        }
    )
    
    
    return (
        <div className="main">
            <h2>Top Stories for you </h2>
            <ul className="flex-row">
                <li className = "category-selected">All</li>
                <li>Finance</li>
                <li>Business</li>
                <li>Opportunity</li>
                <li>Personal</li>
                <li>Company</li>
            </ul>

            <div className = "flex-col">
                {one_card}
            </div>

        </div>
    )
}