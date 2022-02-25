import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Studio from "./components/Studio";

function App() {
return (
	<main>
<Router>
	<Navbar />
<Routes>
		<Route exact path="/" element={<Home/>}/>
    <Route exact path="/Home" element={<Home/>}/>
		<Route path='/Portofolio' element={<Portofolio/>} />
		<Route path='/Skills' element={<Skills/>} />
		<Route path='/Studio' element={<Studio/>} />
    <Route exact path="/Contact" element={<Contact/>}/>
    </Routes>
	</Router>
	</main>
);
}

export default App;
