import { useHistory } from 'react-router-dom';
import { scrollToCallback } from './../../helpers/scrollToCallback';
import { Dispatch, SetStateAction } from 'react';
import SVGBorderButton from './SVGBorderButton';

interface NextProps {
	className?: string;
	buttonText: string;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	pushTo: string;
	setDirection: Dispatch<SetStateAction<'up' | 'down'>>;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Next({
	className,
	sectionRef: ref,
	buttonText,
	pushTo,
	setDirection,
	setIsSubpathOpen,
}: NextProps) {
	const history = useHistory();

	function handleClick(): void {
		scrollToCallback(ref.current, { top: 0, behavior: 'smooth' }, () => {
			setDirection('down');
			setTimeout(() => {
				setIsSubpathOpen(false);
			}, 100);
			setTimeout(() => {
				history.push(pushTo);
			}, 1000);
		});
	}

	return (
		<div
			style={{ textAlign: 'center', margin: '5vh 0' }}
			className={className}
			onClick={handleClick}
		>
			<SVGBorderButton text={buttonText} />
		</div>
	);
}
