import React from 'react';
import classes from './ContactLogged.module.css';

const paragraph = 'Get in touch with us for any information or help at:\nTel.: 0759874658\nEmail: trauma.team@tteam.com';

function Contact({ onClose }) {
    return (
        <div className={classes.contactContainer}>
            <div className={classes.contactItem}>
                <div className={classes.contaContainer}>
                    <h3 className={classes.contactHeader}>Contact Information</h3>
                    <p className={classes.contactBody}>{paragraph}</p>
                    <button className={classes.closeButton} onClick={() => window.history.back()}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
