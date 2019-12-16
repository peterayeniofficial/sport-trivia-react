import React from 'react';
import mainImage from './main-img.png'
import { Link } from 'react-router-dom'

function Start(props) {
    return (
        <div className="start-page">
            <div className='content'>
                <img src={mainImage} alt="Sport Fans"/>
                <p>Sport Fan? <br/>Test how much you know.</p>
                <Link to="/quiz" className="start-button">Start Trivia</Link>
            </div>
        </div>
    );
}

export default Start;