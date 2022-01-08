import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    < footer className="page-footer font-small" >


      <div className="container-fluid text-md-left py-5">


        <div className="footer">

          <div className="row">
            <div className="col-md-5 mb-md-0 mb-3 px-5">

              <h5 className="text-uppercase mb-4">GET IN TOUCH </h5>
              <p>Learn at the comfort of yourn own home!</p>
              <p>Phone: +92 336 326552 </p>
              <p>Email: whs@gmail.com</p>

            </div>




            <div className="col-md-3 mb-md-0 mb-3 px-5">


              <h5 className="text-uppercase mb-4">Top Courses</h5>

              <ul className="list-unstyled footer-middle text-primary">

                <li>
                  <Link to="/courses">All Courses</Link>
                </li>
                <li>
                  <Link to="/verification">Online Verification</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>

            </div>


            <div className="col-md-3 mb-md-0 mb-3 px-5">
              <h5 className="text-uppercase mb-4">SOCIAL MEDIA</h5>

              <ul className="list-unstyled footer-last">
                <li>
                  <a href="/facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/gmail">
                    <ion-icon name="logo-google"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="/twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>


      <div className="footer-copyright text-center py-3 text-white">2021 © Copyright:
        <a href="index.html" className="text-warning"> All rights reserved</a>
      </div>

    </footer >
  )
}
