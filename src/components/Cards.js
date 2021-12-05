import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>

            <h1>Check out these BEST Bicol Region Resorts!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Discover a tropical hideaway where luxurious seclusion meets wild natural beauty."
                        label='Misibis Bay Resort'
                        path='/services'
                        />
                        <CardItem
                        src="images/img-2.jpg"
                        text="Wherever You Are, You are Home at The Oriental Situated on top of Taysan Hill, The Oriental Legazpi offers an unforgettable view of the Mayon Volcano, Albay Gulf, and the Legazpi cityscape from the balcony of its rooms."
                        label='The Oriental Legazpi'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-3.jpg"
                        text="Witness nature at its best where the sun, sea, and lake meet. Secluded from the noises of the city, Tugawe Cove Resort is not just an accommodation, but also a destination beckoning to be explored."
                        label='Tugawe Cove Resort'
                        path='/services'
                        />
                        <CardItem
                        src="images/img-4.jpg"
                        text="Bask in the native flair of Philippine beauty on one of the untouched and yet to be discovered islands of the Philippines."
                        label='Ticao Island Resort'
                        path='/services'
                        />
                        <CardItem
                        src="images/img-8.jpg"
                        text="Situated in the city of love - Tabaco City, Hotel Fina is a perfect choice for accommodation when visiting Albay."
                        label='Hotel Fina'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
