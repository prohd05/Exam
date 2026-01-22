import Logo from '../assets/logo.png'
import styles from '../styles/navbar.module.css'
import { Link } from "react-router-dom";
function navbar(){
    return(
        <>
        <nav className={styles.top}>
            <Link to='/'> <img src={Logo} className={styles.logo}/> </Link>

            <ul className={styles.links}>
                <Link to='/mission'> <li> Our Mission </li> </Link>
                <Link to='/tea'> <li> Featured Tea </li> </Link>
                <Link to='/locations'> <li> Locations </li> </Link>
            </ul>
        </nav>
        </>
    )
}

export default navbar;