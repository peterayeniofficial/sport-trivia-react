import React from 'react';
import mainImage from './main-img.png'
import { Link } from 'react-router-dom'

function Start(props) {
    return (
        <div className="start-page">
            <div className='content'>
                <img className="animated bounceInUp" src={mainImage} alt="Sport Fans"/>
                <p className="animated bounceInLeft" >Sport Fan? <br/>Test how much you know. <br/> <strong>10 Questions in 60 Seconds!</strong></p>
                <Link to="/quiz" className="animated bounceInRight start-button">Start Trivia</Link>
            </div>
        </div>
    );
}

export default Start;