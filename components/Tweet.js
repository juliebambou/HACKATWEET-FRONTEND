import styles from '../styles/Home.module.css';
import React from 'react';
import { useState } from 'react';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

//fonction qui affiche les tweets
function Tweet() {

  const [likes, setLikes] = useState(tweet.likes);

  const likeTweet = () => {
    setLikes(likes + 1);
    hackatweet.collection('tweets').doc(tweet.id).update({
      likes: likes + 1
    });
  };


  return (
    <div className={styles.tweet}>
      <div className={styles.tweet_harder}>
       <h3>{tweet.username}</h3>
      </div>
        <div className={styles.tweet_body}>
          <p>{tweet.text}</p>
        </div>   
        {/*Display tweet options: like, remove */}
        <span><FontAwesomeIcon icon={faHeart} onClick={() => likeTweet()} style={heartIconStyle} className="like" /></span>
       </div>
  );
}

export default Tweet;