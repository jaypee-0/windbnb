import React, { useEffect, useState } from 'react'
import logo from '../Assets/logo.png'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import data from '../data/stays.json'
import { useCallback } from 'react'

const Nav = () => {     
    const [showtop, setshowtop] = useState(false)
    const [showlocation, setshowlocation] = useState(false)
    const [showguests, setshowguests] = useState(false)
    const [incrementa, setincrementa] = useState(0)
    const [incrementb, setincrementb] = useState(0)
    const [incredecre, setincredecre] = useState(0)    

    const handleTopLocate = () => {
        setshowtop(true)
        setshowlocation(true)  
        setshowguests(false)        
    }
    const additiona = () => {
        setincrementa(count => count + 1);
    };
    const subtractiona = () => {
        if (incrementa > 0 ) {
            setincrementa(count => count - 1);
        }
    }
    const additionb = () => {
        setincrementb(count => count + 1);      
    };
    const subtractionb = () => {
        if (incrementb > 0 ) {
            setincrementb(count => count - 1);
        }
    }
    const handleTopGuest = () => {
        setshowtop(true)
        setshowguests(true)    
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
    const handleguests = useCallback(() => {
        setincredecre(incrementa + incrementb);
      }, [incrementa, incrementb])
    useEffect(() => {
      handleguests()
    }, [handleguests]);
     
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
                        <select className='custom-select w-100 py-1 py-md-3 pl-2'><FA className='pr-3 index3' icon="fa-location-dot" />
                        <option style={{ padding: 20, border: 0 }} value='0'><FA className='ml-3' style={{color: 'red'}} icon="fa-location-dot" />Location</option>
                            {[...locations].map(([id, city]) => (
                            <option style={{ padding: 20, border: 0 }} className='py-1 border-0' key={id} value={id}><FA className='ml-3 index3' icon="fa-location-dot" />{city}</option>
                            ))}
                        </select> : 
                        <input type="text" onClick={handleTopLocate} className='w-100 input1 py-2 py-md-3 pl-2' placeholder='Place'/>
                    
                    }
                    <input type="text" onClick={showguests ? '' : handleTopGuest} value={showguests ? `${incredecre}  guests` : ''} className='w-100 input2 py-2 py-md-3 pl-2' placeholder='Add guests'/>
                    <button onClick={handleTopButt} className={showtop ? 'd-flex bigbutt my-auto py-2 py-md-3' : 'button py-2 py-md-3 px-3'}>{<FA icon={showtop ? "fa-search pl-2 pr-4" : "fa-search"} />}{showtop ? 'Search' : ''}</button>
                </div> 
                </form>              
            </div>
            {showtop && <div className=''>
            <FA onClick={closeTop} className="position-absolute" icon={showtop ? 'fa-xmark' : 'd-none'} />
            </div>
            }
            <div className="d-flex flex-row navdeets justify-content-end col-11 col-md-12">
            {showlocation && <div className='col-6'>
                    
            </div>
            }
            {showguests && <div className='col-6'>
                <div className='showguests mt-2'>
                    <h4>Adults</h4>
                    <p>Ages 13 or above</p>
                    <div className='d-flex flex-row'>
                    <button onClick={subtractiona} className='buttons px-2'>-</button>
                    <p className='px-3 mb-0'>{incrementa}</p>
                    <button onClick={additiona} className='buttons'>+</button>
                    </div>
                </div>
                <div className='showguests mt-2'>
                    <h4>Children</h4>
                    <p>Ages 2 - 12</p>
                    <div className='d-flex flex-row'>
                    <button onClick={subtractionb} className='buttons px-2'>-</button>
                    <p className='px-3 mb-0'>{incrementb}</p>
                    <button onClick={additionb} className='buttons'>+</button></div>            
                </div>
            </div>}
            </div>
            
            
        </nav>
    </div>
  )
}

export default Nav