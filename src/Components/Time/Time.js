import React from 'react';
import { toast } from 'react-toastify';
import './Time.css'

const Time = (props) => {
    const { time, breakTime } = props;
    let total = 0;
    for (const activity of time) {
        total = total + activity.time;
    }

    return (
        <div className='study-section'>
            <h3>Study Time</h3>

            <h4>Total Time: <span className='total-time'>{total}</span> Minutes</h4>
            <h4>Break Time: <span>{breakTime} </span> Minutes</h4>
            <button onClick={() => toast.success("Hurrah!!!")} className='complete-button' >Today's study Completed</button>
        </div>
    );
};

export default Time;