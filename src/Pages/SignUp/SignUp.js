import './SignUp.css';
import React, { useState } from 'react';
import { faExclamationCircle, faExclamationTriangle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import { MutatingDots } from 'react-loader-spinner';

const SignUp = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending,] = useSendEmailVerification(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    const eyeToggolePassword = () => {
        setPasswordShown(passwordShown ? false : true);
    }
    const handleEmailBlur = (event) => {
        const emailInput = (event.target.value);
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail(emailInput);
        } else {
            setError("Please Provide a valid Email");
        }
    }
    const handlePasswordBlur = (event) => {
        const passwordInput = event.target.value;

        if (passwordInput.length < 7) {
            setError("Password too short, Input more than 7 character");
        }
        else if (!/(?=.*[A-Z])/.test(passwordInput)) {
            setError("Password must contain a capital letter");
        }
        else if (!/(?=.*?[#?!@$%^&*-+=])/.test(passwordInput)) {
            setError("Password must contain a special letter [#?!@$%^&*-+=]");
        }
        else {
            setPassword(passwordInput);
        }
    };

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    };
    /* -------------------------------------------------------- */
    if (user) {
        navigate(from, {replace: true});
        // navigate(from, {replace: true});
    }
    const handleCreateUser = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Your two passwords did not match requirement');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
        alert(`Sent email`);
        // toast.success("Account created", { id: "created" });
    }
    
    const handleGoogleSignIn = () => { 
        signInWithGoogle()
        .then(() => {
            navigate(from, {replace: true});
        })
    }
    const handleGithubSignIn = () => { 
        signInWithGithub()
        .then(() => {
            navigate(from, {replace: true});
        })
    }

    return (
        <div className='form-container'>
            <div className='auth-form'>
                <h1 className='form-title'>SignUp</h1>
                <form onSubmit={handleCreateUser}>

                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' required />
                    </div>
                    {email.error && (
                        <p className='error'>
                            <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon> {email.error}
                        </p>
                    )}
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>

                        <div style={{ position: 'relative', display: 'flex' }}>

                            <input onBlur={handlePasswordBlur} type={passwordShown ? "text" : "password"} name="password" id="" placeholder='Enter password here' required />

                            <FontAwesomeIcon style={{ position: 'absolute', top: "38%", right: "5%" }} onClick={eyeToggolePassword} icon={passwordShown ? faEye : faEyeSlash}></FontAwesomeIcon>

                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>

                        <div style={{ position: 'relative', display: 'flex' }}>

                            <input onBlur={handleConfirmPasswordBlur} type={passwordShown ? "text" : "password"} name="confirm-password" id="" placeholder='Confirm password' required />

                            <FontAwesomeIcon style={{ position: 'absolute', top: "38%", right: "5%" }} onClick={eyeToggolePassword} icon={passwordShown ? faEye : faEyeSlash}></FontAwesomeIcon>

                        </div>
                    </div>

                    {error && (
                        <p className='error'>
                            <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon> {error}
                        </p>
                    )}
                    {
                        loading && <MutatingDots style={{ margin: "0 auto" }} height="100" width="110" color='orange' ariaLabel='loading' secondaryColor="#0ead69" />
                    }
                    <input className='form-submit' id="" type='submit' value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
            
                <div className='input-wrapper'>
                    <button onClick={handleGoogleSignIn}  className='google-auth'>
                        <img src='https://www.netier.com.au/wp-content/uploads/2018/07/Google_-G-_Logo.svg_.png' style={{ width: '38px' }} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
                
                <div onClick={handleGithubSignIn}  className='input-wrapper'>
                    <button className='google-auth'>
                        <img src='http://cdn.onlinewebfonts.com/svg/img_74204.png' alt='' style={{ width: '35px' }} />
                        <p> Continue with Github </p>
                    </button>
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth' >
                        <img src='https://pnggrid.com/wp-content/uploads/2021/05/Facebook-logo-2021.png' alt='' style={{ width: '38px' }} />
                        <p> Continue with Facebook </p>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SignUp;