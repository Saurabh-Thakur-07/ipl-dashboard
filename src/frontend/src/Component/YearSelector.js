import React from 'react'
import {Link} from "react-router-dom";
import './YearSelector.scss';
export const YearSelector=({teamName})=>{
    let years = [];
    let startYear = process.env.REACT_APP_DATA_START_YEAR ;
    let endYear = process.env.REACT_APP_DATA_END_YEAR;
    for(let i = startYear ; i <= endYear ; i++)
    {
        years.push(i);
    }
    return(

            years.map(year =>
                <h4 className="YearSelector" key={year}>
                <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
            </h4>
    ))

}