import React from 'react'
export default function Textbox({ register, ...rest }) {
  // console.log({ rest })
  return (
    <div className="form-group mt-3">
      <input className="form-control"  {...register} {...rest} />
    </div>
  )
}
