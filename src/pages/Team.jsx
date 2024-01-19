import React from 'react';
import TeamCard from '../components/TeamCard';
import '../../public/css/Team.css';
import { mentors, contributors } from '../data/team.json';

const Team = () => {
    return (
        <div className="team-container">
            <div className="team-section">
                <h2>Mentors</h2>
                <div className="team-grid">
                    {mentors.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>

            <br />

            <div className="team-section">
                <h2>Contributors</h2>
                <div className="team-grid2">
                    {contributors.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
