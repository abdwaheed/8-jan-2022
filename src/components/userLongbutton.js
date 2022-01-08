import React from 'react'
import { Link } from 'react-router-dom'

export default function UserLongbutton({ href, value, classname, style }) {
  return (
    <>

      <div class={`my-2 ${classname}`} style={style}>
        <Link to={href}> <input type="submit" value={value}
          class="btn btn-success form-control py-3" /></Link>
      </div>

    </>
  )
}
