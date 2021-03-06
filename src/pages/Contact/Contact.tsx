import Landing from '../../components/common/Landing';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import ContactForm from './components/ContactForm';
import { viewportType } from './../../components/hooks/useViewport';

interface ContactProps {
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: MutableRefObject<HTMLElement | null>;
	viewport: viewportType;
}

export default function Contact({
	isSubpathOpen,
	setIsSubpathOpen,
	sectionRef,
	viewport,
}: ContactProps) {
	return (
		<>
			<Landing
				viewport={viewport}
				isSubpathOpen={isSubpathOpen}
				setIsSubpathOpen={setIsSubpathOpen}
				sectionRef={sectionRef}
				img={{ src: '/imgs/contact.jpg', alt: '' }}
				headerText='Reach Out'
				subheaderText='Lets create something great together. Shoot me an email at qcao.digital@gmail.com or click the button below to submit a contact form.'
				ctaText='Contact Me'
				ctaAction={() =>
					setTimeout(
						() =>
							sectionRef.current?.scrollBy({
								top: window.innerHeight,
								behavior: 'smooth',
							}),
						1000 //time for subpath open animation
					)
				}
				whiteImg
				noBoxShadow
			></Landing>
			<ContactForm />
		</>
	);
}
