import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';

const Navbar = () => {

    const [active, setActive] = useState('navBar')

    // Function to toggle navBar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

    //Function to remove navBar
    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <selection className='navBarSection'>
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                       

                        <li className="navItem">
                            <a href="#" className="navLink">Chuyến Bay</a>
                        </li>

                    
                        <li className="navItem">
                            <a href="#" className="navLink">Địa Điểm</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Tin Tức</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Giới Thiệu</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Liên Hệ</a>
                        </li>
                        
                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>

            </header>
        </selection>
    )
}

export default Navbar