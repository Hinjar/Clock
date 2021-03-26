import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import './style.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {Timer} from "./components/Timer";
import {Settings} from "./components/Settings";

const App = () => {

	return (
		<BrowserRouter>
			<Navbar/>
			<div className="container pt-4">
				<Switch>
					<Route path={'/'} exact component={Timer}></Route>
					<Route path={'/settings'} exact component={Settings}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;

