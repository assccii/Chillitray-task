import React from "react"
import {topic} from "./topics"
import {trends} from "./trends"
import search from "../images/search.png"
import trending from "../images/trending.png"

export default function FollowSuggestion() {

    const recent = topic.map(
        (info) => {
            return (
                <li>
                    <img src = {search} alt = ""  className = "recent-image" />
                    <h3 className="topic">{info.name}</h3>
                    <p className = "category">{info.category}</p>
                    <hr />
                </li>
            );
        }
    )

    const displayTrend = trends.map(
        (info) => {
            return (
                <li>
                    <img src = {search} alt = "" />
                    {info.name}
                    {info.trending === "true" && <img src = {trending} className="recent-image" alt = ""/>}
                    <hr />
                </li>
            );
        }
    )

    return (
        <div className="follow-suggestion">
           <div className="recent-searches">
                <h2 className="recent-searches-text">Recent Searches</h2>
                <ul>
                    {displayTrend}
                </ul>

           </div>

           <div className="topics-to-follow">
               <h2 className="topics-to-follow-text">Topics to Follow</h2>
               <ul>
                    {recent}
                </ul>
           </div>
        </div>
    );
}