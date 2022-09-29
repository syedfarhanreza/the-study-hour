import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { activity, handleAdd } = props;
    const { img, subject, details, time } = activity;

    return (

    
            <div className='activity-container'>
                <img src={img} alt="" />
            <div className='info'>
                <h4>{subject}</h4>
                <p>{details}</p>
                <p>Time Required: <span className='time'>{time}</span> min</p>
            </div>
            <button onClick={() => handleAdd(activity)} className='btn'>Add to List</button>
            </div>
            
    );
};

export default Activity;