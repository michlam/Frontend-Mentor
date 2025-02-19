export default function Display(props) {
    const tip = props.bill.toFixed(2);

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

                <h1>$0.00</h1>
            </div>

            <button>RESET</button>

        </div>
    )
}