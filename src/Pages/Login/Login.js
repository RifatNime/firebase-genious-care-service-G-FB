import './Login.css';
import auth from '../../firebase.init';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { MutatingDots } from 'react-loader-spinner';
import './Login.css';
import toast from 'react-hot-toast';
import { Button } from 'react-bootstrap';


const Login = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, SetError] = useState("");
    const [signInWithEmailAndPassword, user, loading,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    /* ----------------------------- 3 no step ----------------------------------------*/
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // const { from } = location.state || { from: { pathname: "/" } };


    const eyeToggolePassword = () => {
        setPasswordShown(passwordShown ? false : true);
    }
    const handleEmailBlur = (event) => {
        const emailInput = (event.target.value);
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail(emailInput);
        } else {
            SetError("Please Provide a valid Email");
        }
    }
    const handlePasswordBlur = (event) => {
        const passwordInput = event.target.value;

        if (passwordInput.length < 7) {
            SetError("Password too short, Input more than 7 character");
        }
        else if (!/(?=.*[A-Z])/.test(passwordInput)) {
            SetError("Password must contain a capital letter");
        }
        else if (!/(?=.*?[#?!@$%^&*-+=])/.test(passwordInput)) {
            SetError("Password must contain a special letter [#?!@$%^&*-+=]");
        }
        else {
            setPassword(passwordInput);
        }
    };

    /* ----------------------------- 4 no step ----------------------------------------*/
    if (user) {
        navigate(from, { replace: true });
        // navigate('/home');
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        {/* toast.success("Account created",  {position: 'top-center', id: "created" });*/ }
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(() => {
                navigate(from, { replace: true });
            })
    }



    return (
        <div className='form-container'>
            <div className='auth-form'>
                <h1 className='form-title'>Login</h1>
                <form action="" onSubmit={handleUserSignIn}>

                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' required />
                    </div>
                    {/* {error && (
                        <p className='error'>
                            <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon> {error}
                        </p>
                    )} */}

                    <div className="input-group">
                        <label htmlFor='password'>Password</label>

                        <div style={{ position: 'relative', display: 'flex' }}>

                            <input onBlur={handlePasswordBlur} type={passwordShown ? "text" : "password"} name="password" id="" placeholder='Enter password here' required />

                            <FontAwesomeIcon style={{ position: 'absolute', top: "38%", right: "5%" }} onClick={eyeToggolePassword} icon={passwordShown ? faEye : faEyeSlash}></FontAwesomeIcon>

                        </div>
                        {/* {error && (
              <p className='error'>
                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon> {error}
              </p>
            )} */}
                    </div>
                    {/* <p style={{ color: 'red' }}>{error}</p> */}
                    {
                        loading ? <MutatingDots style={{ margin: "0 auto" }} height="100" width="110" color='orange' ariaLabel='loading' secondaryColor="#0ead69" /> :
                            <p className='error'>
                                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon> {error}
                            </p>
                    }
                    <input className='form-submit' id="" type='submit' value="Login" />
                </form>
                <p>
                    New to Ema-Jhon?{" "} <Link className='form-link' to="/signup">Create an account</Link>
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

export default Login;