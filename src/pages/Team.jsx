import React from 'react';
import TeamCard from '../components/TeamCard';
import '../../public/css/Team.css';

const Team = () => {
    const mentors = [
        {
            id: 1,
            name: 'Animesh Singh',
            designation: 'Web Developer',
            imageUrl: '../../public/images/IMG_2820.png',
            linkedinUrl: 'https://www.linkedin.com/in/animesh07/',
            instagramUrl: 'https://www.instagram.com/Animesh_0764/',
        },
        {
            id: 2,
            name: 'Animesh',
            designation: 'Web Developer',
            imageUrl: '../../public/images/IMG_2820.png',
            linkedinUrl: 'https://www.linkedin.com/in/animesh07/',
            instagramUrl: 'https://www.instagram.com/Animesh_0764/',
        },
        {
            id: 3,
            name: 'Animesh',
            designation: 'Web Developer',
            imageUrl: '../../public/images/IMG_2820.png',
            linkedinUrl: 'https://www.linkedin.com/in/animesh07/',
            instagramUrl: 'https://www.instagram.com/Animesh_0764/',
        },
        {
            id: 4,
            name: 'Animesh',
            designation: 'Web Developer',
            imageUrl: '../../public/images/IMG_2820.png',
            linkedinUrl: 'https://www.linkedin.com/in/animesh07/',
            instagramUrl: 'https://www.instagram.com/Animesh_0764/',
        }
    ];

    const contributors = [
        {
            id: 1,
            name: 'Animesh',
            designation: 'Web Developer',
            imageUrl: '../../public/images/IMG_2820.png',
            linkedinUrl: 'https://www.linkedin.com/in/animesh07/',
            instagramUrl: 'https://www.instagram.com/Animesh_0764/',
        },
        {
            id: 2,
            name: 'Samson Julius',
            designation: 'Web Developer',
            imageUrl: '../../public/images/IMG_2820.png',
            linkedinUrl: 'https://www.linkedin.com/in/animesh07/',
            instagramUrl: 'https://www.instagram.com/Animesh_0764/',
        },
    ];

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
                <div className="team-grid">
                    {contributors.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
