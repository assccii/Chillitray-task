import React from "react"
import hotscoops from "../images/hot-scoop.png";
import earnings from "../images/earning.png";
import awards from "../images/award.png"
import analytics from "../images/analytics-and-reporting.png"
import budget from "../images/budget-and-planning.png"
import communication from "../images/communication.png"
import infrastructure from "../images/infrastructure.png"
import legal from "../images/legal.png"
import marketing from "../images/marketing.png"
import hire from "../images/new-hire.png"
import newhire from "../images/new-hire.png"
import vacancy from "../images/open-position.png"
import technology from "../images/technology.png"
import expansion from "../images/expansion.png"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="list1">
                <ul>
                    <li className="first"> 
                        <img src={hotscoops} alt = ""/>
                          Hot Scoops
                    </li>
                    <li>
                        <img src={earnings} alt = ""/>
                        Earnings
                    </li>
                    <li>
                        <img src={awards} alt = ""/>
                        Awards
                    </li>
                    <li>
                         <img src={expansion} alt = ""/> 
                         Expansions
                    </li>
                    <li>
                        <img src={vacancy} alt = ""/>
                        Open Positions
                    </li>
                    <li>
                        <img src={newhire} alt = ""/>
                        New Hire
                    </li>
                </ul>
            </div>
            <hr></hr>
            <div className="list2">
                <ul>
                    <li>
                        <img src={analytics} alt = ""/>
                        Analytics & Reporting
                    </li>
                    <li>
                        <img src={budget} alt = ""/>
                        Budgeting & Planning
                    </li>
                    <li>
                    <img src={communication} alt = ""/>
                        Communications
                    </li>
                    <li>
                    <img src={technology} alt = ""/>
                        Technology
                    </li>
                    <li>
                    <img src={legal} alt = ""/>
                        Legal
                    </li>
                    <li>
                        <img src={infrastructure} alt = ""/>
                        Infrastructure
                    </li>
                    <li>
                        <img src={marketing} alt = ""/>
                        Marketing
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}