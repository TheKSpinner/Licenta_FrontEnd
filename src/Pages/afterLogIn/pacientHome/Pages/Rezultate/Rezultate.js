import React, { useState } from 'react';
import classes from './Rezultate.module.css'; // Import the CSS module

const LabResult = ({ labResultData }) => {
    const [showAttachments, setShowAttachments] = useState(false);

    const toggleAttachments = () => {
        setShowAttachments(!showAttachments);
    };

    return (
        <div className={classes.consultationItem}>
            <div>
                <h3 className={classes.consultationDoctor}>{labResultData.title}</h3>
                <p className={classes.consultationDate}>Result Date: {labResultData.date}</p>
                <button  className={classes.showHideButton}  onClick={toggleAttachments}>
                    {showAttachments ? 'Hide Attachments' : 'Show Attachments'}
                </button>
            </div>

            {showAttachments && (
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
        <div className={classes.consultatiiContainer}>
            <h2 className={classes.consultatiiTitle}>Lab Results</h2>

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
