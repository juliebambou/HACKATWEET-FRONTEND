import styles from '../styles/Home.module.css';
import { Popover } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Home() {

  const popoverContentUp = (
    <div className={styles.popoverContent}>
      <span><FontAwesomeIcon icon={faCircleXmark} className={styles.crossIcon} /></span>
      <img className={styles.logopop}src= "./logo.png"/>
      <h1 className={styles.already}>Create your Hackatweet account</h1>
     <input className={styles.inputpop} placeholder="Firstname"></input>
     <input className={styles.inputpop} placeholder="Username"></input>
     <input className={styles.inputpop} placeholder="Password"></input>
     <button className={styles.buttonpop}>Sign up</button>
    </div>
  );

  const popoverContentIn = (
    <div className={styles.popoverContent}>
      <img className={styles.logopop}src= "./logo.png"/>
      <h1 className={styles.already}>Happy to see you again!<br></br>
      Connect you at your Hackatweet account</h1>
      <input className={styles.inputpop} placeholder="Firstname"></input>
     <input className={styles.inputpop} placeholder="Username"></input>
     <input className={styles.inputpop} placeholder="Password"></input>
     <button className={styles.buttonpop}>Sign in</button>
    </div>
  );

  return (
    <div>
      <main className={styles.main}>

        <div className={styles.contentleft}>
        <img className={styles.logo2}src= "./logo.png"/>
        </div>

        <div className={styles.contentright}>
        <img className={styles.logo1}src= "./logo.png"/>
        <h1 className={styles.title}>See what's
        <br></br>happening</h1>
        <h2 className={styles.soustitle}>Join Hackatweet today.</h2>
        <Popover title="" content={popoverContentUp} className={styles.popover} trigger="click">
        <button className={styles.buttonup}>Sign up</button>

        </Popover>
        <h3 className={styles.already}>Already have an account?</h3>
        <Popover title="" content={popoverContentIn} className={styles.popover} trigger="click">
        <button className={styles.buttonin}>Sign in</button>
        </Popover>

        </div>

      </main>
    </div>
  );
}

export default Home;
