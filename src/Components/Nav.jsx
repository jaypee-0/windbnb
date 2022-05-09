import React from 'react'
import logo from '../Assets/logo.png'

const Nav = () => {
  return (
    <div>
        <nav className='container d-flex flex-column flex-md-row py-2 py-md-3'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <form> 
                    <input type="text" />
                </form>
            </div>

        </nav>
    </div>
  )
}

export default Nav