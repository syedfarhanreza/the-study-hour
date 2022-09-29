import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import List from '../List/List';
import './Activities.css'
const Activities = () => {
    const [activities,setActivities] = useState([]);
    const[list, setList] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data));
    },[]);

    const handleAddToList = (activity) =>{
        console.log(activity);
        const newList = [...list,activity];
        setList(newList);
    }
        return (
       <div>
        <h3 className='head'>Select Subject to Study</h3>
         <div className='activities'>
            <div className="activities-container">
               {
                activities.map(activity => <Activity
                key ={activity.id}
                activity = {activity}
                handleAddToList ={handleAddToList}
                ></Activity>)
               }
            </div>
            <div className="list-container">
               <List list={list}></List>
            </div>
        </div>
       </div>
    );
};

export default Activities;