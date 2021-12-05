import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/ANTONINA-1.mp4' 
            autoPlay loop muted />
            <h2>What are you waiting for? Book now!</h2>
            <div className="hero-btns">
                    <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    <Link to='/schedules' style={{
                buttonStyle:'btn--outline',
                buttonSize:'btn--large',
                textDecoration: 'none',
                color: "#4F091D"}}> SCHEDULES </Link>
                    </Button>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    BOOK NOW <i class="fa fa-bus" aria-hidden="true"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
