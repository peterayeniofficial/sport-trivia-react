import React from 'react';
import { Link } from 'react-router-dom'

function Finish(props) {
    return (
        <div className="finish-page">
            <div className="content-finish content__finish-page">
                <p>8/10</p>
                <Link to="/"  className="start-button">Play Again</Link>
            </div>
        </div>
    );
}

export default Finish;