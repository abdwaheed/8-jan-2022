import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'
import { Link } from 'react-router-dom'

export default function TeacherNewCourseP2(props) {
  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="text-center course-p2">
          <h2 class="mt-5 mb-4">How about a working title?</h2>
          <p class="mb-5">It's ok if you can't think of a good title now. You can change it later.
          </p>

          <div class="w-50 mx-auto">
            <input class="form-control py-3 ps-4" type="search" placeholder="e.g. Learn Python or React from Scratch"
              aria-label="Search" />
          </div>
          <div class="py-3">
            <button class="btn btn-dark p-2" type="submit"><Link class="text-decoration-none text-white"
              to="/teacherintendedlearners">Create Course</Link></button>
          </div>
        </div>

      </TeacherStructure>

      <Footer />
    </>
  )
}
