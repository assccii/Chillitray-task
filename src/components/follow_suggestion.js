import React from "react"
import topicData from "./topics.js"
import trendsData from "./trends.js"



export default function FollowSuggestion() {
    return (
        <div className="follow-suggestion">
           <div className="recent-searches">
                <h2 className="recent-searches-text">Recent Searches</h2>
                <ul>
                    <li>
                        <img src = "#" alt = " "/>
                        UX Design 
                    </li>

                    <li>
                        <img src = "#" alt = " "/>
                        Marketing
                    </li>

                    <li>
                        <img src = "#" alt = " "/>
                        Expansion
                    </li>

                    <li>
                        <img src = "#" alt = " "/>
                        Technology
                    </li>
                </ul>
           </div>

           <div className="topics-to-follow">
               <h3>Topics to Follow</h3>

               <ul>
                   <li>
                        UX Design
                        <img src = "#" alt = " " className="follow-icon"/>
                        <img src = "#" alt = "" className="cross-icon"/>
                    </li>

                    <li>
                        UX Design
                        <img src = "#" alt = " " className="follow-icon"/>
                        <img src = "#" alt = "" className="cross-icon"/>
                    </li>

                    <li>
                        UX Design
                        <img src = "#" alt = " " className="follow-icon"/>
                        <img src = "#" alt = "" className="cross-icon"/>
                    </li>

                    <li>
                        UX Design
                        <img src = "#" alt = " " className="follow-icon"/>
                        <img src = "#" alt = "" className="cross-icon"/>
                    </li>

                    <li>
                        UX Design
                        <img src = "#" alt = " " className="follow-icon"/>
                        <img src = "#" alt = "" className="cross-icon"/>
                    </li>

                    <li>
                        UX Design
                        <img src = "#" alt = " " className="follow-icon"/>
                        <img src = "#" alt = "" className="cross-icon"/>
                    </li>
                   
               </ul>
           </div>
        </div>
    )

}