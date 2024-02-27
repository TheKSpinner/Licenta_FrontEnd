import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './SignUp.module.css';
import logo from '../../../Misc/logo.png'
function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        familyName: '',
        cnp: '',
        dateOfBirth: '',
        password: '',
        repeatPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add validation logic here
        if (formData.password !== formData.repeatPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Add logic for submitting the form
        console.log('Form submitted:', formData);
    };

    return (
        <div className={classes.signUpContainer}>
            <div className={classes.logoContainer}>
                <Link to="/">
                    <img src={logo} alt="Logo" className={classes.logo} />
                </Link>
            </div>
            <div className={classes.formContainer}>
                <form className={classes.signUpForm} onSubmit={handleSubmit}>
                    <label htmlFor="firstName" className={classes.label}>
                        First Name:
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={classes.input}
                        required
                    />

                    <label htmlFor="familyName" className={classes.label}>
                        Family Name:
                    </label>
                    <input
                        type="text"
                        id="familyName"
                        name="familyName"
                        value={formData.familyName}
                        onChange={handleChange}
                        className={classes.input}
                        required
                    />

                    <label htmlFor="cnp" className={classes.label}>
                        CNP:
                    </label>
                    <input
                        type="text"
                        id="cnp"
                        name="cnp"
                        value={formData.cnp}
                        onChange={handleChange}
                        className={classes.input}
                        required
                    />

                    <label htmlFor="dateOfBirth" className={classes.label}>
                        Date of Birth:
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className={classes.input}
                        required
                    />

                    <label htmlFor="password" className={classes.label}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={classes.input}
                        required
                    />

                    <label htmlFor="repeatPassword" className={classes.label}>
                        Repeat Password:
                    </label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        className={classes.input}
                        required
                    />

                    <button type="submit" className={classes.signupButton}>
                        Sign Up
                    </button>
                </form>
            </div>
            <div className={classes.loginLink}>
                Already have an account? <Link to="/log-in">Log In</Link>
            </div>
        </div>
    );
}

export default SignUp;
