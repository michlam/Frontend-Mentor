export default function SubmittedComponent(props) {
    return (
        <main className="submitted-component">
            <img src="./src/assets/images/icon-success.svg"/>
            <h1>Thanks for subscribing!</h1>
            <p>
                A confirmation email has been sent to <b>{props.email}</b>. Please open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={props.dismiss}>Dismiss message</button>
        </main>
    )
}