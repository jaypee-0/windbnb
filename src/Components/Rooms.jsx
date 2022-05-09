import React, { useEffect, useState } from 'react'
import data from '../data/stays.json'

const Rooms = () => {

const [loading, setloading] = useState(true)
//     

  return (
    <div className='container'>
        <div className='d-flex my-3 justify-content-between'>
            <header>Stays in Finland</header>
            <p>12+ stays</p>
        </div>
        <div className='d-flex w-100 flex-wrap mx-auto'>
        {data.map(data => {
            return (
                <div key={data.id} className="col-6 col-md-4">
                    <img className='img-fluid mb-2 w-90' src={data.photo} alt="" />
                    <div className='d-flex w-90 justify-content-between'>
                        <div className='d-flex'>
                        <p className="type">{data.type} </p>
                        {data.beds && <p> . {data.beds} beds</p>}
                        </div>
                        <p className="rating">{data.rating}</p>
                    </div>                      
                    <p className="title">{data.title}</p>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Rooms