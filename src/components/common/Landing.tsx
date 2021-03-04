import { AnimatePresence, motion } from 'framer-motion';
import { transitions } from './Landing.transitions';
import styles from './Landing.module.scss';
import CTAContainer from './CTAContainer';
import { Dispatch, SetStateAction } from 'react';

interface LandingProps {
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	img: { src: string; alt: string };
	headerText: string;
	subheaderText: string;
}

export default function Landing({
	isSubpathOpen,
	setIsSubpathOpen,
	sectionRef,
	img,
	headerText,
	subheaderText,
}: LandingProps) {
	if ([...subheaderText].length > 190) {
		throw new Error(
			`Prop subheaderText has too many characters. Max allotted characters is 190. Current character amount is ${
				[...subheaderText].length
			}`
		);
	}
	return (
		<section className={styles.landing}>
			<motion.div
				className={`${styles.imgContainer} ${isSubpathOpen && styles.subpathOpen}`}
				variants={transitions.img}
			>
				<motion.div
					variants={transitions.bracket}
					id={styles.top}
					className={styles.bracket}
				/>
				<img src={img.src} alt={img.alt} />
				<motion.div className={styles.bar} variants={transitions.bar} />
				<motion.div
					variants={transitions.bracket}
					id={styles.bottom}
					className={styles.bracket}
				/>
			</motion.div>
			<motion.header variants={transitions.stagger}>
				<motion.h1 variants={transitions.headerChildren}>{headerText}</motion.h1>
				<motion.h2 variants={transitions.headerChildren}>{subheaderText}</motion.h2>
				<CTAContainer
					isSubpathOpen={isSubpathOpen}
					setIsSubpathOpen={setIsSubpathOpen}
					transitions={transitions}
					sectionRef={sectionRef}
				/>
			</motion.header>
			<AnimatePresence exitBeforeEnter>
				{isSubpathOpen && (
					<motion.div
						animate='animate'
						initial='initial'
						exit='exit'
						className={styles.scrollCTA}
						variants={transitions.scrollCTA}
					>
						<p>scrolldown</p>
						<div className={styles.line}></div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
