
import React, {useState} from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import {Link} from 'react-router-dom';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = (props) => {
    //declare state drawerIsOpen, setDrawerIsOpen permite modificar el state
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    //metodo handler abrir
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }

    //handler cerrar
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }


    return(
        <React.Fragment>
            {drawerIsOpen ? 
                (<Backdrop onClick={closeDrawerHandler}/>):null}
            {/*Aplicamos para vista Movil */}

            <SideDrawer show={drawerIsOpen}
                onClick={closeDrawerHandler}
            >
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>

            

            {/*Aplicamos para vista web */}
            <MainHeader>
                <button className="main-navigation__menu-btn"
                    onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks></NavLinks>
                </nav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;