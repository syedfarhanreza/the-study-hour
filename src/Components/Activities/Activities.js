import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'
const Activities = () => {
    const [activities,setActivities] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data));
    },[])
        return (
        <div className='activities'>
            <div className="activities-container">
               {
                activities.map(activity => <Activity
                key ={activity.id}
                activity = {activity}
                ></Activity>)
               }
            </div>
            <div className="list-container">
                <h4>List summary</h4>
            </div>
        </div>
    );
};

export default Activities;