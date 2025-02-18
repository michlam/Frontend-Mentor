import Avatar from "../assets/images/image-jeremy.png"

export default function Profile(props) {
    const activeStyle = {
        color: "white"
    }

    return (
        <section className="profile">
            <div className="profile-top">
                <img src={Avatar} />
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>

            <div className="profile-bot">
                <h3 
                    style={props.time == "Daily" ? activeStyle : null} 
                    onClick={() => props.changeTime("Daily")}
                >
                    Daily
                </h3>

                <h3 
                    style={props.time == "Weekly" ? activeStyle : null}
                    onClick={() => props.changeTime("Weekly")}
                >
                    Weekly
                </h3>
                
                <h3 
                    style={props.time == "Monthly" ? activeStyle : null}
                    onClick={() => props.changeTime("Monthly")}    
                >
                    Monthly
                </h3>

            </div>

        </section>
    )
}