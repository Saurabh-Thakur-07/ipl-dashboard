import {useEffect,useState} from 'react'
import React from 'react';
import { useParams ,Link} from 'react-router-dom';
import {MatchDetailCard} from "../Component/MatchDetailCard";
import {MatchSmallCard} from "../Component/MatchSmallCard";
import './TeamPage.scss' ;
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {

    const [team, setTeam] = useState({matches: []});
    const{teamName} = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`/team/${teamName}`);
                const data = await response.json();
                setTeam(data);

            };
            fetchMatches();



        }, [teamName]
    );

    if(!team || !team.teamName)
    {
        return <h2>Team not found</h2>
    }
    return (
        <div className="TeamPage">
            <div className="team-name-section">
            <h1 className="team-name">{team?.teamName}</h1>
            </div>
            <div className="wins-loss-section">
                Wins / Losses
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatches- team.totalWins, color: '#a34d5d' },
                        { title: 'Wins', value: team.totalWins, color: '#4da375' },


                    ]}
                />;
            </div>
            <div className="match-detail-section">
                <h3>Latest Match</h3>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
            </div>
            {team?.matches?.slice(1).map(match =><MatchSmallCard key={match.id} match={match} teamName={team.teamName}/>)}
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
            </div>
      </div>
    );
}