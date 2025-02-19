// The inputs component where most of the user inputs will be handled.

import { useState } from "react";

export default function Inputs(props) {
    const [billError, setBillError] = useState(false);
    const [tipError, setTipError] = useState(false);
    const [peopleNumError, setPeopleNumError] = useState(false);

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

    function handleTipChange(value) {
        props.setTip(value);
        const customField = document.getElementById("customTip");
        customField.value = "";
        setTipError(false);
    }

    function handleCustomTipChange(event) {
        let num = event.target.value;
        if (num === "") {
            setTipError(false);
            props.setTip(0);
            return;
        }

        num = Number(num);

        if (isNaN(num) || num < 0) {
            setTipError(true);
        } else {
            setTipError(false);
            props.setTip(num);
        }
    }

    function handlePeopleNumChange(event) {
        let num = event.target.value;
        num = Number(num);

        if (!Number.isInteger(num) || num <= 0) {
            setPeopleNumError(true);
        } else {
            setPeopleNumError(false);
            props.setPeopleNum(num);
        }
    }

    return (
        <div className="inputs">
            <div className="bill-container">
                <label htmlFor="billInput">Bill {billError ? "- enter a valid number" : ""}</label>
                <input name="billInput" placeholder="0" onChange={handleBillChange} 
                        style={billError ? {border: "2px solid red"} : null}/>
            </div>

            <div className="tip-container">
                <label>Select Tip% {tipError ? " - invalid number" : ""}</label>
                <div className="tip-buttons">
                    <button 
                        style={props.tip === 5 ? activeButtonStyle : null}
                        onClick={() => handleTipChange(5)}
                    >    
                        5%
                    </button>

                    <button 
                        style={props.tip === 10 ? activeButtonStyle : null}
                        onClick={() => handleTipChange(10)}
                    >   
                        10%
                    </button>

                    <button 
                        style={props.tip === 15 ? activeButtonStyle : null}
                        onClick={() => handleTipChange(15)}
                    >   
                        15%
                    </button>                    
                    
                    <button 
                        style={props.tip === 25 ? activeButtonStyle : null}
                        onClick={() => handleTipChange(25)}
                    >   
                        25%
                    </button>                    
                    
                    <button 
                        style={props.tip === 50 ? activeButtonStyle : null}
                        onClick={() => handleTipChange(50)}
                    >   
                        50%
                    </button>
                    
                    <input id="customTip" placeholder="Custom" onChange={handleCustomTipChange} 
                            style={tipError ? {border: "2px solid red"} : null}/>
                </div>
            </div>

            <div className="people-num-container">
                <label htmlFor="peopleNum">People {peopleNumError ? " - enter a valid number" : ""}</label>
                <input name="peopleNum" placeholder="0" onChange={handlePeopleNumChange}
                        style={peopleNumError ? {border: "2px solid red"} : null}/>
            </div>
        </div>
    )
}