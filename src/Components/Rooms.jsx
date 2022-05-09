import React from 'react'
import data from '../data/stays.json'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const Rooms = () => {  

  return (
    <div className='container'>
        <div className='d-flex my-3 justify-content-between'>
            <header className='fs-2 fw-bolder d-gray'>Stays in Finland</header>
            <p className='mr-5 gray-3 f14'>14+ stays</p>
        </div>
        <div className='d-flex w-100 flex-wrap mx-auto'>
        {data.map(data => {
            return (
                <div key={data.id} className="col-6 col-md-4 carding">
                    <img className='img-fluid mb-2 w-90' src={data.photo} alt="" />
                    <div className='d-flex w-90 justify-content-between'>
                        <div className='d-flex align-items-center'>
                            {data.superHost && <p className='super-post mr-2 py-1 fw-bold '>SUPER HOST</p>}
                            <p className="type">{data.type} </p>
                            {data.beds && <p className='gray-3 fw-bold beds'><span className='d-none d-md-inline mr-1'>.</span> {data.beds} beds</p>}
                        </div>
                        <p className="rating"><FA className='mr-1' icon="fa-star" />{data.rating}</p>
                    </div>                      
                    <p className="title fw-bold w-90">{data.title}</p>
                </div>  
            )
        })}
        </div>
    </div>
  )
}

export default Rooms