import styles from './Nav.module.scss';
import { Dispatch, SetStateAction } from 'react';
import Marker from './components/Marker';
import Brand from './components/Brand';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface NavProps {
	isHBMOpen: boolean;
	setIsHBMOpen: Dispatch<SetStateAction<boolean>>;
	exitDirection: string;
	setExitDirection: (direction: string | null) => {};
}

export default function Nav({ isHBMOpen, setIsHBMOpen, exitDirection, setExitDirection }: NavProps) {
	return (
		<>
			<nav className={styles.Nav}>
				<Link to='/'>
					<Brand text={['quan', 'cao', 'digital']} />
				</Link>
				<button
					id={isHBMOpen ? styles.open : ''}
					className={styles.hbm}
					onClick={() => {
						setExitDirection(null);
						setTimeout(() => setIsHBMOpen((curr) => !curr), 100);
					}}
				>
					<p>menu</p>
					<div className={styles.hbmButton}>
						<div id={styles.top} />
						<div id={styles.bottom}>
							<div id={styles.left} className={styles.half} />
							<div id={styles.right} className={styles.half} />
						</div>
					</div>
				</button>
				<div className={styles.markerContainer}></div>
			</nav>
			<AnimatePresence>{!isHBMOpen && <Marker />}</AnimatePresence>
		</>
	);
}
