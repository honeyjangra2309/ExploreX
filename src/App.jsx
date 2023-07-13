import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import RegionFilter from './components/RegionFilter'
import CountryItems from './components/CountryItems'
import CountryDetail from './components/CountryDetail'

function App() {
  const [mode,setMode] =useState(true);
    const changeMode =() => {
        setMode(!mode);
    }
  const [url,setUrl] = useState("https://restcountries.com/v3.1/all")
  const searchCountry =(searchItem) => {
    console.log(searchItem);
    setUrl(`https://restcountries.com/v3.1/name/${searchItem}`)
  }
  return (
    <>
    <Router>
      <Header mode={mode} changeMode={changeMode} />
      <Routes>
        <Route path='/' element={
          <>
          <div className={mode ? 'bg-white d-flex flex-column w-sm-100 px-5 py-3 flex-md-row justify-content-between align-items-center' : 'bg-dark d-flex flex-column w-sm-100 px-5 py-3 flex-md-row justify-content-between align-items-center'}>
           <SearchBar searchItem={searchCountry} mode={mode} />
          </div>
          <CountryItems url={url} mode={mode} />
          </>
        } />
        <Route path='/country/:countryname' element={<CountryDetail mode={mode} /> } />
      </Routes>
      </Router>
    </>
  )
}

export default App
