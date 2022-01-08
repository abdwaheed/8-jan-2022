import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Comments from '../../components/comments'
import Footer from '../../components/footer'

export default function Aboutus(props) {
  return (
    <>
      <Navbar />
      <Searchbar />

      <section>
        <div class="aboutus-container text-center">
          <div class="row my-5">
            <h1>About <span class="word-color">Us</span></h1>
            <p>I myself belong from a rural area. When I entered practical life 10 years back, I faced hardships through out
              my career. To attain my goal I travelled to Islamabad, Abbottabad and even Lahore in order to improve my
              skills
              and to become a useful citizen. It was then that a mission struck my mind that I will endeavour for a platform
              from where people from all over the world will visit and quench their thirst for knowledge from expert
              teachers
              and lecturers on spot and fully free of cost. The plus point is that here the medium of knowledge is Urdu so
              that our students can fully understand what they are being taught.</p>
            <p>It is a welfare project whose purpose is to educate common people practically and theoretically at large
              especially</p>
            <ul class="list-unstyled">
              <li>To needy people</li>
              <li>People from rural areas</li>
              <li>Females who are not granted permission to enhance their education or cannot travel to other cities due to
                cultural restraints.</li>
              <li>To those degree holders who have acquired theoretical education but cannot flurish practically.</li>
              <li>Those students who pay huge fee in IT institutes but are unable to work on ground.</li>
              <li>This data has been collected time after time through our students feed back. In short this internet free
                package provides a dedicated solution for a reliable and secure future. It is a flexable modular platform,
                which allows an easy future expansion.</li>
            </ul>
            <p>The modules which our expert voluntier offer are</p>
            <ul class="list-unstyled">
              <li>MS Office 2007-10</li>
              <li>Autocad 2006-07</li>
              <li>HTML DW CSS</li>
              <li>PHP My SQL</li>
              <li>Google Sketchup</li>
              <li>Coral 9-12</li>
              <li>Adobe PS CS</li>
              <li>Inpage Urdu</li>
              <li>Safty Officer</li>
              <li>ICT+Hard Ware</li>
              <li>MOS DOS</li>
              <li>Networking</li>
              <li>Inter Net</li>
              <li>C++</li>
              <li>Java skripting</li>
              <li>Web marketing & Online Bussiness</li>
            </ul>
            <p>Currently our students strength has been exeeded up to 10000 from all over the world. They are from Pakistan,
              USA,UK, Saudi Arabia, Dubai, India, Bangla Desh. In short where ever Urdu is understood , students take
              regular classes from this website. It is expanding day by day and in very short time of 2- 3 years has become
              Pakistan’s first and biggest on line free educating network.</p>
            <p>We are providing 12 hour live helpline through which our experts fix the students issues through e-mail and
              telephonic conversation.</p>
            <p>We have developed a web site where users</p>
            <ul class="list-unstyled">
              <li>Rergister themselves</li>
              <li>Fill an account of valid academic information</li>
              <li>Log in to their favourite course</li>
              <li>Listen and attend their daily lesson</li>
              <li>After each video lecture they do their MCQs</li>
              <li>For proceeding to next lesson on the next day they have to pass the MCQs test of the current lesson.
              </li>
              <li>All this database is handled very carefully by our experts.</li>
              <li>MS Office 2007-10</li>
              <li>Autocad 2006-07</li>
            </ul>
            <p>This net work is flourishing day by day and is becoming famous and familiar to people all over the world. The
              need of the day is that students demand an affliation of this net work services with some authorized
              govermental organization so that their certificates are authentic and can be verified.</p>
            <p>Insha Allah in near future you will be proud of this organization for its dedication and hard work. I hope
              our request will be entertained and fulfilled at its earliest.</p>
            <p>For any furher information and inquiry regarding this project, following number can be dialed</p>
            <ul class="list-unstyled">
              <li>Cell # <strong styles="color:#FF0000;">0092 0336 155 7066</strong></li>
              <li>E-mail : whs@gmail.com</li>
              <li>Website : www.whs.netlify.app</li>
              <li>Thank you</li>
            </ul>
          </div>
        </div>
      </section>


      {/* <!---  COMMENTS  ---> */}

      {/* <section class="comments">
        <div class="comment-container">
          <div class="row">
            <div class="col-md-2">
              <img src="./assets/images/bulb1.png" alt="" class="pt-5 px-3 w-90" />
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
