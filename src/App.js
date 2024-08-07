import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Home/Profile";
import Navbar from "./components/Navbar/Navbar";
import UpButton from "./components/utilities/UpButton/UpButton";
import Projects from "./components/Projects/Projects";
import { LangProvider } from "./context/LangContext";

function App() {
	return (
		<LangProvider>
			{" "}
			<div className="App">
				<Navbar />
				<div className="my-body">
					<Profile />
					<UpButton />
					<AboutMe />
					<Resume />
					<Projects />
					<Footer />
				</div>
			</div>
		</LangProvider>
	);
}

export default App;
