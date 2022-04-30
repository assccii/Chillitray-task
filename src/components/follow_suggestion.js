import React from "react"
import {topic} from "./topics"
import {trends} from "./trends"



export default function FollowSuggestion() {

    const recent = topic.map(
        (info) => {
            return (
                <li>
                    <img src = "" alt = "" />
                    {info.name}
                    <p className = "category">{info.category}</p>
                </li>
            );
        }
    )

    const displayTrend = trends.map(
        (info) => {
            return (
                <li>
                    <img src = "#" alt = "" />
                    {info.name}
                    {info.trending === "true" && <img src = "#" />}
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