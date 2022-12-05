import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Hotel from './Hotel'


const Hotels = () => {
  const [hotels, setHotels] = useState([])

  useEffect (()=> {
      //get all hotels from the api
      //update all hotels in state
    axios.get('/api/v1/hotels.json')
    .then( resp => {
      setHotels(resp.data.data)
    })
    .catch( resp => console.log(resp))
  }, [hotels.length])

  const grid = hotels.map(item => {
    return (
    <Hotel
        key={item.attributes.name}
        attributes={item.attributes}
    />
    )
  })


  return (
    <div className="text-center max-w-screen-xl	mx-auto">
      <div className="p-28 text-2xl">
        <h1 className='text-6xl'>ONEST</h1>
        <h4>Honest, unbiased hotel reviews. Share your experience.</h4>
      </div>
      <div className="grid gap-4 grid-cols-4 grid-rows-3 wx-0 px-0">
        {grid}
      </div>
    </div>
  )
}

export default Hotels 