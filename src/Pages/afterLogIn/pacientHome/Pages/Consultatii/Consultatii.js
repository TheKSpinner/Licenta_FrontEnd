import React, { useState } from 'react';
import classes from './Consultatii.module.css';

const Consultation = ({ consultationData }) => {
    const [showAttachments, setShowAttachments] = useState(false);

    const toggleAttachments = () => {
        setShowAttachments(!showAttachments);
    };

    return (
        <div className={classes.consultationItem}>
            <div>
                <h3 className={classes.consultationDoctor}>{consultationData.doctor}</h3>
                <p className={classes.consultationField}>Medical Field: {consultationData.field}</p>
                <p className={classes.consultationDate}>Consultation Date: {consultationData.date}</p>
                <button className={classes.closeButton} onClick={toggleAttachments}>
                    {showAttachments ? 'Hide Attachments' : 'Show Attachments'}
                </button>
            </div>

            {showAttachments && (
                <div className={classes.attachmentsSection}>
                    <h4>Attachments:</h4>
                    <ul className={classes.attachmentsList}>
                        <li className={classes.attachmentItem}>
                            <a
                                href={consultationData.diagnosticPDF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.attachmentLink}
                            >
                                Diagnostic PDF
                            </a>
                        </li>
                        <li className={classes.attachmentItem}>
                            <a
                                href={consultationData.prescriptionPDF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.attachmentLink}
                            >
                                Prescription PDF
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

const Consultatii = () => {
    const consultations = [
        {
            doctor: 'Dr. Smith',
            date: '2022-01-10',
            field: 'Cardiology',
            diagnosticPDF: 'path/to/diagnostic.pdf',
            prescriptionPDF: 'path/to/prescription.pdf',
        },
        {
            doctor: 'Dr. Smith',
            date: '2022-01-10',
            field: 'Cardiology',
            diagnosticPDF: 'path/to/diagnostic.pdf',
            prescriptionPDF: 'path/to/prescription.pdf',
        },
        // ... (other consultations with different fields)
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredConsultations = consultations.filter((consultation) =>
        consultation.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

            <div className={classes.consultatiiContainer}>
                <h2 className={`${classes.titleBackground} ${classes.consultatiiTitle}`}>Consultatii</h2>

                {/* Search Box */}
                <div className={classes.searchContainer}>
                    <input
                        className={classes.search}
                        type="text"
                        placeholder="Search consultations"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {filteredConsultations.map((consultation, index) => (
                    <Consultation key={index} consultationData={consultation} />
                ))}

                <button className={classes.closeButton} onClick={() => window.history.back()}>
                    Close
                </button>
            </div>

    );
};

export default Consultatii;
