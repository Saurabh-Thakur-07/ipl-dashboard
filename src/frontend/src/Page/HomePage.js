import {useEffect,useState} from 'react'
import React from 'react';
import {TeamTile} from "../Component/TeamTile"
import './HomePage.scss' ;


export const HomePage = () => {

    const [teams, setTeams] = useState([]);
    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`/team`);
                const data = await response.json();
                setTeams(data);

            };
            fetchAllTeams();

        }, []
    );

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">Skynet Systems IPL Dashboard</h1>
            </div>
            <div className="team-grid">
                { teams.map(team=><TeamTile key={team.id} teamName={ team.teamName} />) }
            </div>
        </div>
    );
}