import { Outlet } from 'react-router-dom';
import NavBar from './Navbar'
import {useRef,useEffect} from 'react';
import Contact from './Contact/Contact';
import { Modal } from 'bootstrap';
import { GlobalContext } from '../Utils/Context';


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
            <div className="">
                <Contact/>
                <NavBar />
                <Outlet />
            </div>
            </GlobalContext.Provider>
    )
}