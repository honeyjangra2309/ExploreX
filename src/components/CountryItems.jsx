import React, { useEffect, useState } from 'react'
import CountryItem from './CountryItem';
import '../index.css'

const CountryItems = ({url,mode}) => {
    const [data,setData] =useState([]);
    const getData =(url) => {
        fetch(url).then((response)=> response.json()).then((result)=>{
            setData(result);
        })
    }
    useEffect(() =>{
        getData(url);
        
    },[url])
  return (
    <div className={mode ? 'custom_grid px-5 py-3 w-100' : 'custom_grid px-5 py-3 w-100 bg-dark'} >
       {
         data.map((countryData,index) => {
            return <div key={index}>
               <CountryItem population={countryData.population} name={countryData.name.common} capital={countryData.capital} image={countryData.flags.png} />
            </div>
         })
       } 
    </div>
  )
}

export default CountryItems