import Footer2 from "../../Components/Footer2/Footer2";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavigationBar/NavigationBar";
import FooterComponent from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="h-[50vh]">Contact Page</div>
      <div>
        <FooterComponent />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Contact;
