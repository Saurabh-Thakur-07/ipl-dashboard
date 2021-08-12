import React, {useEffect, useState} from 'react'
import {MatchDetailCard} from "../Component/MatchDetailCard";
import {useParams} from "react-router-dom";
import {YearSelector} from "../Component/YearSelector";
import './MatchPage.scss' ;
export const MatchPage = () => {
    const {teamName ,year} = useParams();
    const [matches,setMatches] = useState([]);
    useEffect(()=>{
        const fetchMatches = async () => {
            const response = await fetch(`/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        };
        fetchMatches();

    },[teamName,year])
    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select Year</h3>
                <YearSelector teamName={teamName}/>
            </div>
            <div>
            <h1 className="page-heading">{teamName} matches in {year}</h1>
            {
                matches?.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
            }
            </div>
        </div>
    );
}