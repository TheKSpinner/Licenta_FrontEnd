import classes from './LayoutAfterLogInPacient.module.css'
import React from "react";
import VerticalMenuMedic from "../Components/VerticalMenuMedic/VerticalMenuMedic";

function LayoutAfterLogInPacient(props){
    return <div>
        <VerticalMenuMedic EmployeeCode={'1230000000000N'} EmployeeName={'Sosu Alexandru'}/>
        <main  className={classes.main}>{props.children}</main>
    </div>

}

export default LayoutAfterLogInPacient;