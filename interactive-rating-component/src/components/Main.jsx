import Star from "../assets/images/icon-star.svg"

export default function Main(props) {
    const ratingsArray = [1, 2, 3, 4, 5];
    const RatingsElements = ratingsArray.map((rating) => {
        return (
            <button className={`circle ${rating === props.currentRating ? "selected" : ""}`} 
                    key={rating} 
                    onClick={() => props.setRating(rating)}>
                <h3>{rating}</h3>
            </button>
        )
    })

    function handleSubmit() {
        if (props.currentRating) {
            props.setSubmitted(true);
        }
    }

    return (
        <main className="rating">
            <div className="circle">
                <img src={Star} />
            </div>

            <section className="content">
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </section>

            <section className="ratings">
                {RatingsElements}
            </section>

            <button className="submit" onClick={handleSubmit}>SUBMIT</button>
        </main>
    )
} 