import React from 'react';
import './NameCard.css';
function NameCard(props){
    const url = 'https://www.namecheap.com/domains/registration/results/?domain=';
    return (
        <a className='card-link' href={`${url}${props.name}`}> 
            <div className="namecard-container">
            <p className='namecard-p'>{props.name}</p>
            </div> 
        </a>);
};
export default NameCard;