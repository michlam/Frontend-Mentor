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

    return (
        <main>
            <Inputs tip={tip} changeTip={changeTip}/>
            <Display />
        </main>
    )
}