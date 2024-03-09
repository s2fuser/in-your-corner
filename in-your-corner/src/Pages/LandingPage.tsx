import HeaderComponent from "../Components/Header/Header"
import FooterComponent from "../Components/Footer/Footer"
import NavigationBarComponent from "../Components/NavigationBar/NavigationBar"

const LandingPageComponet = () => {
    return (
        <div>
            <div>
                <HeaderComponent/>
            </div>
            <div>
                <FooterComponent/>
            </div>
            <div>
                <NavigationBarComponent/>
            </div>
        </div>
    )
}

export default LandingPageComponet