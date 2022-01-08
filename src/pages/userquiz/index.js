import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserButton from '../../components/userbutton';
import UserLongbutton from '../../components/userLongbutton';

export default function UserQuiz(props) {
  return (
    <>
      <Navbar />
      <Searchbar />
      <section class="quiz bg-white">
        <div class="verification-container my-5">

          <div class="card ban2">
            <h3 class="text-center  mb-0 py-4 text-white">THE WAYS OF DOING EXCERCISE</h3>
            <div class="card-body" style={{ backgroundColor: '#d1d3d4' }}>
              <div class="quiz-text">


                <div>
                  <p>There are three options infront of every questions. Out of three options, there are two false and one
                    right. You have to choose the right options.</p>
                  <p>The total number of questions can be 5 or 10.</p>
                  <p>In every it is compulsory to score 60 percent marks.</p>
                  <p>The total number of questions can be 5 or 10.</p>
                  <p>If you fail in exercise then you have to give the test again.</p>
                  <p>If you fail in exam then try to clear the exam on that day again because then next day you wont be able
                    to get the next lesson.</p>
                  <p>Now come we and practice the lesson we did today.</p>
                </div>

                {/* <div class="mt-4">
                  <a href="./quiz-start.html"> <input type="submit" value="CLICK HERE TO START QUIZ"
                    class="btn btn-success form-control py-3" /></a>
                </div> */}

                <UserLongbutton href='./userquizstart' value='CLICK HERE TO START QUIZ' />


                {/* <!-- <div class="my-2" style="width: 90%; margin-left: auto; margin-right: auto;">
                  <a href="./quiz-start.html"> <input type="submit" value="CLICK HERE TO START QUIZ"
                    class="btn btn-success form-control py-3"></a>
                </div> --> */}
              </div>


              {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}
