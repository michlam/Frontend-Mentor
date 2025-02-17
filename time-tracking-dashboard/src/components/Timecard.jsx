export default function Timecard(props) {
    const bgStyle = {
        backgroundColor: props.colour,
    }

    return (
        <section 
            className="timecard" 
            style={bgStyle}
        >
            This is a timecard
        </section>
    )
}