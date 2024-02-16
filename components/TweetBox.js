import React, { useState } from 'react';
import styles from '../styles/Messages.module.css';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');

const sendTweet = (e) => {
    e.preventDefault();
    hackatweet.collection('tweets').add({
        username:'username',
        text: tweetMessage,
    });
setTweetMessage('');
};


return (
    <>
    <div className={styles.tweetBox}>
            <h1 className={styles.titreHome}>Home</h1>
        <form>
            <input className={styles.inputTweet} type='text' value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} placeholder="What's up?" />
            <button className= {styles.btnTweet} type="submit" onClick={sendTweet}>Tweet</button>
        </form>
    </div>
    </>
);
}

export default TweetBox;