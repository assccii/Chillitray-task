import React from "react"
import {topic} from "./topics"
import {trends} from "./trends"
import search from "../images/search.png"
import trending from "../images/trending.png"
import cross from "../images/cross.png"

export default function FollowSuggestion() {

    const follow = topic.map(
        (info) => {
            return (
                <li>
                    <div className="follow-flex-row">
                        <div className="follow-flex-column">
                            {/* <img src = {search} alt = ""  className = "follow-image" /> */}
                            <h3 className="topic">{info.name}</h3>
                            <p className = "category">{info.category}</p>
                        </div>
                        <p className = "follow-text">follow</p>
                        <img src = {cross} alt = "" className="cross" />
                    </div>
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
                    {follow}
                </ul>
           </div>
        </div>
    );
}