
import './App.css';
import Header from './Components/Header/Header';
import Mainheading from './Components/Mainheading/Mainheading';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Movierow1 from './Components/Moviesimage/Movierow1';
import Movierow2 from './Components/Moviesimage/Movierow2';
import Movierow3 from './Components/Moviesimage/Movierow3';
import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer2/Footer2';

function App() {
  return (
    <div className=""> 
    <Header/>
    <NavigationBar/>
    <Mainheading/>
    <Movierow1/>
    <Movierow2/>
    <Movierow3/>
    <Footer/>
    <Footer2/>

    </div>
  );
}

export default App;
