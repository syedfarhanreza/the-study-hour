import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Myself from '../Myself/Myself';
import Time from '../Time/Time';
import './Container.css'

const Container = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState([]);;
    const [breakTime, setBreakTime] = useState(Number(localStorage.getItem("BreakTime")) || 0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const handleAdd = (activity) => {
        console.log(activity);
        const newTime = [...time, activity];
        setTime(newTime);
    }

    return (
        <div className='container'>
            <div className='card-container'>
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        handleAdd={handleAdd}
                    ></Activity>)
                }
            </div>
            <div className='dialog-container'>
                <Myself
                    setBreakTime={setBreakTime}
                ></Myself>
                <Time
                    time={time}
                    breakTime={breakTime}
                ></Time>
            </div>
        </div>
    );
};

export default Container;