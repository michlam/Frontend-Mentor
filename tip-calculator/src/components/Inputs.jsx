// The inputs component where most of the user inputs will be handled.

import { useState } from "react";

export default function Inputs(props) {
    const [billError, setBillError] = useState(false);
    const activeButtonStyle = {
        backgroundColor: "hsl(172, 67%, 45%)",
        color: "hsl(183, 100%, 15%)"
    }

    function handleBillChange(event) {
        let num = event.target.value;
        num = Number(num);

        if (isNaN(num) || num < 0) {
            setBillError(true);
        } else {
            setBillError(false);
            props.setBill(num);
        }
    }

    return (
        <div className="inputs">
            <div className="bill-container">
                <label htmlFor="billInput">Bill</label>
                <input name="billInput" placeholder="0" onChange={handleBillChange}/>
            </div>

            <div className="tip-container">
                <label>Select Tip%</label>
                <div className="tip-buttons">
                    <button 
                        style={props.tip === 5 ? activeButtonStyle : null}
                        onClick={() => props.changeTip(5)}
                    >    
                        5%
                    </button>

                    <button 
                        style={props.tip === 10 ? activeButtonStyle : null}
                        onClick={() => props.changeTip(10)}
                    >   
                        10%
                    </button>

                    <button 
                        style={props.tip === 15 ? activeButtonStyle : null}
                        onClick={() => props.changeTip(15)}
                    >   
                        15%
                    </button>                    
                    
                    <button 
                        style={props.tip === 25 ? activeButtonStyle : null}
                        onClick={() => props.changeTip(25)}
                    >   
                        25%
                    </button>                    
                    
                    <button 
                        style={props.tip === 50 ? activeButtonStyle : null}
                        onClick={() => props.changeTip(50)}
                    >   
                        50%
                    </button>
                    
                    <input placeholder="Custom"/>
                </div>
            </div>

            <div className="people-num-container">
                <label htmlFor="peopleNum">Number of people</label>
                <input name="peopleNum" placeholder="0" />
            </div>
        </div>
    )
}