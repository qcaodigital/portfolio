import styles from './Project.module.scss';
import { technologies } from '../../../data/Skillset.data';

interface ProjectProps {
	mockupImg: string;
	githubLink: string;
	liveLink: string;
	techs?: string[];
}

export default function Project({ mockupImg, githubLink, liveLink, techs }: ProjectProps) {
	return (
		<div className={styles.project}>
			<div className={styles.info}>
				<div className={styles.group} id={styles.concept}>
					<p className={styles.label}>Concept:</p>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus qui
						aspernatur voluptatem odio molestiae, praesentium vitae cupiditate libero
						animi hic delectus dignissimos autem, corporis cumque architecto doloribus
						voluptatum nostrum?
					</p>
				</div>
				<div className={styles.group} id={styles.tech}>
					<p className={styles.label}>Technologies Used:</p>
					<ul className={styles.icons}>
						{techs?.map((tech) => (
							<li key={tech} className={styles.tech}>
								<img src={`/imgs/skill_logos/${tech}.png`} alt={`${tech} icon`} />
								<p className={styles.label}>
									{technologies.filter((j) => j.filename === tech)[0].label}
								</p>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.group} id={styles.time}>
					<p className={styles.label}>Time To Complete:</p>
					<p className={styles.text}>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className={styles.group} id={styles.challenges}>
					<p className={styles.label}>Challenges:</p>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni
						voluptas porro molestiae sapiente aperiam, officia quibusdam voluptatum
						libero, sequi quaerat saepe dicta? Delectus, quibusdam dolores? Ad magnam
						voluptas quibusdam, pariatur laboriosam vero in, ullam dolores aut ea
						molestias. Facere repellat accusantium cumque minus asperiores corrupti,
						fuga ea debitis dolorem.
					</p>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<img className={styles.mockupImg} src={mockupImg} alt='' />
				<div className={styles.links}>
					<a
						className={styles.live}
						href={liveLink}
						target='_blank'
						rel='noopener noreferrer'
					>
						<span>Live Link</span>
					</a>
					<a href={githubLink} target='_blank' rel='noopener noreferrer'>
						<span>GitHub Repository</span>
					</a>
				</div>
			</div>
		</div>
	);
}
