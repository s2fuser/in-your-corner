import HeaderComponent from "../Components/Header/Header"
import FooterComponent from "../Components/Footer/Footer"
import NavigationBarComponent from "../Components/NavigationBar/NavigationBar"
import FirstPageComponent from "../Components/FirstPage/FirstPage"
import Footer2 from "../Components/Footer2/Footer2"
import LandingPageNavigationBar from "../Components/LandingPageNavigation/LandingPageNavigation"


const LandingPageComponet = () => {
    return (
        <div className="">
            <div>
                <HeaderComponent/>
            </div>
            {/* <div>
                <LandingPageNavigationBar/>
            </div> */}
            <div>
                <FirstPageComponent/>
            </div>
        </div>
    )
}

export default LandingPageComponet