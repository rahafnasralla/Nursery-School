import { Outlet } from 'react-router-dom';
import {useRef,useEffect} from 'react';
import Contact from './Contact/Contact';
import { Modal } from 'bootstrap';
import { GlobalContext } from './Context';
import Navbar from './landingpage/Navbar'
import Footer from './landingpage/footer';

export default function Layout() {

    const modal = useRef()
    useEffect(() => {
        modal.current = new Modal('#myModal')
    }, [])

    const showModal = () => {
        modal.current.show()
    }

    return (
            <GlobalContext.Provider value={{showModal}}>
            <div className="App">
                <Contact/>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
            </GlobalContext.Provider>
    )
}