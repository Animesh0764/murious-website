import React, { useEffect, useState } from 'react';
// import { Redirect } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import '../../public/css/RegForm.css';
import { useFirebase } from "../context/firebase";
import { addDoc, collection, getFirestore, query, getDocs, where } from "firebase/firestore";
// import { v4 as uuidv4 } from 'uuid';
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
    const [user, setUser] = useState(null);

    useEffect(() => {
        const firebaseAuth = getAuth();
        firebaseAuth.onAuthStateChanged((currentUser) => {
            if (!currentUser) {
                toast.error('Please sign in to register for the event');
                setTimeout(() => {
                    window.location.href = '/signin';
                }, 2000);
            } else {
                setUser(currentUser);
            }
        });
    }, [])

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
        const user = firebase.auth().currentUser;
        if (!user) {
            console.error("User is not authenticated");
            return;
        }

        const userEmail = user.email;
        const userUid = user.uid;

        console.log(userEmail, userUid);

        const querySnapshot = await getDocs(query(collection(db, "registeredEvents"), where("email", "==", userEmail)));

        if (!querySnapshot.empty) {
            const registeredEvents = querySnapshot.docs.map(doc => doc.data().events);
            const userRegisteredEvents = Object.keys(Object.assign({}, ...registeredEvents));
            const duplicateEvents = userData.selectedEvents.filter(event => userRegisteredEvents.includes(event.name));
            if (duplicateEvents.length > 0) {
                toast.error(`You're already registered for ${duplicateEvents.map(event => event.name).join(', ')}`);
                return;
            }
        }

        const docRef = await addDoc(collection(db, "registeredEvents", userUid), {
            username: userData.username,
            events: userData.selectedEvents.reduce((acc, eventName) => {
                acc[eventName.name] = true;
                return acc;
            }, {}),
            college: userData.college,
            contact: userData.mobile,
            email: userEmail,
        });
        toast.success('User registered for the event');
        // Redirecting back to home page after successful registration
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    }

    const registerUserforTeamEvents = async (teamData) => {
        const userEmail = firebase.auth().currentUser.email;

        const querySnapshot = await getDocs(query(collection(db, "registeredTeamEvents"), where("email", "==", userEmail)));

    if (!querySnapshot.empty) {
        const registeredEvents = querySnapshot.docs.map(doc => doc.data().events);
        const userRegisteredEvents = Object.keys(Object.assign({}, ...registeredEvents));
        const duplicateEvents = teamData.selectedEvents.filter(event => userRegisteredEvents.includes(event.name));
        if (duplicateEvents.length > 0) {
            toast.error(`You're already registered for ${duplicateEvents.map(event => event.name).join(', ')}`);
            return;
        }
    }
    
        const docRef = await addDoc(collection(db, "registeredTeamEvents"), {
            teamName: teamData.teamName,
            leaderName: teamData.leaderName,
            teamMembers: teamData.teamMembers,
            contact: teamData.mobile,
            events: teamData.selectedEvents.reduce((acc, eventName) => {
                acc[eventName.name] = true;
                return acc;
            }, {}),
            email: userEmail,
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
