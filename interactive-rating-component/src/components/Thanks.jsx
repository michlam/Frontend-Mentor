import ThanksImage from "../assets/images/illustration-thank-you.svg"

export default function Thanks(props) {
    return (
        <main className="thanks">
            <img src={ThanksImage} />

            <div className="reminder">
                You selected {props.rating} out of 5
            </div>

            <section className="thanks">
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more suport, don't hesitate to get in touch!</p>
            </section>
        </main>
    )
} 