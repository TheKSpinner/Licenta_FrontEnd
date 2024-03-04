import React, { useState } from 'react';
import classes from './ProgramariMedic.module.css'; // Import the CSS module
const ProgramariMedic = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    const [selectedDiagnosticPDFs, setSelectedDiagnosticPDFs] = useState({});
    const [selectedPrescriptionPDFs, setSelectedPrescriptionPDFs] = useState({});
    const [activeAppointments, setActiveAppointments] = useState([
        {
            id: 1,
            patientName: 'John Doe',
            reason: 'General Checkup',
            dateTime: '2024-03-01 09:00 AM',
            services: 'General examination, blood test',
            reportPDF: 'path/to/report.pdf',
            prescriptionPDF: 'path/to/prescription.pdf',
        },
        {
            id: 2,
            patientName: 'Jane Smith',
            reason: 'Dental Checkup',
            dateTime: '2024-03-02 10:30 AM',
            services: 'Dental examination, cleaning',
            reportPDF: 'path/to/report.pdf',
            prescriptionPDF: 'path/to/prescription.pdf',
        },
        // Add more appointments as needed
    ]);

    const handleConsultationDone = (appointmentId) => {
        // Find the appointment to mark as done
        const appointmentToRemove = activeAppointments.find(appointment => appointment.id === appointmentId);
        if (!appointmentToRemove) return;

        // Remove the appointment from active appointments
        setActiveAppointments(prevAppointments =>
            prevAppointments.filter(appointment => appointment.id !== appointmentId)
        );

        // Add patient's data to the Patients list
        const newPatientData = {
            name: appointmentToRemove.patientName,
            age: 30, // You can set the age as needed
            lastVisitReason: appointmentToRemove.reason,
            attachments: [
                { label: 'Patient Report', path: appointmentToRemove.reportPDF },
                // Add more attachments if available
            ]
        };
        // Here, you can push the newPatientData to your Patients list or database
        console.log('Patient data added to Patients list:', newPatientData);
    };

    const handleDiagnosticPDFUpload = (appointmentId) => {
        // Open file selection dialog
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf';
        input.onchange = (event) => {
            const file = event.target.files[0];
            console.log('Selected diagnostic PDF:', file);
            setSelectedDiagnosticPDFs(prevState => ({
                ...prevState,
                [appointmentId]: file
            }));
        };
        input.click();
    };

    const handlePrescriptionPDFUpload = (appointmentId) => {
        // Open file selection dialog
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf';
        input.onchange = (event) => {
            const file = event.target.files[0];
            console.log('Selected prescription PDF:', file);
            setSelectedPrescriptionPDFs(prevState => ({
                ...prevState,
                [appointmentId]: file
            }));
        };
        input.click();
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={classes.programarimedicContainer}>
            <h2 className={`${classes.titleBackground} ${classes.programarimedicTitle}`}>Programari Medic</h2>

            {/* Search Box */}
            <div className={classes.searchContainer}>
                <input
                    className={classes.search}
                    type="text"
                    placeholder="Search appointments"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {activeAppointments.map((appointment, index) => (
                <div key={index} className={classes.appointmentItem}>
                    <div>
                        <h3 className={classes.appointmentDoctor}>{appointment.patientName}</h3>
                        <p className={classes.appointmentField}>Reason for Checkup: {appointment.reason}</p>
                        <p className={classes.appointmentDate}>Date and Time: {appointment.dateTime}</p>
                        <p className={classes.appointmentField}>Services: {appointment.services}</p>
                        <button className={classes.showHideButton} onClick={toggleDetails}>
                            {showDetails ? 'Hide Details' : 'Show Details'}
                        </button>
                        <button
                            className={classes.markAsDoneButton}
                            onClick={() => handleConsultationDone(appointment.id)}
                        >
                            Mark as Done
                        </button>
                    </div>

                    {showDetails && (
                        <div className={classes.attachmentsSection}>
                            <h4>Attachments:</h4>
                            <ul className={classes.attachmentsList}>
                                <li className={classes.attachmentItem}>
                                    <div>
                                        <button
                                            className={classes.attachmentLink}
                                            onClick={() => handleDiagnosticPDFUpload(appointment.id)}
                                        >
                                            Upload Diagnostic PDF
                                        </button>
                                        {selectedDiagnosticPDFs[appointment.id] && (
                                            <span className={classes.selectedPDFName}>
                                                {selectedDiagnosticPDFs[appointment.id].name}
                                            </span>
                                        )}
                                    </div>
                                </li>
                                <li className={classes.attachmentItem}>
                                    <div>
                                        <button
                                            className={classes.attachmentLink}
                                            onClick={() => handlePrescriptionPDFUpload(appointment.id)}
                                        >
                                            Upload Prescription PDF
                                        </button>
                                        {selectedPrescriptionPDFs[appointment.id] && (
                                            <span className={classes.selectedPDFName}>
                                                {selectedPrescriptionPDFs[appointment.id].name}
                                            </span>
                                        )}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ))}

            <button className={classes.closeButton} onClick={() => window.history.back()}>
                Close
            </button>
        </div>
    );
};

export default ProgramariMedic;
