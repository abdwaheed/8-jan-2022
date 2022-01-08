import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'

export default function TeacherCourseLanding(props) {
  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="intended-learners my-5">
          <div class="dog mb-5">
            <h3 class="py-4 px-5">Course Landing page</h3>
          </div>


          <label for="" class="intend-lrn-search mb-1">Course title</label>
          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search"
              placeholder="Example: Define the roles and reponsibilities of a project manager" aria-label="Search" />
          </div>

          <label for="" class="intend-lrn-search mb-1">Course Subtitle</label>
          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search"
              placeholder="Example: Define the roles and reponsibilities of a project manager" aria-label="Search" />
          </div>

          <label for="" class="intend-lrn-search mb-1">Course Description</label>
          <div class="intend-lrn-search mb-3">
            <textarea rows="4" class="form-control py-3 ps-3" placeholder="Enter course description"></textarea>
          </div>

          <label for="" class="intend-lrn-search mb-1">What is primarily taught in your course?</label>
          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Eg: Landscape Photography" aria-label="Search" />
          </div>

          <label for="" class="intend-lrn-search mt-1 mb-1">Course Image</label>
          <div class="course-landing-imgs">
            <div class="row">

              <div class="col-md-6">
                <img class="w-100" src="./images/avail4.jpg" alt="" />
              </div>

              <div class="col-md-6">
                <p>Upload your course image here. It must meet our course image quality standards to be accepted. Important
                  guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
                </p>
                <input class="mt-2" type="file" />
              </div>

            </div>
          </div>

          <label for="" class="intend-lrn-search mb-1 mt-3">Promotional Video</label>
          <div class="course-landing-imgs mb-4">
            <div class="row">

              <div class="col-md-6">
                <img class="w-100" src="./images/avail3.jpg" alt="" />
              </div>

              <div class="col-md-6">
                <p>Upload your course image here. It must meet our course image quality standards to be accepted. Important
                  guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
                </p>
                <input class="mt-2" type="file" />
              </div>

            </div>
          </div>
          {/* <!-- FOR SAVE BUTTON --> */}

          <div class="intend-lrn-search mb-5 py-3">
            <button class="btn btn-dark w-50 p-2" type="submit"><a class="text-decoration-none text-white"
              href="./intender-learners.html">Save</a></button>
          </div>

        </div>
      </TeacherStructure>


    </>
  )
}
