import styles from './Elipses.module.scss'

const Elipses = () => {
	return (
		<>
			<div className={`${styles.elipse} ${styles.elipse1}`}></div>
			<div className={`${styles.elipse} ${styles.elipse2}`}></div>
			<div className={`${styles.elipse} ${styles.elipse3}`}></div>
		</>
		
	)
}

export default Elipses;