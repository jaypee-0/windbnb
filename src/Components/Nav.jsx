import React from 'react'
import logo from '../Assets/logo.png'
//import { useState } from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const Nav = () => {
    // const [show, setshow] = useState(false);
    // const handleClick = () => {
    //     setshow(true)
    // }

  return (
    <div>
        <nav className='container d-flex align-items-left align-items-md-center flex-column justify-content-between flex-md-row py-2 py-md-3'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
                <form className='d-flex mx-auto mt-3 mt-md-0 mx-md-0'> 
                    <input type="text" className='input1 py-2 py-md-3 pl-2' placeholder='Place'/>
                    <input type="text" className='input2 py-2 py-md-3 pl-2' placeholder='Add guests'/>
                    <button className="button py-2 py-md-3 px-3">{<FA icon="fa-search" />}</button>
                </form>

        </nav>
    </div>
  )
}

export default Nav