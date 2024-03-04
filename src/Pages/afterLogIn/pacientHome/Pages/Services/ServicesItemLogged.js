// ServiceItemLogged.js

import React from 'react';
import classes from './ServicesItemLogged.module.css';

function ServiceItemLogged(props) {
    return (
        <div className={classes.serviceItem}>
            <h1 className={classes.header}>{props.title}</h1>
            <div className={classes.body}>
                {props.list.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
}

export default ServiceItemLogged;
