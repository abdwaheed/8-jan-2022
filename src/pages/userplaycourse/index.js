// FIREBASE IMPORTS

import { Link, useHistory, useLocation } from 'react-router-dom';
import { Auth, Firestore, Storage } from '../../config/firebase'
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "firebase/auth";

import { onAuthStateChanged } from '@firebase/auth';
import { useEffect, useRef, useState } from 'react'
import { connectStorageEmulator } from '@firebase/storage';
import firebase from "firebase/app";

// FIREBASE IMPORTS

import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Comments from '../../components/comments';
import UserplaycourseLectures from '../../components/UserplaycourseLectures';
import Formbutton from '../../components/formbutton';

export default function UserplayCourse(props) {

  const location = useLocation();
  const history = useHistory();

  // const { coursedata } = location.state;

  const [lectures, setLectures] = useState([]);


  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === true) {
      history.push('/teachermainpage')
    }
    if (!location.state?.coursedata) {
      history.push('/userdashboard')
    }
  }



  useEffect(() => {

    // coursedata?.lectures.map((course) => {
    //   Firestore.collection("courses").doc(course).get().then(res => {
    //     if (res.exists)
    //       setLectures(prevData => [...prevData, { id: res.id, ...res.data() }])
    //   })
    // })
    if (props.auth) {

    }
    console.log(location.state?.coursedata);
  }, [])


  console.log(location.state?.coursedata);

  return (
    <>
      <Navbar />
      <Searchbar />

      <section class="dashboard-lesson pt-5">
        <div class="banner text-center py-5 text-white bg-danger" styles="background-color: #dc3545;">
          <h2>C++ PROGRAMMING LANGUAGE</h2>
          <p>If you have any further question please feel free to contact with us 11AM to 8PM only business days.</p>
        </div>
      </section>



      <section class="user-panel available-courses">

        <div class="courses1 py-5">

          <div class="ten text-white">
            <div class={`row mt-5`}>
              <div className='d-flex justify-content-center pb-2'>

                <button className='p-2'>
                  <Link to={{
                    pathname: 'userallquizzes',
                    state: {
                      courseId: location.state?.coursedata?.id
                    }
                  }}>
                    GO TO QUIZZES
                  </Link>
                </button>

              </div>


              <div className='d-flex justify-content-center pb-5'>

                <button className='p-2'>
                  <Link to={{
                    pathname: 'userdiscussion1',
                    state: {
                      courseId: location.state?.coursedata?.id
                    }
                  }}>
                    ASK QUESTION
                  </Link>
                </button>

              </div>

              {location.state?.coursedata?.lectures ?
                location.state?.coursedata?.lectures.map((lecture) => (
                  <UserplaycourseLectures lecture={lecture} path='/usercoursevideo' />
                ))
                : <p className='text-dark'>no lectures in this course</p>
              }
            </div>


            {/* <UserplaycourseLectures path='/usercoursevideo' />

            <UserplaycourseLectures path='/usercoursevideo' />

            <UserplaycourseLectures path='/usercoursevideo' /> */}


          </div>
        </div>

      </section>

      <Footer />

    </>
  )
}
