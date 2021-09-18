import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const Home = () => {
    const [country, setCountry] = useState();
    useEffect ( () => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=>res.json())
        .then(data => setCountry(data))
    },[]);
    console.log(country);
    return (
        <div>
            <h1 className='py-5'>Country</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                country && country.map(singleCountry => <CountryCard singleCountry={singleCountry}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Home;