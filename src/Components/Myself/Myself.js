import React from 'react';
import './Myself.css'
import pic from '../../images/pic.jpg'
const Myself = () => {
    return (
        <div >

              <div className='myself'>
              <img src={pic} alt="" />
                <div className='name'>
                <p>Syed Farhan Reza</p>
                <small>Bogura,</small><small>Bangladesh</small>
                </div>
              </div>
                <div>
                   <p>Studies at BS.c in Computer science & Engineering (CSE) at Pundra University of Science & Technology</p> 
                </div>
             </div>
    );
};

export default Myself;