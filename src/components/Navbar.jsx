import React, { useEffect, useState } from 'react';
import  '../App.css';
import Icon from '../assets/Icon.png';
import { Link } from 'react-scroll';
import { FaXmark , FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // This one will add the scroll effect on the navbar, where it blends on scroll
    useEffect(() => { 
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })

    // navitems array
    const navItems = [
        {link: "S1", path: "s1"},
        {link: "S2", path: "s2"},
        {link: "S3", path: "s3"},
        {link: "S4", path: "s4"}
    ]
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-8 ${ isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : "" }`}>
                <div className='max-w-screen-2xl mx-auto flex justify-between items-center text-base gap-10'>
                    <a href='' className='text-2xl font-semibold flex items-center space-x-3'><img src={Icon} alt='' className='w-10 inline-block items-center'/></a>
                
                    {/* nav items for large devices */}
                    <ul className='md:flex gap-10 hidden'>
                        {
                            navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className={`block cursor-pointer ${isSticky ? "text-neutralDGrey" : "text-white"} hover:text-slate-400 first:font-medium`}>{link}</Link>)
                        }
                    </ul>

                    {/* menu btn for mobile devices */}
                    <div className='md:hidden'>
                        <button 
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500 '>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
                            }
                        </button>
                    </div>
                </div>

                {/* nav items for mobile devices */}
                <div className={`w-full space-y-4 px-4 mt-16 py-7 bg-black ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" }`}>
                    {
                        navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-slate-400 first:font-medium'>{link}</Link>)
                    }   
                </div>
            </nav>

        </header>
    )
}

export default Navbar;