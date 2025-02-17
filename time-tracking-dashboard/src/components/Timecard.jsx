import ExerciseIcon from "../assets/images/icon-exercise.svg"
import PlayIcon from "../assets/images/icon-play.svg"
import SelfcareIcon from "../assets/images/icon-self-care.svg"
import SocialIcon from "../assets/images/icon-social.svg"
import StudyIcon from "../assets/images/icon-study.svg"
import WorkIcon from "../assets/images/icon-work.svg"

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
            This is a timecard
        </section>
    )
}