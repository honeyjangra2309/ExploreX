import React from 'react'

const SearchBar = ({searchItem,mode}) => {
  return (
       <form className={mode ? 'bg-light w-75 text-dark' : 'bg-dark w-75'}>
        <div className='py-2 d-flex align-items-center bg-light rounded px-3 w-sm-100'>
        <i class="fa fa-search" aria-hidden="true"></i>
         <input type="text" placeholder="Search..." 
         className={mode ? 'py-1 w-sm-100 form-control rounded border-0 bg-light shadow-none' : 'py-1 w-sm-100 form-control rounded border-0 bg-light shadow-none' } onChange={e => searchItem(e.target.value)} />
        </div>
      </form>
  )
}

export default SearchBar