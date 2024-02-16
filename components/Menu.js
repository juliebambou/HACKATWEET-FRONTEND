import styles from '../styles/Messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../reducers/user'


function Menu() {

    const dispatch = useDispatch();

    const handleLogout = () => {
		dispatch(logout());
	};




  return (
    <div>
      <main className={styles.menu}>

        <div className={styles.menuhaut}>
        <img className={styles.logo3}src= "./logo.png"/>
        </div>


      <div className={styles.menubas}>
      <img className={styles.avatar}src= "./femme.png"/>
      <h1></h1>
      <h2></h2>
      <button className={styles.buttonlogout} onClick={() => handleLogout()}>Logout</button>
      </div>
      </main>
    </div>
  );
}

export default Menu;