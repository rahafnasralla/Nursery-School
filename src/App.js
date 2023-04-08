import './landingpage/style.scss';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
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

function App() {

  const router = createBrowserRouter(
   createRoutesFromElements(
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

   )
  )

  return(
    <RouterProvider router={router}/>
  )

}

export default App;
