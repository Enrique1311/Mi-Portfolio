import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Profile from './components/Home/Profile';
import Navbar from './components/Navbar/Navbar';
import UpButton from './components/utilities/UpButton/UpButton';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="my-body">
        <Profile/>
        <UpButton/>
        <AboutMe/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
