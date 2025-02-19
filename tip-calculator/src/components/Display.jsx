export default function Display(props) {
    let tip = (props.bill * ((props.tip * 0.01)) / props.peopleNum).toFixed(2);
    if (isNaN(tip) || !isFinite(tip)) {
        tip = 0;
        tip = tip.toFixed(2);
    }

    let total = (props.bill * (1 + (props.tip * 0.01)) / props.peopleNum).toFixed(2);
    if (isNaN(total) || !isFinite(total)) {
        total = 0;
        total = total.toFixed(2);
    }

    return (
        <div className="display">
            <div className="tip-amount-container">
                <div className="tip-amount-left">
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </div>

                <h1>{`$${tip}`}</h1>
            </div>

            <div className="total-container">
                <div className="total-left">
                    <h4>Total</h4>
                    <p>/ person</p>
                </div>

                <h1>{`$${total}`}</h1>
            </div>

            <button onClick={props.reset}>RESET</button>

        </div>
    )
}