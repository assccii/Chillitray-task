import React from "react"
import {cards} from "./cards"

import like from "../images/like.png"
import share from "../images/share.png"
import read_later from "../images/read_later.png"


export default function Main() {

    const one_card = cards.map(
        (info) => {
            return (
                <div className="card">
                    <img src = {info.image} alt = "" className="card-image" />
                    <p>hot scoops</p>
                    <h3>{info.heading}</h3>
                    <p>{info.description}</p>

                    <div className="card-options">
                        <img src = {like} alt = "" className="like" />
                        <p class = "blue">Relevant</p>

                        <img src = {share} alt = "" className="share" />
                        <p className = "blue">Share</p>

                        <img src = {read_later} alt = "" className="read-later" />
                        <p className = "blue">Read Later</p>
                    </div>
                </div>
            );
        }
    )
    
    
    return (
        <div className="main">
            <h3 className="main-text">Top Stories for you </h3>
            <ul className="flex-row categories">
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