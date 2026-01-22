import styles from '../styles/locations.module.css'
import BG from '../assets/loc-bg.jpg'

function locations(){
    return(
        <>
        <div className={styles.bi}> 
            <div className={styles.to}> 
                <h1 className={styles.m}> Locations </h1>
                <div className={styles.locs}> 
                    <div className={styles.loc}>
                        <h3> Downtown </h3>
                        <p className={styles.ll}> 384 West 4th St </p>
                        <p className={styles.ll}> Suite 108 </p>
                        <p className={styles.ll}> Portland, Marine </p>
                    </div>

                    <div className={styles.loc}>
                        <h3> East Bayside </h3>
                        <p className={styles.ll}> 3433 Phiserman's Avenue </p>
                        <p className={styles.ll}> (Northwest Corner)</p>
                        <p className={styles.ll}> Portland, Marine </p>
                    </div>

                    <div className={styles.loc}>
                        <h3> Oakdale </h3>
                        <p className={styles.ll}> 515 Crescent Avenue </p>
                        <p className={styles.ll}> Second Floor </p>
                        <p className={styles.ll}> Portland, Marine </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default locations;