import BG from '../assets/background.jpg'
import styles from '../styles/hero.module.css'
function hero(){
    return(
        <>
            <div className={styles.back}>
                <div className={styles.end}>
                    <h2> Our Mission </h2>
                    <h4> Handpicked, Artisnally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea </h4>
                </div>
            </div> 
        </>
    )
}

export default hero;