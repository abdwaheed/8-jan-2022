import React from 'react'

export default function UserDiscussionTextarea({ onChange, register, placeholder }) {
  return (
    <>
      <textarea class="form-control py-3 ps-3"

        rows='6' type="textarea"
        {...register}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Search" />
    </>
  )
}
