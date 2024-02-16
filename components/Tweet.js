import styles from '../styles/Home.module.css';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {user} from '../reducers/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import logo from '../public/avatar.png';

function Tweet() {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
  const [tweeto, setTweeto] = useState(0);
  // const [likeCount, setLlikeCount] = useState(0);


  // const handleLikeTweet = () => {
  //   setLlikeCount(likeCount + 1);
  // };
  //  let heartIconStyle = { 'cursor': 'pointer' };
  //  if(likeCount > 0)
  //    {
  //   heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  // };


  // const deleteTweet = () => {
  //   props.removeTweet(props.message)
	// };

  //si le user est connecté il peut tweeter
  let modalContent;
	if (!user.token) {
		modalContent = (
			<div className={styles.registerContainer}>
				<div className={styles.registerSection}>
					<p>Sign-up</p>
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<button id="register" onClick={() => handleRegister()}>Register</button>
				</div>
				<div className={styles.registerSection}>
					<p>Sign-in</p>
					<input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
					<input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
					<button id="connection" onClick={() => handleConnection()}>Connect</button>
				</div>
			</div>
		);
	}


  

  return (

    <div className={styles.container}>
      <main className={styles.main}> 
          <div>
			      <img className={styles.avatar} src={logo} alt="avatar" />
           <p>pseudo @</p>		
          </div>
            <div>
             <p>Ici je tweet</p>
           </div>
             <div> 
              <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /></span>
              <span><FontAwesomeIcon icon={faTrashCan} onClick={() => deleteTweet()} style={trashIconStyle} className="trash" /></span> 
               <input className={styles.inputpop} placeholder="What's up?"
                onChange={(e) => setSignInFirstName(e.target.value)} value={signInFirstName} ></input> 
                <button>Tweet</button>
             </div>
      </main>
    </div>
  );
}

export default Tweet;