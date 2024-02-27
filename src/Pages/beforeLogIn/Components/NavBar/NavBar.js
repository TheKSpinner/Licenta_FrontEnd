import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import logo from './logo.png'
function NavBar(){
    return <header className={classes.header}>
        <Link to={'/'} ><div className={classes.logo}><img src={logo} alt="Logo" /></div></Link>
        <nav>
            <ul>
                <li><Link to={'/medics'}>Medics</Link></li>
                <li><Link to={'/services'}>Services</Link></li>
                <li><Link to={'/opening-hours'}>Opening Hours</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li className={classes.badge}><Link to={'/log-in'}>Log In</Link></li>
            </ul>
        </nav>
    </header>
}

export default NavBar;