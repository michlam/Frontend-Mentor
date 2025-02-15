export default function MainComponent(props) {

    return (
        <main className="main-component">
            <section className="content-container">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>

                <form onSubmit={props.login}>
                    <div className="status-container">
                        <label htmlFor="email">Email address</label>
                        { props.error ? <label className="failed-status">Valid email required</label> : null }
                    </div>
                    <input id="email" name="email" placeholder="email@company.com" className={props.error ? "error" : ""}/>
                    <button>Subscribe to monthly newsletter</button>
                </form>

            </section>
            <section className="thumbnail-container">
                <img src="./src/assets/images/illustration-sign-up-desktop.svg"/>
            </section>
        </main>
    )
}