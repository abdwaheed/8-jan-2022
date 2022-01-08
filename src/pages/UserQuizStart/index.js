import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserLongbutton from '../../components/userLongbutton';

export default function UserQuizStart(props) {
  return (
    <>
      <Navbar />
      <Searchbar />
      <section class="quiz bg-white">
        <div class="verification-container my-5">

          <div class="card ban2">
            <h4 class="text-center  mb-0 py-4 text-white"><span>0</span> CORRECT ANSWERS</h4>
            <div class="card-body" style={{ backgroundColor: '#d1d3d4' }}>
              <div class="quiz-question">

                <div class="quest py-1">
                  <h4 class="text-center">QUESTION 1 OF 5</h4>
                </div>

                <div class="quest">
                  <p class="mb-0 pb-1 pt-2">1 and 0 is known as __________ Number?</p>
                </div>

                <div class="quest">
                  <div class="row pt-4 pb-3">
                    <div class="col-md-2 col-sm-2 col-xs-2">
                      <input type="radio" name="opt" />
                    </div>

                    <div class="col-md-10 col-sm-10 col-xs-10">
                      (A) Decimal
                    </div>
                  </div>
                </div>

                <div class="quest">
                  <div class="row pt-4 pb-3">
                    <div class="col-md-2 col-sm-2 col-xs-2">
                      <input type="radio" name="opt" />
                    </div>

                    <div class="col-md-10 col-sm-10 col-xs-10">
                      (B) Binary
                    </div>
                  </div>
                </div>


                <div class="quest">
                  <div class="row pt-4 pb-3">
                    <div class="col-md-2 col-sm-2 col-xs-2">
                      <input type="radio" name="opt" />
                    </div>

                    <div class="col-md-10 col-sm-10 col-xs-10">
                      (C) Digital
                    </div>
                  </div>
                </div>


                <div class="quest">
                  <div class="row pt-4 pb-3">
                    <div class="col-md-2 col-sm-2 col-xs-2">
                      <input type="radio" name="opt" />
                    </div>

                    <div class="col-md-10 col-sm-10 col-xs-10">
                      (D) None of these
                    </div>
                  </div>
                </div>

                {/* <div class="mt-4 mb-4">
                  <a href="quiz-result.html"><input type="submit" value="NEXT"
                    class="btn btn-success form-control py-3" /></a>
                </div> */}

                <UserLongbutton href='./userquizresult' value='Next' classname='mt-4' />

              </div>



            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
