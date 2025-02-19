import Inputs from "./Inputs"
import Display from "./Display"
import { useState } from "react"

export default function Main() {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [peopleNum, setPeopleNum] = useState(0);

    function changeTip(newTip) {
        setTip(newTip);
    }

    function reset() {
        setBill(0);
        setTip(0);
        setPeopleNum(0);
    }

    return (
        <main>
            <Inputs tip={tip} changeTip={changeTip} setBill={setBill} setPeopleNum={setPeopleNum}/>
            <Display bill={bill} tip={tip} peopleNum={peopleNum} reset={reset}/>
        </main>
    )
}