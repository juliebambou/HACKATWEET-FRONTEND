import styles from '../styles/Messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../reducers/user'


function Menu() {

  const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    const handleLogout = () => {
		dispatch(logout());
    };

  let userSection;
	if (user.token) {
		userSection = (
      <>
			<div className={styles.logoutSection}>
        <img className={styles.avatar}src= "./femme.png"/>
        <div>
          <h3 className={styles.userId}> {user.firstName} </h3>
				<h6 className={styles.userId}> @{user.username} </h6>
        </div>
        </div>

        <div>
				<button className={styles.buttonlogout} onClick={() => handleLogout()}>Logout</button>
        </div>
        </>
		);
    };

  return (
   <>
        <div className={styles.menuhaut}>
        <img className={styles.logo3}src= "./logo.png"/>
        </div>


      <div className={styles.menubas}>
      {userSection}
      </div>
    </>
  );
}

export default Menu;