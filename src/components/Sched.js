import React from 'react';
import SchedItem from './SchedItem';
import './Sched.css';

function Sched() {
    return (

        <div className='cards'>

            <h1>HO HO HO!  Merry Christmas A-Liners!! Heto na po ang pinakaaabangan nating December schedule!</h1>
            <h1>TRIP SCHEDULES</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <SchedItem
                        src="images/g.jpg"
                        text="(ORDINARY BUS/FARE: ₱800)"
                        label='TABACO TO PITX/PITX TO TABACO'
                        path='/services'
                        />
                        <SchedItem
                        src="images/g2.jpg"
                        text="(ORDINARY FARE: ₱850)"
                        label='TIWI TO PITX/PITX TO TIWI'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <SchedItem
                        src="images/g3.jpg"
                        text="(ORDINARY BUS/FARE: ₱760)"
                        label='LEGAZPI TO PITX/PITX TO LEGAZPI'
                        path='/services'
                        />
                        <SchedItem
                        src="images/g4.jpg"
                        text="(2X2 AIRCON FARE: ₱1,050)"
                        label='TIWI TO PITX/PITX TO TIWI'
                        path='/services'
                        />
                        <SchedItem
                        src="images/g5.jpg"
                        text="(ORDINARY BUS FARE: ₱875)"
                        label='PILAR TO PITX/PITX TO PILAR'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sched;
