import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hotel from './Hotel'
import Header from './Header'

import styled from 'styled-components'

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const Hotels= () => {
  const [hotels,setHotels] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/hotels.json')
    .then( resp => setHotels(resp.data.data))
    .catch( data => console.log('error', data))
  }, [])

  const grid = hotels.map( (hotel, index) => {
    const { name, image_url, slug, average_score } = hotel.attributes

    return (
      <Hotel 
        key={index}
        name={name}
        image_url={image_url}
        slug={slug}
        average_score={average_score}
      />
    )
  })

  return (
    <Home>
      <Header/>
      <Grid>{grid}</Grid>
    </Home>
  )
}

export default Hotels