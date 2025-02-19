// The inputs component where most of the user inputs will be handled.

export default function Inputs(props) {
    return (
        <div className="inputs">
            <div className="bill-container">
                <label htmlFor="billInput">Bill</label>
                <input name="billInput" />
            </div>

            <div className="tip-container">
                <label>Select Tip%</label>
                <div className="tip-buttons">
                    <button>5%</button>
                    <button>10%</button>
                    <button>15%</button>
                    <button>25%</button>
                    <button>50%</button>
                    <input placeholder="Custom"/>
                </div>
            </div>

            <div className="people-num-container">
                <label htmlFor="peopleNum">Number of people</label>
                <input name="peopleNum" />
            </div>
        </div>
    )
}