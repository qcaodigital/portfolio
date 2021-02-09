import Home from '../Home/';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Nav from '../Nav/';
import NavMarker from '../Nav/NavMarker/';
import useViewport, { viewportSize } from './../hooks/useViewport';

export default function App() {
	const viewport: viewportSize = useViewport();
	return (
		<main className={styles.App}>
			<div className={styles.background} />
			<Nav />
			<NavMarker />
			<Switch>
				<Route
					exact
					path='/'
					render={() => <Home viewport={viewport} />}
				/>
			</Switch>
		</main>
	);
}
