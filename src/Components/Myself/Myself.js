import React from 'react';
import BreakTime from '../BreakTime/BreakTime';
import pic from '../../components/images/pic.jpg'
import './Myself.css'

const Myself = ({ setBreakTime }) => {

    return (
        <div className='self-details'>
            <div className='myself-part'>
                <div className='ps-info'>
                    <div className='img'>
                        <img src={pic} alt="" />
                    </div>
                    <div className='name'>
                        <h4>Syed Farhan Reza</h4>
                        <p><small>Bogura, Bangladesh</small></p>
                    </div>
                </div>
                <div className='body'>
                    <p>Studies at BS.c in Computer science & Engineering (CSE) at Pundra University of Science & Technology</p>  
                </div>
            </div>

            <BreakTime
                setBreakTime={setBreakTime}
            ></BreakTime>


        </div>
    );
};

export default Myself;