import React from 'react';

const CountryCard = ({singleCountry}) => {
    const {name, flag} = singleCountry;
    
    return (
        <div className="card country-card m-3">
            <img src={flag} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
};

export default CountryCard;