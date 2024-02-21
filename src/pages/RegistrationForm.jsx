import React, { useEffect, useState } from 'react';
import '../../public/css/RegForm.css';

const teamEvents = [
    { name: 'Hackathon', cost: 50 },
    { name: 'Code Competition', cost: 30 },
];

const individualEvents = [
    { name: 'Tech Talk', cost: 10 },
    { name: 'Quiz', cost: 20 },
];

const RegistrationForm = () => {
    const [selectedOption, setSelectedOption] = useState('individual');
    const [availableEvents, setAvailableEvents] = useState([]);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    // Common fields
    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // Team-specific fields
    const [teamName, setTeamName] = useState('');
    const [leaderName, setLeaderName] = useState('');
    const [teamMembers, setTeamMembers] = useState(['', '', '', '', '']); // Array to hold 5 team members

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setAvailableEvents(option === 'team' ? [...teamEvents] : [...individualEvents]);
        setSelectedEvents([]);
    };

    const handleEventButtonClick = (event) => {
        const updatedAvailableEvents = availableEvents.filter((e) => e !== event);
        setAvailableEvents(updatedAvailableEvents);
        
        setSelectedEvents([...selectedEvents, event]);
    };

    const handleSelectedEventClick = (event) => {
        const updatedSelectedEvents = selectedEvents.filter((e) => e !== event);
        setSelectedEvents(updatedSelectedEvents);
        
        setAvailableEvents([...availableEvents, event]);
    };

    const handleCalculateClick = () => {
        const calculatedCost = selectedEvents.reduce((acc, event) => acc + event.cost, 0);
        setTotalCost(calculatedCost);
    };

    useEffect(() => {
        // Update available events whenever the selected option changes
        setAvailableEvents(selectedOption === 'team' ? [...teamEvents] : [...individualEvents]);
    }, [selectedOption]);

    return (
        <section>
            <div className="registration-container">
                <div className="options-container">
                    <div
                        className={`option ${selectedOption === 'team' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('team')}
                    >
                        Team Events
                    </div>
                    <div
                        className={`option ${selectedOption === 'individual' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('individual')}
                    >
                        Individual Events
                    </div>
                </div>

                <div className="event-sections">
                    <div className="events-container">
                        <h3>Available Events</h3>
                        {availableEvents.map((event, index) => (
                            <button key={index} onClick={() => handleEventButtonClick(event)}>
                                {event.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="form-container">
                    <h2>Registration Form</h2>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="college">College:</label>
                    <input
                        type="text"
                        id="college"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                    />

                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    {selectedOption === 'team' && (
                        <div>
                            <label htmlFor="teamName">Team Name:</label>
                            <input
                                type="text"
                                id="teamName"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />

                            <label htmlFor="leaderName">Leader Name:</label>
                            <input
                                type="text"
                                id="leaderName"
                                value={leaderName}
                                onChange={(e) => setLeaderName(e.target.value)}
                            />

                            <label htmlFor="teamMembers">Team Members:</label>
                            {teamMembers.map((member, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={member}
                                    onChange={(e) => {
                                        const updatedMembers = [...teamMembers];
                                        updatedMembers[index] = e.target.value;
                                        setTeamMembers(updatedMembers);
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className="event-sections">
                    <div className="events-container selected-events">
                            <h3>Selected Events</h3>
                            {selectedEvents.map((event, index) => (
                                <button
                                    key={index}
                                    className="selected-event"
                                    onClick={() => handleSelectedEventClick(event)}
                                >
                                    {event.name}
                                </button>
                            ))}
                        </div>
                </div>

            <div className="calculate-container">
                <button className="calculate-button" onClick={handleCalculateClick}>
                    Calculate Total Cost
                </button>
                <p className="total-cost">Total Cost: Rs. {totalCost}</p>
            </div>
        </div>
    </section>
    );
};

export default RegistrationForm;    