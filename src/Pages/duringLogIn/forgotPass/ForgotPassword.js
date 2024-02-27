import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ForgotPassword.module.css';
import logo from '../../../Misc/logo.png'

function ForgotPassword() {
    return (
        <div className={classes.forgotPasswordContainer}>
            <div className={classes.logoContainer}>
                <Link to="/">
                    <img src={logo} alt="Logo" className={classes.logo} />
                </Link>
            </div>
            <div className={classes.formContainer}>
                <form className={classes.forgotPasswordForm}>
                    <label htmlFor="email" className={classes.label}>
                        Email:
                    </label>
                    <input type="email" id="email" className={classes.input} />

                    <button type="submit" className={classes.resetButton}>
                        Reset Password
                    </button>
                </form>
            </div>
            <div className={classes.loginLink}>
                <Link to="/log-in">Remember your password? Log In</Link>
            </div>
        </div>
    );
}

export default ForgotPassword;
