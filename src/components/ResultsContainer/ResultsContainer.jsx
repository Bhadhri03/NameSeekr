import React from 'react';
import './ResultsContainer.css';
import NameCard from './../NameCard/NameCard'

function ResultsContainer(props){
    return (
        <div className='result-container'>
            {props.sug.map((name,index)=>{
                return(
                <NameCard name={name} key={index} />
                );
            })}
        </div>
    );
};

export default ResultsContainer;