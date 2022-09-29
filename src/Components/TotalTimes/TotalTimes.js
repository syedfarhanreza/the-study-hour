import React from 'react';

const TotalTimes = (props) => {
    const { time, breakTime } = props;
    let total = 0;
    for (const activity of time) {
        total = total + activity.time;
    }
    return (
        <div>
            <div className='exercise-section'>
            <h3>Exercise Details</h3>

            <h4>Total Time: <span className='total-time'>{total}</span> Minutes</h4>
            <h4>Break Time: <span>{breakTime} </span> Minutes</h4>
            {/* <button onClick={() => toast.success("Done")} className='complete-button' >Task Complete</button> */}
        </div>
        </div>
    );
};

export default TotalTimes;