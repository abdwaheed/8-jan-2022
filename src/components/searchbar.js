import React from 'react'

export default function Searchbar() {
  return (

    <div className="container-fluid  below-nav">
      <form className="search d-flex py-3">
        <input className="form-control me-2" type="search" placeholder="Search Course" aria-label="Search" />
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
    </div>

  )
}
