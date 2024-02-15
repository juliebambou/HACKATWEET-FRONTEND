import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../reducers/bookmarks';
import {user}} from '../reducers/hiddenArticles';
import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet() {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

  const handleLikeTweet = 


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