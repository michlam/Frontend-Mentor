import DataArray from '../data.json'
import { useState } from "react"
import Profile from './Profile';
import Timecard from './Timecard';

export default function Main() {
    const [time, setTime] = useState("Daily");
    const COLOUR_ARRAY = ["hsl(15, 100%, 70%)", "hsl(195, 74%, 62%)", "hsl(348, 100%, 68%)", "hsl(145, 58%, 55%)", "hsl(264, 64%, 52%)", "hsl(43, 84%, 65%)"];

    const TimecardComponents = DataArray.map((data, index) => {
        let timeword = "";
        let currTimeNum = 0;
        let prevTimeNum = 0;
        
        if (time == "Weekly") {
            timeword = "Week";
            currTimeNum = data.timeframes.weekly.current;
            prevTimeNum = data.timeframes.weekly.previous;
        } else if (time == "Monthly") {
            timeword = "Month";
            currTimeNum = data.timeframes.monthly.current;
            prevTimeNum = data.timeframes.monthly.previous;
        } else {
            timeword = "Day";
            currTimeNum = data.timeframes.daily.current;
            prevTimeNum = data.timeframes.daily.previous;
        }

        return (
            <Timecard key={data.title} id={data.title} colour={COLOUR_ARRAY[index]}
                        timeframes={data.timeframes} timeword={timeword} currTimeNum={currTimeNum}
                        prevTimeNum={prevTimeNum}/>
        ) 
    });

    function changeTime(newTime) {
        setTime(newTime);
    }

    return (
        <main>
            <Profile time={time} changeTime={changeTime}/>
            <div className='timecards-container'>
                {TimecardComponents}
            </div>
        </main>
    )
}