import React, { useState } from 'react';
import styles from './Profil.module.css';
import classes from "../../../pacientHome/Pages/Medics/AllMedicsLogged.module.css"; // Import the CSS module

const Profil = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        photo: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            photo: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit form data, e.g., send to backend
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            description: '',
            photo: null,
        });
    };

    return (
        <div className={styles.profileEditContainer}>
            <h2 className={styles.profileEditTitle}>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className={styles.formGroup}>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} />
                </div>
                <div className={styles.formGroup}>
                    <label>Photo:</label>
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />
                </div>
                <button type="submit" className={styles.cancelButton} onClick={() => window.history.back()}>Cancel</button>
                   
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default Profil;
