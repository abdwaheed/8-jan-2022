import React from 'react'
import { Link } from 'react-router-dom'

export default function CtitleDetails(props) {
  return (
    <>
      <div class="ban2  text-white">
        <div class="row">
          <div class="col-md-8 py-3">
            <h3 class="text-white text-center">{props.title}</h3>
          </div>
          <div class="col-md-4 pt-2 text-dark text-center bg-white text-center"
            styles="display:flex; align-items:center; justify-content:center;">

            <button class="btn btn-danger py-3 px-4"><Link to='/marketjobs' class="text-decoration-none text-white">MARKET
              JOBS</Link></button>
          </div>
        </div>
      </div>

      <div class="ban2 p-4">
        <h4 class="text-white course-landing-imgs mb-3">What will you learn</h4>

        <div class="course-landing-imgs text-white">
          <div class="row mb-2">

            <div class="col-md-6">
              <li>html5</li>
            </div>
            <div class="col-md-6">
              <li>css</li>
            </div>

          </div>

          <div class="row">

            <div class="col-md-6">
              <li>js</li>
            </div>
            <div class="col-md-6">
              <li>etc</li>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}
