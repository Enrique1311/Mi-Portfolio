import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import Profile from './components/Home/Profile';
import Navbar from './components/Navbar/Navbar';
import UpButton from './components/utilities/UpButton/UpButton';
import Proyects from './components/Proyects/Proyects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="my-body">
        <Profile/>
        <UpButton/>
        <AboutMe/>
        <Resume/>
        <Proyects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
