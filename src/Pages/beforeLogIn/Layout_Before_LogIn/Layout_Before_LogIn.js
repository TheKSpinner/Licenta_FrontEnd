import classes from './Layout_Before_LogIn.module.css'
import NavBar from "../Components/NavBar/NavBar";
import React from "react";

function Layout_Before_LogIn(props){
    return <div>
        <NavBar/>
        <main  className={classes.main}>{props.children}</main>
    </div>

}

export default Layout_Before_LogIn;