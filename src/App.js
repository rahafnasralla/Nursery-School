import './landingpage/style.scss';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements, Routes, BrowserRouter } from 'react-router-dom'
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import Layout from './Layout'
import LandingPage from './landingpage/LandingPage';
import Services from './landingpage/services/Services';
import Ourteam from './landingpage/ourteam/Ourteam';
import Job from './landingpage/Job';
import Testimonials from './landingpage/testimonials/Testimonials';
import ContactUs from './landingpage/ContactUs';
import NotFound from './NotFound/NotFound';
import Application from './Job/Application'
import MemoryGame from './games/MemoryGame';
import Xylophone from './games/Xylophone';

function App() {



  

  return(
    <BrowserRouter>
          <Routes  errorElement={<NotFound/>}>

<Route element={<Layout/>} errorElement={<NotFound/>}>
      <Route path={'/'} element={  
            <div>
                  <LandingPage/>
                  <Services/>
                  <Ourteam/>
                  <Job/>
                  <Testimonials/>
                  <ContactUs/>
            </div>
      }
      />
      <Route path={'/application'} element={  
            <Application/>
      }
      />

    </Route>

    <Route path={'/memorygame'} element={<MemoryGame/>}/>
    <Route path={'/xylophone'} element={<Xylophone/>}/>


    <Route path="*" element={<NotFound/>}></Route>

    </Routes>
    </BrowserRouter>
  )

}

export default App;
