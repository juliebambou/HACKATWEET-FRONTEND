import styles from '../styles/Home.module.css';
import { Popover } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Login from './Login'
import {useSelector} from 'react-redux'
import Tweet from '../components/Tweet';
import LastTweets from '../components/LastTweets';
import Menu from '../components/Menu';
import Trends from '../components/Trends';



function Home() {
  const user = useSelector((state) => state.user.value);


  return (
    <>
{ user.token ?
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
 :
  <div>
      <main className={styles.main}>

        <div className={styles.contentleft}>
        <img className={styles.logo2} src= "./logo.png"/>
        </div>
        <Login />
        </main>
        </div>
      }
      </>
  );
}

export default Home;
