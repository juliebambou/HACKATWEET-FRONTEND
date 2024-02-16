import styles from '../styles/Messages.module.css';

function Trends() {
  return (
   <>
<h1 className={styles.titre}>Trends</h1>
<div className={styles.hashtags}>
  <h3 className={styles.hashtag}>#hackatweet</h3>
  <h6 className= {styles.h6}>2 tweets</h6>
  <br></br>
  <h3 className={styles.hashtag}>#first</h3>
  <h6 className= {styles.h6}>1 tweet</h6>
  <br></br>
  <h3 className={styles.hashtag}>#toto</h3>
  <h6 className= {styles.h6}>45678 tweets</h6>
  <br></br>
</div>
  </>
  );
}

export default Trends;