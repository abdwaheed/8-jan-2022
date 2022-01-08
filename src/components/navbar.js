import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useLocation, useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import firebase from "firebase/app";


export default function Navbar() {

  const history = useHistory();

  const location = useLocation()


  // FOR AUTHENTICATION
  const auth = firebase.auth();
  // FOR AUTHENTICATION



  // AUTH STATE CHECK

  const [login, setLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user);
        // console.log('user logged in as:', user);
        setLogin(true);
        // setauth(firebase.auth());
      }
      else {
        // console.log('user logged out');
        setLogin(false);
        // setauth(null);
      }
    })
  }, [])

  // AUTH STATE CHECK




  // SIGNOUT FUNCTION

  const signout = (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
      console.log("logout successfull")
      history.push('/');

    }).catch((error) => {
      console.log(error);
    });

  }

  // SIGNOUT FUNCTION

  // console.log(location.state)

  return (
    <header>

      <nav className="navbar navbar-expand-lg fixed-top py-3 navbar-light bg-light">
        <div className="container">
          <div>

            <Link className="navbar-brand" to="/">E-Learning</Link>
          </div>

          <div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">


              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/' ? 'active' : <></>} `} to='/'>Home</Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/courses' ? 'active'
                    : <></>} `} to='/courses'>Courses</Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/verification' ? 'active' : <></>} `} to="/verification">Online Verification</Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/about' ? 'active'
                    : <></>} `} to="/about">About Us</Link>
                </li>

                <li className="nav-item pe-4">
                  <Link className={`nav-link ${location.pathname === '/contactus' ? 'active'
                    : <></>} `} to="/contactus">Contact Us</Link>
                </li>


                <li className="my-1 mx-1"><Link to="/signin" className="ss"><input type="button" className="btn-success p-0 px-3"
                  onClick={login ? signout : ''}
                  value={login ? "logout" : "login"} /></Link>
                </li>
                <li className="my-1 ">
                  <Link to={login ? '/userdashboard' : "/signup"}
                    className="ll">
                    <input type="button" className="ll  p-0  px-3"
                      value={login ? auth.currentUser?.email : "signup as teacher"} />
                  </Link>
                </li>
                <li className="my-1 ms-3 "><Link to="./userdashboard" className="ll">
                  <input type="button" className="ll  p-0  px-3" value="abc" />
                </Link>
                </li>

                <li className="my-1 ms-3 "><Link to="./teachermainpage" className="ll">
                  <input type="button" className="ll  p-0  px-3" value="goto teacher panel" />
                </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}
