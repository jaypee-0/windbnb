import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
const Nav = () => { 
    
    const [showtop, setshowtop] = useState(false)
    const handleTop = () => setshowtop(true)
    const closeTop = () => setshowtop(false)

  return (
    <div>
        <nav className='container-md position-relative'>
            <div className='d-flex flex-column align-items-left align-items-md-center justify-content-between flex-md-row py-2 py-md-3'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
                <form className={showtop ? 'openMenu active' : 'null'}> 
                
                <div className='form d-flex mx-auto mt-3 mt-md-0 mx-md-0'>
                    <input type="text" onClick={handleTop} className='w-100 input1 py-2 py-md-3 pl-2' placeholder='Place'/>
                    <input type="text" onClick={handleTop} className='w-100 input2 py-2 py-md-3 pl-2' placeholder='Add guests'/>
                    <button onClick={handleTop} className={showtop ? 'd-flex bigbutt my-auto' : 'button py-2 py-md-3 px-3'}>{<FA icon={showtop ? "fa-search white pl-2 pr-4" : "fa-search"} />}{showtop ? 'Search' : ''}</button>
                </div> 
                </form>              
            </div>
            {showtop && <div className=''>
            <FA onClick={closeTop} className="position-absolute" icon={showtop ? 'fa-xmark' : 'd-none'} />
            </div>
            }
        </nav>
    </div>
  )
}

export default Nav