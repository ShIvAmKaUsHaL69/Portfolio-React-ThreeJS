import React, { useState } from 'react'
import { navLinks } from '../constants';

const Navitems = () => {
    return(
        <ul className='nav-ul'>
            {navLinks.map((item) => (
                <li key={item.id} className='nav-li' >
                    <a href={item.href} className='nav-li_a'>{item.name}</a>
                </li>
            ))}
        </ul>
    )
}

export default function Navabr() {
    const [isOpen, setisOpen] = useState(false);
    const tooglemenu = () => {
        setisOpen((previsopen) => !previsopen)
    }
  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
                <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                ShIvAmKaUsHaL
                </a>
                <button onClick={tooglemenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toogle menu'>
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt='toogle' className='w-6 h-6'/>
                </button>
                <nav className='sm:flex hidden'>
                    <Navitems/>

                </nav>

            </div>

        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen': 'max-h-0'}`}>
            <nav className='p-5'>
                <Navitems />
            </nav>

        </div>
      
    </header>
  )
}
