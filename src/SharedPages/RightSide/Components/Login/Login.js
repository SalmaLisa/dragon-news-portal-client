import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import app from '../../../../firebase/firebase.config';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Login = () => {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(() => {})
    .catch(error=>console.error(error))
  }
  
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then(() => { })
    .catch(error=>console.error(error))
  }
  return (
    <div>
      <Button onClick={handleGoogleSignIn} className='d-flex align-items-center mx-0 px-5 py-2' variant="outline-danger">
        <FaGoogle />
        <p className='m-0 ms-1'>Login via Google</p>
      </Button>
      <Button onClick={handleGithubLogin} className='d-flex align-items-center mx-0 px-5 py-2 mt-2' variant="outline-dark">
        <FaGithub />
        <p className='m-0 ms-1'>Login via Google</p>
      </Button>
    </div>
  );
};

export default Login;