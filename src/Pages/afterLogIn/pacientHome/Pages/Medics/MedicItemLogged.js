import React from 'react';
import classes from './MedicItemLogged.module.css';
import star from '../../../../../Misc/star.png';

function MedicItem(props) {
    const handleMakeAppointment = (event) => {
        event.stopPropagation();
        // Implement logic to make an appointment for this medic
        console.log(`Make appointment with ${props.name}`);
    };

    return (
        <div className={classes.card}>
            <div className={classes.medicalInfo}>
                <div className={classes.imagebox}>
                    <img className={classes.image} src={props.image} alt={'pic'} />
                </div>
                <div>
                    <div className={classes.nameAndRating}>
                        <h1 className={classes.name}>{props.name} </h1>
                        <h2 className={classes.rating}>
                            {props.rating} <img src={star} alt="star" className={classes.star} />
                        </h2>
                    </div>
                    <p className={classes.content}>{props.description}</p>
                    <button className={classes.appointmentButton} onClick={handleMakeAppointment}>Make an Appointment</button>
                </div>
            </div>
        </div>
    );
}

export default MedicItem;
