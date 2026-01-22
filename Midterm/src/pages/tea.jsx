import I1 from '../assets/berryblitz.jpg'
import I2 from '../assets/spiced-rum.jpg'
import I3 from '../assets/donuts.jpg'
import I4 from '../assets/myrtle.jpg'
import I5 from '../assets/bedford.jpg'

import styles from '../styles/tea.module.css'

function tea(){
    return(
        <>
            <div>
                <h2> Tea of the Month </h2>
                <h4> What's Steeping at The Tea Cozy </h4>
            </div>

            <div className={styles.teas}>
                <div className={styles.type}> 
                    <img src={I1} className={styles.tea}/>
                    <p> Fall Berry Blitz Run </p>
                </div>

                <div className={styles.type}> 
                    <img src={I2} className={styles.tea}/>
                    <p> Spiced Rum Tea </p>
                </div>

                <div className={styles.type}> 
                    <img src={I3} className={styles.tea}/>
                    <p> Seasonal Donuts </p>
                </div>

                <div className={styles.type}> 
                    <img src={I4} className={styles.tea}/>
                    <p> Myrtle Ave Tea </p>
                </div>

                <div className={styles.type}> 
                    <img src={I5} className={styles.tea}/>
                    <p> Bedford Bizarre Tea </p>
                </div>
            </div>
        </>
    )
}

export default tea;