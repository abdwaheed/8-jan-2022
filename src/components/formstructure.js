import React from 'react'

export default function Formstructure({ children, style }) {
  return (

    <div className={` form bg-light ${style} `} >
      {children}
    </div >
  )
}
