
import './App.css';
import LandingPageComponent from './Pages/LandingPage';
import FirstPageComponent from './Components/FirstPage/FirstPage';
import HeaderComponent from './Components/Header/Header';
import FooterComponent from './Components/Footer/Footer';
import LandingPageNavigationBar from './Components/LandingPageNavigation/LandingPageNavigation';
import Footer2 from './Components/Footer2/Footer2';
import { Routes1 } from './Routes';

function App() {
  return (
    <Routes1/>
    // <div className="">
    //   <div>
    //     <HeaderComponent/>
    //   </div>
    //   <div>
    //     <LandingPageNavigationBar/>
    //   </div>
    //   <div>
    //     <FirstPageComponent/>
    //   </div>
    //   <div>
    //     <FooterComponent/>
    //   </div>
    //   <div >
    //     <Footer2/>
    //   </div>
    // </div>
  );
}

export default App;
