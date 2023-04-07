import './landingpage/style.scss';
import LandingPage from './landingpage/LandingPage';
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/footer';
import Services from './landingpage/services/Services';
import ContactUs from './landingpage/ContactUs';
import Ourteam from './landingpage/ourteam/Ourteam';
import Job from './landingpage/Job';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import Testimonials from './landingpage/testimonials/Testimonials';
import Application from './Job/Application';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Application/> */}
     <LandingPage/>
     <Services/>
     <Ourteam/>
     <Job/>
     <Testimonials/>
     <ContactUs/>
     <Footer/>
    </div>
  );
}

export default App;
