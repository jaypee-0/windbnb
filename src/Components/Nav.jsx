import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import data from '../data/stays.json'
const Nav = () => { 
    
    const [showtop, setshowtop] = useState(false)
    const [showlocation, setshowlocation] = useState(false)
    const [showguests, setshowguests] = useState(false)
    const [increment, setincrement] = useState('')

    const handleTopLocate = () => {
        setshowtop(true)
        setshowlocation(true)  
        setshowguests(false)        
    }
    const handleTopGuest = () => {
        setshowtop(true)
        setshowguests(true)      
        setincrement( {
            // if (increment = 0, increment ++1 ) {
                
            // }
        })      
    }
    const locationlists = new Map(
        data.map((data) => [data.id, data.city])
      );
    const locations = [...new Set(locationlists)];
    const handleTopButt = () => setshowtop(true)
    const closeTop = () => {
        setshowtop(false)
        setshowlocation(false)
        setshowguests(false)
    }

  return (
    <div>
        <nav className='container-md position-relative'>
            <div className='d-flex flex-column align-items-left align-items-md-center justify-content-between flex-md-row py-2 py-md-3'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
                <form className={showtop ? 'openMenu active' : 'null'}>                 
                <div className='form d-flex mx-auto mt-3 mt-md-0 mx-md-0'>
                    {showtop ?
                        <select className='custom-select w-100 py-2 py-md-3 pl-2'><FA className='pr-3 index3' icon="fa-location-dot" />
                        <option style={{ padding: 20, border: 0 }} value='0'><FA className='ml-3' style={{color: 'red'}} icon="fa-location-dot" />Location</option>
                            {[...locations].map(([id, city]) => (
                            <option style={{ padding: 20, border: 0 }} className='py-2 border-0' key={id} value={id}><FA className='ml-3 index3' icon="fa-location-dot" />{city}</option>
                            ))}
                        </select> : 
                        <input type="text" onClick={handleTopLocate} className='w-100 input1 py-2 py-md-3 pl-2' placeholder='Place'/>
                    
                    }
                    <input type="text" onClick={handleTopGuest} value={showguests ? 'guests' : ''} className='w-100 input2 py-2 py-md-3 pl-2' placeholder='Add guests'/>
                    <button onClick={handleTopButt} className={showtop ? 'd-flex bigbutt my-auto' : 'button py-2 py-md-3 px-3'}>{<FA icon={showtop ? "fa-search pl-2 pr-4" : "fa-search"} />}{showtop ? 'Search' : ''}</button>
                </div> 
                </form>              
            </div>
            {showtop && <div className=''>
            <FA onClick={closeTop} className="position-absolute" icon={showtop ? 'fa-xmark' : 'd-none'} />
            </div>
            }
            <div className="d-flex flex-row navdeets col-12">
            {showlocation && <div className='col-6'>
                    
            </div>
            }
            {showguests && <div className='col-6'>
                <div>
                    <h3>Adults</h3>
                    <p>Ages 13 or above</p>
                    <div></div>
                </div>
                <div>
                    <h3>Children</h3>
                    <p>Ages 2 - 12</p>

                </div>
            </div>}
            </div>
            
            
        </nav>
    </div>
  )
}

export default Nav