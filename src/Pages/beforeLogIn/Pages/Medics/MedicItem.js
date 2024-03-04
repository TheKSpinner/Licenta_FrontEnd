// MedicItem Component
import React from 'react';
import Card from "../../../../UI/Card/Card";
import classes from './MedicItem.module.css';
import star from '../../../../Misc/star.png';

function MedicItem(props) {
    return (
        <div>
            <Card>
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
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default MedicItem;
