import StarIcon from "../assets/images/icon-star.svg";

export default function Main() {
    return (
        <main className="card">
            <section className="title">
                <img src={StarIcon} />
                <h1>FAQs</h1>
            </section>

            <details>
                <summary>What is Frontend Mentor, and how will it help me?</summary>
                <p>Testing 123 123</p>
            </details>
        </main>
    )
}