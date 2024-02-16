import { useState } from 'react';
import styles from '../styles/Home.module.css';
//import { useDispatch, useSelector } from 'react-redux';
import { Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { login } from '../reducers/user';
//import Link from 'next/link';



function Login() {
  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
  const [signInFirstName, setSignInFirstName] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');


  const handleUp = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstName: signUpFirstName, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ firstName: signUpFirstName, username: signUpUsername, token: data.token }));
					setSignUpFirstName('');
          setSignUpUsername('');
					setSignUpPassword('');
				}
			});
	};

	const handleIn = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstName: signInFirstName, username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ firstName: signInFirstName, username: signInUsername, token: data.token }));
          setSignInFirstName('');
					setSignInUsername('');
					setSignInPassword('');

				}
			});
	};


  const popoverContentUp = (
    <div className={styles.popoverContent}>
      <span><FontAwesomeIcon icon={faCircleXmark} className={styles.crossIcon}/></span>
      <img className={styles.logopop}src= "./logo.png"/>

      <h1 className={styles.already}>Create your Hackatweet account</h1>

     <input className={styles.inputpop} placeholder="Firstname"
     onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName} ></input>

     <input className={styles.inputpop} placeholder="Username"
     onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} ></input>

     <input className={styles.inputpop} placeholder="Password"
     onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} ></input>

     <button className={styles.buttonpop} onClick={() => handleUp()}>Sign up</button>
    </div>
  );

  const popoverContentIn = (
    <div className={styles.popoverContent}>
      <img className={styles.logopop}src= "./logo.png"/>
      <h1 className={styles.already}>Happy to see you again!<br></br>
      Connect you at your Hackatweet account</h1>

      <input className={styles.inputpop} placeholder="Firstname"
      onChange={(e) => setSignInFirstName(e.target.value)} value={signInFirstName} ></input>

     <input className={styles.inputpop} placeholder="Username"
     onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} ></input>

     <input className={styles.inputpop} placeholder="Password"
     onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} ></input>

     <button className={styles.buttonpop} onClick={() => handleIn()}>Sign in</button>
    </div>
  );

  return (
      <div className={styles.contentright}>
        <img className={styles.logo1}src= "./logo.png"/>
        <h1 className={styles.title}>See what's
        <br></br>happening</h1>
        <h2 className={styles.soustitle}>Join Hackatweet today.</h2>
        <Popover title="" content={popoverContentUp} className={styles.popover} trigger="click">
        <button className={styles.buttonup}>Sign up</button>

        </Popover>
        <h3 className={styles.already}>Already have an account?</h3>
        <Popover title="" content={popoverContentIn} className={styles.popover} trigger="click">
        <button className={styles.buttonin}>Sign in</button>
        </Popover>

        </div>
  );
}

export default Login;