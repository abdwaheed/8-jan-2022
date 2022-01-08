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

export default function UserAllQuizzes(props) {

  const location = useLocation();
  const history = useHistory();

  // const { courseId } = location.state;

  const [lectures, setLectures] = useState([]);
  const [generateCertificate, setgenerateCertificate] = useState(0);
  let count = 0;



  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher != false) {
      history.push('/teachermainpage')
    }
    if (!location.state?.courseId) {
      history.push('/userdashboard')
    }
  }


  const generCertificate = async (e) => {
    e.preventDefault()
    Firestore.collection("students").doc(props.auth?.uid).update({

      completedCourses: firebase.firestore.FieldValue.arrayUnion(location.state?.courseId)

    }, { merge: true })
      .then(() => {
        alert('this course is added to you completed courses list!!!');
      })
      .catch((error) => {
        alert(error);
      })

  }




  useEffect(() => {

    if (location.state?.courseId) {
      Firestore.collection("quizzes").where('courseId', '==', location.state?.courseId).get()
        .then(res => {
          res.forEach((data) => {

            // console.log(data.data()?.passStudents)
            let r = data.data().passStudents?.find(std => std === firebase.auth().currentUser.uid)
            // console.log(r)
            if (r) {
              // console.log(r)
              count = count + 1
              setgenerateCertificate(count)
              setLectures(prevData => [...prevData, { id: data.id, ...data.data(), passed: true }])
            }
            else {
              setLectures(prevData => [...prevData, { id: data.id, ...data.data() }])
            }
            // data.data()?.passStudents.forEach((abc) => {
            //   if (abc === firebase.auth().currentUser.uid) {
            //     setLectures(prevData => [...prevData, { isPass: true }])
            //   }
            // })

          })
          //   if (res.exists)
          //     setLectures(prevData => [...prevData, { id: res.id, ...res.data() }])
        })
    }

  }, [])

  console.log(lectures)
  // console.log(generateCertificate)
  // console.log(generateCertificate)
  // console.log(lectures);

  return (
    <>
      <Navbar />
      <Searchbar />

      <section class="dashboard-lesson pt-5">
        <div class="banner text-center py-5 text-white bg-danger" styles="background-color: #dc3545;">
          <h2>ALL QUIZZES</h2>
          {/* <p>If you have any further question please feel free to contact with us 11AM to 8PM only business days.</p> */}
        </div>
      </section>



      <section class="user-panel available-courses">

        <div class="courses1 py-5">

          <div class="ten text-white">

            {generateCertificate === 4 ?
              <button onClick={(e) => { generCertificate(e) }}>
                Generete Certificate
              </button>
              :
              <></>
            }

            <div class={`row mt-5`}>

              {lectures.length > 0 ?
                lectures?.map((lecture) => (
                  <UserplaycourseLectures course={lecture.passed} lecture={lecture}
                    // path={generateCertificate === 4 ? '' : '/userquiztaking'}
                    path={lecture?.passed ? '' : '/userquiztaking'}
                  />
                ))
                : <p className='text-dark'>no quizzes in this course</p>
              }
            </div>

          </div>
        </div>

      </section>

      <Footer />

    </>
  )
}