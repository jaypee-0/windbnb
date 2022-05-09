import React from 'react'
import logo from '../Assets/logo.png'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const Nav = () => { 

  return (
    <div>
        <nav className='container'>
            <div className='d-flex flex-column align-items-left align-items-md-center justify-content-between flex-md-row py-2 py-md-3'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
                <form className='form d-flex mx-auto mt-3 mt-md-0 mx-md-0'> 
                    <input type="text" className='w-100 input1 py-2 py-md-3 pl-2' placeholder='Place'/>
                    <input type="text" className='w-100 input2 py-2 py-md-3 pl-2' placeholder='Add guests'/>
                    <button className="button py-2 py-md-3 px-3">{<FA icon="fa-search" />}</button>
                </form>               
            </div>
        </nav>
    </div>
  )
}

export default Nav