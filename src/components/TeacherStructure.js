import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

export default function TeacherStructure({ children }) {

  const location = useLocation()
  return (
    <>

      <section class="user-panel bg-white">
        <div class="dash-cover">
          <img src="./images/dashboard.PNG" alt="" class="w-100" />
        </div>


        <div class="dashboard-menu">
          <div class="container">
            <div class="col-md-9 offset-md-3">
              <ul>
                <li style={{ backgroundColor: location.pathname != '/teacherprofile' && location.pathname != '/teacherintendedlearners' && location.pathname != '/teacheruploadlecture' && location.pathname != '/teachercourselanding' && location.pathname != '/teachereditlecture' && location.pathname != '/teacherstudentsP1' && location.pathname != '/teacherstudentsP2' && location.pathname != '/teacherquiz' ? 'rgb(66, 112, 143)' : '' }}>
                  <Link to="/teachermainpage">My Dashboard</Link>
                </li>

                <li style={{ backgroundColor: location.pathname === '/teacherprofile' ? 'rgb(66, 112, 143)' : '' }}>
                  <Link to="/teacherprofile">My Profile</Link>
                </li>

                <li style={{
                  backgroundColor: location.pathname === '/teacherintendedlearners'
                    || location.pathname === '/teacheruploadlecture' || location.pathname === '/teachereditlecture' || location.pathname === '/teacherquiz' ? 'rgb(66, 112, 143)' : ''
                }}>
                  <Link to="/teacherintendedlearners">Intended Learners</Link>
                </li>

                <li style={{ backgroundColor: location.pathname === '/teachercourselanding' ? 'rgb(66, 112, 143)' : '' }}>
                  <Link to="/teachercourselanding">Course Landing</Link>
                </li>

                <li style={{ backgroundColor: location.pathname === '/teacherstudentsP1' || location.pathname === '/teacherstudentsP2' ? 'rgb(66, 112, 143)' : '' }}>
                  <Link to="/teacherstudentsP1">My Students</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {children}

    </>

  )
}
