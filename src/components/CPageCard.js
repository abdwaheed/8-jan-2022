import React from 'react'
import { Link } from 'react-router-dom'

export default function CPageCard(props) {
  return (
    <div class="card co">
      <img src={props.data.imgurl} class="card-img-top" alt="..." />
      <div class="card-body">
        <Link to={{
          pathname: props.href,
          state: {
            coursedata: props.data
          }
        }}>
          < h4 class="card-title pb-1">{props.data.title}</h4>
        </Link>
        <Link to={props.href} class="btn btn-primary">View Demo</Link>
      </div>
    </div >
  )
}
