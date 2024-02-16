import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';


//tweet are displayed here
function Feed () {
    
const [tweets, setTweets] = useState([]);

//fetch tweets from database
    useEffect(() => {
        hackatweet.collection('tweets').onSnapshot(snapshot => (
            setTweets(snapshot.docs.map(doc => doc.data()))
        ));
    }, []);

    return (
        <div className={Styles.feed}>
        {/*Display tweets */}
        {tweets.map((tweet, index) => (
            <Tweet key={index} tweet={tweet}/>
        ))}
        </div>
    );
}

export default Feed;