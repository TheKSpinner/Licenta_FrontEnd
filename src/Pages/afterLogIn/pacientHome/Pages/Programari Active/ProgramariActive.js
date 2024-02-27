import React, { useState } from 'react';

import classes from './ProgramariActive.module.css';

const UpcomingMeeting = ({ meetingData }) => {
    const calculatePriceSum = () => {
        return meetingData.services.reduce((sum, service) => sum + service.price, 0);
    };

    return (
        <div className={classes.meetingItem}>
            <div>
                <h3 className={classes.meetingDoctor}>{meetingData.doctor}</h3>
                <p className={classes.meetingField}>Medical Field: {meetingData.field}</p>
                <p className={classes.meetingDate}>Meeting Date: {meetingData.date}</p>
                <p className={classes.meetingServices}>
                    Services: {meetingData.services.map(service => service.title).join(', ')}
                </p>
                <p className={classes.meetingPriceSum}>Cost Services: ${calculatePriceSum()}</p>
            </div>
        </div>
    );
};

const UpcomingMeetings = () => {
    const upcomingMeetings = [
        {
            doctor: 'Dr. Johnson',
            date: '2022-02-15',
            field: 'Dermatology',
            services: [
                { title: 'Dermatology Consultation', price: 40 },
                { title: 'Skin Allergy Test', price: 25 },
            ],
        },
        // Add more meeting data as needed
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredMeetings = upcomingMeetings.filter((meeting) =>
        meeting.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

            <div className={classes.consultatiiContainer}>
                <h2 className={`${classes.titleBackground} ${classes.consultatiiTitle}`}>Upcoming Meetings</h2>

                {/* Search Box */}
                <div className={classes.searchContainer}>
                    <input
                        className={classes.search}
                        type="text"
                        placeholder="Search meetings"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {filteredMeetings.map((meeting, index) => (
                    <UpcomingMeeting key={index} meetingData={meeting} />
                ))}

                <button className={classes.closeButton} onClick={() => window.history.back()}>
                    Close
                </button>
            </div>

    );
};

export default UpcomingMeetings;
