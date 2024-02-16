import styles from '../styles/Home.module.css';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'next/image';

import {user} from '../reducers/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import logo from '../public/avatar.png';

function Tweet() {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
  const [likeCount, setLlikeCount] = useState(0);

  const handleLikeTweet = () => {
    setLlikeCount(likeCount + 1);
  };
   let heartIconStyle = { 'cursor': 'pointer' };
   if(likeCount > 0)
     {
    heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  };


  // const deleteTweet = () => {
  //   props.removeTweet(props.message)
	// };




  return (
    <div>
      <main className={styles.main}>
        <div>
			    <img className={styles.avatar} src={props.image} />
          <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /></span>
        </div>
			<h2 className={styles.name}>{props.name}</h2>
			<div className={styles.btnContainer}>
			<button className={styles.selectBtn} onClick={() => handleClick()}>Select</button>
			<button className={styles.removeBtn} onClick={() => removeClick()}>Remove all</button>

		</div>


      </main>
    </div>
  );
}

export default Tweet;