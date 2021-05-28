import React, { useEffect } from 'react';
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import { useState } from 'react';
const Header = () => {
    const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [scrolled,setScrolled]= useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 20 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      },[])
    let navbarClasses=['header-section'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }
    
    return (
        <header className={navbarClasses.join(" ")}>
            <div className="navbar">
            <div className="navbar-container">
                <div className="brand">
                    <Link to='/'>BookRoom</Link>
                </div>
                <nav className="nav">
                    <ul className={click? 'nav-menu' : 'nav-menu active'}>
                        <li >
                            <Link to='/category'>Category</Link>
                        </li>
                        <li >
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li >
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <button className='btn btn-info' as={Link} to='/membership'>Membership</button>
                    </ul>
                </nav>
                <div className="nav-icon" onClick={handleClick}>
                {
            click ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>
            }
          </div>
            </div>
            </div>
        </header>
    );
};

export default Header;