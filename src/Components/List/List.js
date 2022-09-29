import React from 'react';
import Myself from '../Myself/Myself';
import './List.css'
const List = ({list}) => {
    return (
        <div className='list'>
           <Myself></Myself>
                <p>Selected Activities: {list.length}</p>
        </div>
    );
};

export default List;