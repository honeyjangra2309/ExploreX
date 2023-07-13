import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetail = ({mode}) => {
  const { countryname } = useParams();
  const [data, setData] = useState({});

  const getData = async (url) => {
    await fetch(`https://restcountries.com/v3.1/name/${url}?fullText=true`)
      .then((response) => response.json())
      .then((result) => {
        setData(result[0]);
      });
  };

  useEffect(() => {
    getData(countryname);
  }, [countryname]);

  return (
    <div className={mode ? 'bg-white vh-100' : 'bg-dark text-white vh-100'}>
      <div className='display-4'>
        <Link to='/'>
          <button className={mode ? 'btn btn-dark mx-5' : 'btn btn-light mx-5'}>Back</button>
        </Link>
      </div>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-center px-5 py-5'>
        <div className='w-50 rounded'>
          <img src={data.flags?.png} alt='' className='rounded w-75' />
        </div>
        <div className=''>
          <h1>{data.name?.common}</h1>
          <p>
            <strong>Capital:</strong> {data.capital}
          </p>
          <p>
            <strong>Population:</strong> {data.population?.toLocaleString()}
          </p>
          <p>
            <strong>Area:</strong> {data.area?.toLocaleString()}
          </p>
          <p>
            <strong>Continent:</strong> {data.continents?.[0]}
          </p>
          <p>
            <strong>TimeZone:</strong> {data.timezones?.[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
