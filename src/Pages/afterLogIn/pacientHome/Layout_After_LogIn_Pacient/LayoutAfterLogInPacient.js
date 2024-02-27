import classes from './LayoutAfterLogInPacient.module.css'
import React from "react";
import VerticalMenuPacient from "../Components/VerticalMenu/VerticalMenuPacient";

function LayoutAfterLogInPacient(props){
    return <div>
        <VerticalMenuPacient clientCode={'1230000000000N'} patientName={'Sosu Alexandru'}/>
        <main  className={classes.main}>{props.children}</main>
    </div>

}

export default LayoutAfterLogInPacient;