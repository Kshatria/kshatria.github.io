import React from 'react';
import logo from '../static/logo.svg';
import './app.css';

const App = () => {
  return (
		<section className="app">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</section>
  );
}

export { App }
