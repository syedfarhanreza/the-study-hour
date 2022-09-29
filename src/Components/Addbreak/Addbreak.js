import React from 'react';

const Addbreak = ({setBreakTime}) => {
    const times = [
        { time: 15 },
        { time: 20 },
        { time: 25 },
        { time: 30 },
        { time: 45 }
    ]

    return (
        <div>
           <div className='break'>
                <h4>Add a Break Times</h4>
                <div className='buttons'>
                    {
                        times.map((time, index) => <button key={index} onClick={() => { setBreakTime(time.time); localStorage.setItem("BreakTime", time.time) }} >{time.time} min</button>)
                    }
                </div>

            </div> 
        </div>
    );
};

export default Addbreak;