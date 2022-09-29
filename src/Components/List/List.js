import React from 'react';
import Addbreak from '../Addbreak/Addbreak';
import Myself from '../Myself/Myself';
import './List.css'
const List = ({list,setBreakTime}) => {
    return (
        <div className='list'>
           <Myself></Myself>
                <p>Selected Activities: {list.length}</p>
                <Addbreak
                setBreakTime={setBreakTime}></Addbreak>
        </div>
    );
};

export default List;