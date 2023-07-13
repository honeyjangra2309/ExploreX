import React, { useState } from 'react'

const Header = ({mode,changeMode}) => {
  
  return (
    <div className={ mode ? 'w-100 d-flex align-items-center justify-content-between px-5 py-3 bg-light text-dark' : 'w-100 d-flex align-items-center justify-content-between px-5 py-3 bg-dark text-white'}>
        <div>
           <h3>ExploreX</h3>
        </div>
        <div>
            { mode ? <h3 onClick={changeMode} className='cursor-pointer'> <i className="fa-solid fa-sun"></i> Light Theme</h3>  : <h3 onClick={changeMode} className='cursor-pointer'> <i className="fa-solid fa-moon"></i> Dark Theme</h3>}
        </div>
    </div>
  )
}

export default Header