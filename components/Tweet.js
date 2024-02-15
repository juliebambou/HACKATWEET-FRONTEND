import styles from '../styles/Home.module.css';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
/*import { addBookmark, removeBookmark } from '../reducers/bookmarks';
import {user} from '../reducers/hiddenArticles';*/
import Image from 'next/image';
=======
import {user} from '../reducers/user';
>>>>>>> 3560405cbac26b1a909050fa8fcd61440081f6c0
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import logo from '../public/avatar.png';

function Tweet() {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
  const [likeCount, setLlikeCount] = useState(0);

<<<<<<< HEAD
  const handleLikeTweet = '';
=======
>>>>>>> 3560405cbac26b1a909050fa8fcd61440081f6c0

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
<<<<<<< HEAD
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


=======

    <div className={styles.container}>
      <main className={styles.main}> 
          <div>
			      <img className={styles.avatar} src={logo} alt="avatar" />
           <p>pseudo @</p>		
          </div>
            <div>
             <p>Ici je tweet</p>
           </div>
            {/* <div> */}
             {/* <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /></span>
             <span><FontAwesomeIcon icon={faTrashCan} onClick={() => deleteTweet()} style={trashIconStyle} className="trash" /></span>
            </div>        */}
>>>>>>> 3560405cbac26b1a909050fa8fcd61440081f6c0
      </main>
    </div>
  );
}

export default Tweet;