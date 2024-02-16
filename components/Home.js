import styles from '../styles/Home.module.css';
import { Popover } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Login from './Login'




function Home() {


  return (
    <div>
      <main className={styles.main}>

        <div className={styles.contentleft}>
        <img className={styles.logo2}src= "./logo.png"/>
        </div>

        <Login />

      </main>
    </div>
  );
}

export default Home;
