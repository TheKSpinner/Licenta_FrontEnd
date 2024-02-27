// LabResults.js

import React, { useState } from 'react';
import classes from './Rezultate.module.css'; // Import the CSS module

const LabResult = ({ labResultData }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={classes.labResultItem}>
            <div>
                <h3 className={classes.labResultTitle}>{labResultData.title}</h3>
                <p className={classes.labResultDate}>Result Date: {labResultData.date}</p>
                <button className={classes.showHideButton} onClick={toggleDetails}>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
            </div>

            {showDetails && (
                <div className={classes.detailsSection}>
                    <p className={classes.detailsText}>{labResultData.details}</p>
                </div>
            )}

            {labResultData.attachments && labResultData.attachments.length > 0 && (
                <div className={classes.attachmentsSection}>
                    <h4>Attachments:</h4>
                    <ul className={classes.attachmentsList}>
                        {labResultData.attachments.map((attachment, index) => (
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

const LabResults = () => {
    const labResults = [
        {
            title: 'Blood Test',
            date: '2022-01-15',
            details: 'Blood test results: normal.',
            attachments: [
                { label: 'Lab Report', path: 'path/to/report.pdf' },
            ],
        },
        // Add more lab results as needed
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredLabResults = labResults.filter((result) =>
        result.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={classes.labResultsContainer}>
            <h2 className={`${classes.labResultsTitle} ${classes.titleBackground}`}>
                Lab Results
            </h2>

            <div className={classes.searchContainer}>
                <input
                    className={classes.search}
                    type="text"
                    placeholder="Search lab results"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredLabResults.map((labResult, index) => (
                <LabResult key={index} labResultData={labResult} />
            ))}

            <button className={classes.closeButton} onClick={() => window.history.back()}>
                Close
            </button>
        </div>
    );
};

export default LabResults;
