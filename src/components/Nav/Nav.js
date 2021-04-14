import React, {useState, useEffect} from 'react';
import './Nav.css';

import Avatar from "@material-ui/core/avatar";
import Logo from '../../assets/netflix_logo.png';

const Nav = () => {
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        }else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])
    return (
      <div className={`nav ${ show && 'nav__black'}`}>
        <div className="nav__contents">
          <img
            className="nav__logo"
            src={Logo}
            alt=""
          />
          <Avatar className="nav__avatar" />
        </div>
      </div>
    );
}

export default Nav;
