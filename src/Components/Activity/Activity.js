import React from 'react';
import './Activity.css'
const Activity = (props) => {
    const {img,subject,details, time } = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
            <p className='subject'>{subject}</p>
            <p>{details}</p>
            <p><small>Study Time: {time}min</small></p>
            </div>
            <button className='btn-list'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;