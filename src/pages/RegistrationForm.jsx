import React, { useEffect, useState } from 'react';
import '../../public/css/RegForm.css';
import { useFirebase } from "../context/firebase";
import { addDoc, collection, getFirestore, query, getDocs, where } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';

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
    const [teamMembers, setTeamMembers] = useState(['', '', '', '', '']);

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
        if (selectedOption === 'individual') {
            registerUserforIndividualEvents({
                username: name,
                selectedEvents: selectedEvents.map(event => event.name),
                college: college,
                mobile: phoneNumber,
            });
        } else if (selectedOption === 'team') {
            if (teamName.trim() === '' || leaderName.trim() === '' || teamMembers.filter(member => member.trim() !== '').length < 1) {
                toast.error('Please fill in team name, leader name, and at least one more team member.');
                return;
            }
            registerUserforTeamEvents({
                teamName: teamName,
                leaderName: leaderName,
                teamMembers: teamMembers.filter(member => member.trim() !== ''),
                selectedEvents: selectedEvents.map(event => event.name),
                mobile: phoneNumber,
            });
        }
        const calculatedCost = selectedEvents.reduce((acc, event) => acc + event.cost, 0);
        setTotalCost(calculatedCost);
    };

    const firebase = useFirebase();
    const db = getFirestore();

    const registerUserforIndividualEvents = async (userData) => {
        const querySnapshot = await getDocs(query(collection(db, "registeredEvents"), where("username", "==", userData.username), where("contact", "==", userData.mobile)));
        if (!querySnapshot.empty) {
            console.log("Already exists");
            toast.error('User already registered for the event');
            return;
        }
        const docRef = await addDoc(collection(db, "registeredEvents"), {
            username: userData.username,
            events: userData.selectedEvents.reduce((acc, eventName) => {
                acc[eventName] = true;
                return acc;
            }, {}),
            college: userData.college,
            contact: userData.mobile,
        });
        toast.success('User registered for the event');
        // Redirecting back to home page after successful registration
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    }

    const registerUserforTeamEvents = async (teamData) => {
        const querySnapshot = await getDocs(query(collection(db, "registeredTeamEvents"), where("teamName", "==", teamData.teamName)));
    
        if (!querySnapshot.empty) {
            console.log("Team already exists");
            toast.error('Team with the same name already registered for the event');
            return;
        }
    
        const docRef = await addDoc(collection(db, "registeredTeamEvents"), {
            teamName: teamData.teamName,
            leaderName: teamData.leaderName,
            teamMembers: teamData.teamMembers,
            contact: teamData.mobile,
            events: teamData.selectedEvents.reduce((acc, eventName) => {
                acc[eventName] = true;
                return acc;
            }, {}),
        });
        toast.success('Team registered for the event');
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    };

    return (
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
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <h2>Registration Form</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="college">College:</label>
                <input
                    type="text"
                    id="college"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    required
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

                {selectedOption === 'team' && (
                    <div>
                        <label htmlFor="teamName">Team Name:</label>
                        <input
                            type="text"
                            id="teamName"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            required
                        />

                        <label htmlFor="leaderName">Leader Name:</label>
                        <input
                            type="text"
                            id="leaderName"
                            value={leaderName}
                            onChange={(e) => setLeaderName(e.target.value)}
                            required
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
    );
};

export default RegistrationForm;
