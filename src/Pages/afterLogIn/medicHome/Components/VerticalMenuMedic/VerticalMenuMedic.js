import React from 'react';
import { Link } from 'react-router-dom';
import classes from './VerticalMenuMedic.module.css';
import logo from '../../../../../Misc/logo.png';

function VerticalMenuPacientMed({ EmployeeName, EmployeeCode }) {
    return (
        <div>
            <div className={classes.vmMedHeaderContent}>
                <Link to={'/'} ><div className={classes.vmMedLogo}><img src={logo} alt="Logo" /></div></Link>
                <div className={classes.vmMedPatientInfo}>
                    <div className={classes.vmMedPatientName}>{EmployeeName}</div>
                    <div className={classes.vmMedClientCode}>Employee Code: {EmployeeCode}</div>
                </div>
            </div>

            <div className={classes.vmMedVerticalMenu}>
                <div className={classes.vmMedSideMenu}>
                    <nav>
                        <ul>
                            <li><Link to={'/pacienti'}>Pacienti</Link></li>
                            <li><Link to={'/profil'}>Profil</Link></li>
                            <li><Link to={'/programari-medic'}>Programari</Link></li>
                            <li><Link to={'/cere-intalnire'}>Cere Intalnire</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default VerticalMenuPacientMed;
