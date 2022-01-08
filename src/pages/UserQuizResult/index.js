import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserLongbutton from '../../components/userLongbutton';

export default function UserQuizResult(props) {
  return (
    <>
      <Navbar />
      <Searchbar />

      <section class="quiz bg-white">
        <div class="verification-container my-5">

          <div class="card ban2">
            <h4 class="text-center  mb-0 py-4 text-white">Result For Current Quiz</h4>
            <div class="card-body " style={{ backgroundColor: '#d1d3d4' }}>
              <div class="row text-center">
                <div class="col-md-4">
                  <h4>Total</h4>
                  <h5>5</h5>
                </div>

                <div class="col-md-4">
                  <h4>Correct</h4>
                  <h5>0</h5>
                </div>

                <div class="col-md-4">
                  <h4>Percentage</h4>
                  <h5>0</h5>
                </div>
              </div>

              <h4 class="text-center bg-success mt-5 mb-2 py-3 text-white">Quiz Status</h4>






            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
