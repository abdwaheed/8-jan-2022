import React from 'react'
import { Link } from 'react-router-dom'

export default function PcourseImages(props) {
  return (
    <div className="col-md-3">
      <figure className="course-pic">
        <Link to={{
          pathname: props.href,
          state: {
            coursedata: props.data
          }
        }}> <img src={props.data.imgurl} alt="" /> </Link>
      </figure>
    </div>
  )
}
