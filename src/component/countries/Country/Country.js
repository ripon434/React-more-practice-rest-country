import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, nativeName, flag, region,subregion } = props.country;
    // console.log(props.country);
    
    return (
        <div className="country bg-info shadow-lg p-3 mb-5 bg-body rounded">
            <h4>This is  : { name}</h4>
            <img src={flag} alt=""></img>
            <h4>region : { region}</h4>
            <h4>capital : { capital}</h4>
            <h4>nativeName : {nativeName}</h4>
            <h4>subregion : {subregion}</h4>
       </div>
   )
};

export default Country;