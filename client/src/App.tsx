import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Dashboard from './components/Dasboard';
import Home from './components/Home';
import ProtedtedRouter from './components/ProtectedRouter';

function App() {

	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<ProtedtedRouter exact path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
