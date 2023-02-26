import {  HiMenuAlt4  } from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons';
import { useState } from 'react';
import logo from '../assets/images/logoMain.png';

const NavbarItem = ({ title, classProps  }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='w-full items-center p-4 md:justify-center'>
            <div className='flex-intial justify-center items-center md:flex-[0.5]'>
                <img 
                src={logo}
                alt='Zack darnell logo'
                className='w-32 cursor-pointer'
                />
            </div>
            <ul className='text-white list-none flex-row justify-between items-center flex-intial md:flex'>
                {["Home", "Projects", "About", "Contact"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
            </ul>
            <div className='flex relative'>

            </div>
        </nav>
    )



}