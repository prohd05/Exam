import styles from '../styles/footer.module.css'

function footer(){
    return(
        <>
            <div className={styles.ft}>
                <h1 className='mm'> The Tea Cozy </h1>
                <h5> contact@theteacozy.com</h5>
                <h5> 917-555-8904</h5>
            </div>

            <div className={styles.bottom}>
                <p> copyright The Tea Cozy 2017 </p> 
            </div>
        </>
    )
}

export default footer;