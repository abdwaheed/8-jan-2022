import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import Comments from '../../components/comments'
// import Textbox from '../../components/textbox'

export default function Onlineverification(props) {
  return (
    <>
      <Navbar />
      <Searchbar />

      {/* <!--   ---   VERIFICATION SECTION  ----    --> */}

      <section class="verification bg-white">
        <div class="verification-container my-5">
          <div class="ban1 p-3">
            <h3 class="text-white">VERIFICATION OF CERTIFICATE</h3>
          </div>
          <div class="card ban1">
            <h2 class="text-center mb-0 py-3 text-white">CERTIFICATE VERIFICATION</h2>
            <div class="card-body">

              <p>Please enter Roll Number to verify the Certificate.</p>
              <div class="search-box">
                <div class="row">
                  <div class="col-md-2">
                    <h5 class="pt-2">Roll-</h5>
                  </div>
                  <div class="col-md-10">
                    <input type="text" placeholder="Enter Roll Number" class="w-100 py-2" />
                  </div>
                </div>
              </div>

              <div class="search-btn">
                <input type="submit" value="Search" class="btn py-2 text-white form-control" />
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* <!--   ---  COMMENTS  ----    --> */}

      {/* <section class="comments">
        <div class="comment-container">
          <div class="row">
            <div class="col-md-2">
              <img src="./images/bulb1.png" alt="" class="pt-5 px-3 w-90" />
            </div>

            <div class="col-md-4">
              <h4 class="pt-5 px-5">AN INVESTMENT IN KNOWLEDGE PAYS THE BEST INTEREST.</h4>
            </div>

            <div class="col-md-5">
              <img src="./assets/images/user-comment.PNG" alt="" class="pt-5 px-3 w-100" />
            </div>

          </div>
        </div>
      </section> */}

      <Comments />


      <Footer />
    </>
  )
}
