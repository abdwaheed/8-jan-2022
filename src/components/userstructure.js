import React from 'react'
import UserButton from './userbutton'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function UserStructure({ email, stddata, children, btnvalue, classname, isStudent, onClick }) {

  const location = useLocation()

  return (
    <>
      <section class="user-panel bg-light">
        <div class="dash-cover">
          <img src="./images/dashboard.PNG" alt="" class="w-100" />
        </div>



        <div class="dashboard-menu">
          <div class="container">
            <div class="col-md-9 offset-md-3">
              <ul>
                <li style={{
                  backgroundColor: location.pathname === '/userselectedcourses' ? 'rgb(66, 112, 143)' : ''
                }}>
                  <Link to="./userselectedcourses">My Dashboard</Link>
                </li>

                <li style={{ backgroundColor: location.pathname === '/userdashboard' || location.pathname === '/userdashboardedit' ? 'rgb(66, 112, 143)' : '' }} >
                  <Link to="./userdashboard">My Profile</Link>
                </li>

                <li style={{ backgroundColor: location.pathname === '/usercompletedcourses' ? 'rgb(66, 112, 143)' : '' }}>
                  <Link to="./usercompletedcourses">Completed Courses</Link>
                </li>

                <li style={{ backgroundColor: location.pathname === '/usernewcourse' ? 'rgb(66, 112, 143)' : '' }}>
                  <Link to="./usernewcourse">"Remaining"</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div class="dashboard-form">
          <div class="row">
            <div class="col-md-3">
              <div class="img-container mt-5">
                <img src="./images/dash-form-logo.jpg" alt="" class="w-100" />
              </div>

              <div class="logo-text">
                <ul class="text-center list-unstyled">
                  {/* <li>{stddata?.email}</li> */}
                  <li><h5>{email}</h5></li>
                </ul>
              </div>
            </div>

            <div class="col-md-9">
              <div class="table-container my-5">

                <div class="how pb-3">
                  {/* <table class="w-100"> */}
                  {/* <tbody> */}

                  {children}

                  {/* </tbody> */}
                  {/* </table> */}

                  {/* <div class="row edit-profile">
                    <a href="dashboard-edit.html" class="my-4"><input type="submit" class="btn btn-success p-2"
                      value="Edit Profile" /></a>
                  </div> */}

                  {/* {
                    isStudent ?
                      <UserButton onClick={onClick} href='./userdashboardedit' classname={classname} value={btnvalue} />
                      :
                      <></>
                  } */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
