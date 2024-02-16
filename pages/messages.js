import Tweet from '../components/Tweet';
import LastTweets from '../components/LastTweets';
import Menu from '../components/Menu';
import Trends from '../components/Trends';
import styles from '../styles/Messages.module.css';

function messages() {
  return (
    <div className={styles.messages} >

        <div className={styles.leftcontent}>
            <Menu/>
        </div>

        <div className={styles.middlecontent}>
           {/* <Tweet/> */}
            <LastTweets/>
        </div>

        <div className={styles.rightcontent}>
            <Trends/>
        </div>

  </div>
  )
};

export default messages;