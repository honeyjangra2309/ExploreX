import React from 'react'
import { Link } from 'react-router-dom'

const CountryItem = ({capital,name,image,population}) => {
  return (
    <Link to={`/country/${name}`} className='text-decoration-none text-dark'>
    <div className='bg-light rounded cursor-pointer'>
        
        <img src={image} className='w-100 h-50 rounded-top' />
        <h2 className='mt-3 px-3 text-decoration-none'>{name}</h2>
        <p className='px-3'><strong>Capital :</strong> {capital}</p>
        <p className='px-3 pb-3'><strong>Population :</strong> {population.toLocaleString()}</p>
    </div>
    </Link>
  )
}

export default CountryItem