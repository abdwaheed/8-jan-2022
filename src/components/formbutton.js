import React from 'react'
import { Link } from 'react-router-dom'

export default function Formbutton({ showLink, href, text, ...rest }) {
  return (
    <div className="form-group text-center">
      <input  {...rest} />
      <br />
      {showLink ? <> <Link to={href}>{text}</Link> </> : <Link to={href}>{text}</Link>}
    </div>
  )
}
