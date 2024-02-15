import styles from '../styles/Messages.module.css';



function Menu() {
  return (
    <div>
      <main className={styles.menu}>

        <div className={styles.menuhaut}>
        <img className={styles.logo3}src= "./logo.png"/>
        </div>


      <div className={styles.menubas}>
      <img className={styles.avatar}src= "./avatar.png"/>
      <button className={styles.buttonlogout}>Logout</button>
      </div>
      </main>
    </div>
  );
}

export default Menu;