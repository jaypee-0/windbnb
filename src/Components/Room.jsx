import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'


const Room = () => {
  const [available, setavailable] = useState([])
  const {country} = useParams()

  const fetchCountry = async () => {
    const res = await fetch('../data/stays.json')
    const data = await res.json()
    setavailable(data)
  }

  useEffect(() => {
    fetchCountry()
  },[country])

  return (
    <div>
      {available.filter(data => {
        return (
          <div key={data.id} className="col-6 col-md-4 carding">
                    <img className='img-fluid mb-2 w-90' src={data.photo} alt="" />
                    <div className='d-flex w-90 justify-content-between'>
                        <div className='d-flex align-items-center'>
                            {data.superHost && <p className='super-post mr-2 py-1 fw-bold '>SUPER HOST</p>}
                            <p className="type">{data.type} </p>
                            {data.beds && <p className='gray-3 fw-bold beds text-center text-md-left'><span className='d-none d-md-inline mr-1'>.</span> {data.beds} beds</p>}
                        </div>
                        <p className="rating"><FA className='mr-1' icon="fa-star" />{data.rating}</p>
                    </div>                      
                    <p className="title fw-bold w-90">{data.title}</p>
                </div>
        )
      })}
    </div>
  )
}

export default Room