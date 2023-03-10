import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLink } from './constant'

export default function Header() {

    const [toggle, setToggle] = useState(false)
    const toggleMenu = () => setToggle(prev => !prev);

  return (
    <div className='bg-myteal justify-between flex'>
        <div className="logo">Logo</div>
        <div className="flex">
            <div className={`${toggle ? 'hidden' : 'flex'}`}>
                {
                    navLink.map((nav)=>(
                    <div className="border mx-4 p-1">
                        <Link to={nav.path}>{nav.title}</Link>
                    </div>
                    ))
                }
            </div>
            <div  onClick={toggleMenu} className=" cursor-pointer">x</div>
        </div>
    </div>
  )
}
