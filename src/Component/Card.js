import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className="container">
            <img src={`http://robohash.org/${props.id}?200x200`} alt='robots' />
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    );
}


export default Card;