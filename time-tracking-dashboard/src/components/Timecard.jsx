import ExerciseIcon from "../assets/images/icon-exercise.svg"
import PlayIcon from "../assets/images/icon-play.svg"
import SelfcareIcon from "../assets/images/icon-self-care.svg"
import SocialIcon from "../assets/images/icon-social.svg"
import StudyIcon from "../assets/images/icon-study.svg"
import WorkIcon from "../assets/images/icon-work.svg"
import EllipsesIcon from "../assets/images/icon-ellipsis.svg"
import { useEffect, useState } from "react"

export default function Timecard(props) {
    const propsId = props.id.split(" ").join("-").toLowerCase();
    const bgStyle = {
        backgroundColor: props.colour,
    }
    
    return (
        <section 
            className={`timecard ${propsId}`} 
            style={bgStyle}
        >
            <div className="timecard-content">
                <div className="tc-top">
                    <h3>{props.id}</h3>
                    <img src={EllipsesIcon} />
                </div>

                <h1>{props.currTimeNum}hrs</h1>
                <p>Last {props.timeword} - {props.prevTimeNum}hrs</p>
                
            </div>
        </section>
    )
}