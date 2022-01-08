import React from 'react'

export default function Homedesign({ one, two, three, four }) {
  return (
    <div className="abc mb-5">

      <div className="hi mx-2">
        <main>
          <span className="div1 bg-primary justify-content-center pt-3 text-center">{one}</span>
          <span className="div1 bg-secondary justify-content-center text-center">{two}</span>
        </main>
      </div>

      <div className="total-user  mx-2 mt-4">
        <a href="#" className="text-decoration-none">
          <span>
            <h5 className="my-3">{three}</h5>
          </span>
        </a>
        <span>{four}</span>
      </div>
    </div>
  )
}
