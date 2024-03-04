import React, { useState } from 'react';
import classes from './Patients.module.css'; // Import the CSS module

const PatientItem = ({ patientData }) => {
    return (
        <div className={`${classes.patientItem} ${classes.whiteBackground}`}>
            <h1 className={classes.name}>{patientData.name}</h1>
            <p className={classes.age}>Age: {patientData.age}</p>
            <p className={classes.lastVisitReason}>Last Visit Reason: {patientData.lastVisitReason}</p>

            {/* Attachments Section */}
            {patientData.attachments && patientData.attachments.length > 0 && (
                <div className={classes.attachmentsSection}>
                    <h4>Attachments:</h4>
                    <ul className={classes.attachmentsList}>
                        {patientData.attachments.map((attachment, index) => (
                            <li key={index} className={classes.attachmentItem}>
                                <a
                                    href={attachment.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.attachmentLink}
                                >
                                    {attachment.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const PatientsList = ({ patients }) => {
    return (
        <div className={classes.listContainer}>
            {patients.map((patient, index) => (
                <PatientItem
                    key={index}
                    patientData={patient}
                />
            ))}
        </div>
    );
};

const Patients = ({ addPatientData }) => {
    const patientsData = [
        {
            name: 'John Doe',
            age: 30,
            lastVisitReason: 'Check-up',
            attachments: [
                { label: 'Patient Report', path: 'path/to/report.pdf' },
            ],
        },
        // Add more patient data as needed
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = patientsData.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={classes.allPatientsContainer}>
            <h2 className={`${classes.allPatientsTitle} ${classes.titleBackground}`}>All Patients</h2>

            <div className={classes.searchContainer}>
                <input
                    className={classes.search}
                    type="text"
                    placeholder="Search patients"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <PatientsList patients={filteredPatients} />
            <button className={classes.closeButton} onClick={() => window.history.back()}>
                Close
            </button>
        </div>
    );
};


export default Patients;
