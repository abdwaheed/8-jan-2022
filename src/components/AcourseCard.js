import React from 'react'
import { Link } from 'react-router-dom'

export default function AcourseCard(props) {
  return (
    <div className="card co">
      <img src={props.data.imgurl} className="card-img-top" alt="..." />
      <div className="card-body">
        <Link to={{
          pathname: props.href,
          state: {
            coursedata: props.data
          }
        }}>
          <h4 className="card-title pb-1">{props.data.title}</h4>
        </Link>

        <p className="card-text">Classes started from coming friday(21 jun 2017)
        </p>
        <Link to={props.href} className="btn btn-primary">View Demo</Link>
        <Link to='/signup' className="btn btn-light border-dark">Registration</Link>
      </div>
    </div>
  )
}
