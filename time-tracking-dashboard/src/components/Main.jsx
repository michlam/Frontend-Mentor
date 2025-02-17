import DataArray from '../data.json'
import { useState } from "react"
import Profile from './Profile';
import Timecard from './Timecard';

export default function Main() {
    const [time, setTime] = useState("Daily");
    
    const TimecardComponents = DataArray.map((data) => {
        return (
            <Timecard />
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