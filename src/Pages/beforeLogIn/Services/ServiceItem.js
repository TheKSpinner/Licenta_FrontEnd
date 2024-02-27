// ServiceItem Component
import React from 'react';
import Card from "../../../UI/Card/Card";
import classes from './ServiceItem.module.css';

function ServiceItem(props) {
    return (
        <li>
            <Card>
                <div>
                    <h1 className={classes.header}>{props.title}</h1>
                    <p className={classes.body}>{props.list}</p>
                </div>
            </Card>
        </li>
    );
}

export default ServiceItem;
