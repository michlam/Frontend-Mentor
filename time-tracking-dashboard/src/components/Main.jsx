import DataArray from '../data.json'
import { useState } from "react"
import Profile from './Profile';
import Timecard from './Timecard';

export default function Main() {
    const [time, setTime] = useState("Daily");
    const COLOUR_ARRAY = ["hsl(15, 100%, 70%)", "hsl(195, 74%, 62%)", "hsl(348, 100%, 68%)", "hsl(145, 58%, 55%)", "hsl(264, 64%, 52%)", "hsl(43, 84%, 65%)"];

    const TimecardComponents = DataArray.map((data, index) => {
        return (
            <Timecard key={data.title} colour={COLOUR_ARRAY[index]}/>
        ) 
    });

    return (
        <main>
            <Profile />
            <div className='timecards-container'>
                {TimecardComponents}
            </div>
        </main>
    )
}