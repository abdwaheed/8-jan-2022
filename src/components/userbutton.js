import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function UserButton({ href, classname, value, onClick }) {
  return (
    <>
      <div class={`row edit-profile ${classname}`}>
        <Link to={href}
          class="my-4"><input type="submit" class="btn btn-success p-2" onClick={onClick}
            value={value} />
        </Link>
      </div>
    </>
  )
}
