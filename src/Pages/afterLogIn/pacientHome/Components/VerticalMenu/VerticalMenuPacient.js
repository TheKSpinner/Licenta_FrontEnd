import React from 'react';
import { Link } from 'react-router-dom';
import classes from './VerticalMenuPacient.module.css'
import logo from '../../../../../Misc/logo.png'

function VerticalMenuPacient({ patientName, clientCode }) {
    return (
        <div>
            <div className={classes.vmHeaderContent}>
                <Link to={'/'} ><div className={classes.vmLogo}><img src={logo} alt="Logo" /></div></Link>
                <div className={classes.vmPatientInfo}>
                    <div className={classes.vmPatientName}>{patientName}</div>
                    <div className={classes.vmClientCode}>Client Code: {clientCode}</div>
                </div>
            </div>

            <div className={classes.vmVerticalMenu}>
                <div className={classes.vmSideMenu}>
                    <nav>
                        <ul>
                            <li><Link to={'/rezultate'}>Rezultate</Link></li>
                            <li><Link to={'/consultatii'}>Consultatii</Link></li>
                            <li><Link to={'/programari'}>Programari active</Link></li>
                            <li><Link to={'/programeaza'}>Fa o programare</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default VerticalMenuPacient;
