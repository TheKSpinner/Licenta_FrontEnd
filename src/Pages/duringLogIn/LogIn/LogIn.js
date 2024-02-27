import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LogIn.module.css'; // Import your CSS file
import logo from '../../../Misc/logo.png'; // Assuming you have the logo file

function LogIn() {
    return (
        <div className={classes.loginContainer}>
            <div className={classes.logoContainer}>
                <Link to="/">
                    <img src={logo} alt="Logo" className={classes.logo} />
                </Link>
            </div>
            <div className={classes.formContainer}>
                <form className={classes.loginForm}>
                    <label htmlFor="email" className={classes.label}>
                        Email:
                    </label>
                    <input type="email" id="email" className={classes.input} />

                    <label htmlFor="password" className={classes.label}>
                        Password:
                    </label>
                    <input type="password" id="password" className={classes.input} />

                    <button type="submit" className={classes.loginButton}>
                        Log In
                    </button>
                </form>
            </div>
            <div className={classes.signupLink}>
                Don't have an account?<Link to="/signup"> Sign Up</Link>
            </div>
            <div className={classes.signupLink}>
                Forgot your password?<Link to="/forgot-password">Change password</Link>
            </div>
        </div>
    );
}

export default LogIn;
