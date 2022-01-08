import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherLecturesButton({ text, href, data }) {
  return (
    <>
      <div className="row d-flex justify-content-center text-dark my-3">
        <div className="col-md-4 text-center">
          <button class="p-2 w-100 bg-dark text-white">
            <Link to={{
              pathname: href,
              state: {
                courseData: data
              }
            }}
              class="text-dark text-decoration-none text-white ">
              {text}
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}
