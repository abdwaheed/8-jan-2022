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
import TeacherLecturesButton from '../../components/teacherlecturesbutton';
import TeacherStructure from '../../components/TeacherStructure';

export default function Quizzes(props) {


  const location = useLocation();
  const history = useHistory();

  // const { coursedetails } = location.state;

  const [lecturedata, setLecturedata] = useState([]);

  const [allquizzes, setAllQuizzes] = useState([]);

  const courseData = null;


  if (props.auth === null) {
    history.push('/')
  }

  if (props.userdata?.teacher != undefined) {
    // if (props.auth === null) {
    //   history.push('/')
    // }
    if (props.userdata?.teacher === false) {
      history.push('/userdashboard')
    }
    else if (!location.state?.courseData) {
      history.push('/teachermainpage')
    }
  }


  // if (!location.state?.courseData) {
  //   history.push('/teachermainpage')
  // }


  useEffect(() => {
    if (location.state?.courseData) {
      Firestore.collection('quizzes')?.where('courseId', '==', location.state?.courseData).get()
        .then((doc) => {
          doc.forEach((data) => {
            setAllQuizzes(prevData => [...prevData, { id: data.id, ...data.data() }])
          })
        })
    }

  }, [])

  console.log(allquizzes.length)

  return (
    <>
      <Navbar />
      <Searchbar />
      <TeacherStructure>

        <section class="dashboard-lesson pt-5">
          <div class="banner text-center py-5 text-white bg-danger" styles="background-color: #dc3545;">
            <h2>ALL QUIZZES</h2>

          </div>
        </section>


        <section class="user-panel available-courses">

          <div class="courses1 py-5">

            <div class="ten text-white">
              {allquizzes.length < 4 ?
                <TeacherLecturesButton data={location.state?.courseData} text='ADD QUIZ' href='/actualquiz' />
                :
                <></>
              }
              <div class={`row mt-5`}>
                {allquizzes.length > 0 ? allquizzes.map((data) => (

                  < UserplaycourseLectures
                    course={data.id} //here course is taking quizId
                    path='/quizquestions' style='mt-5' />
                ))
                  :
                  <div className='text-dark text-center'>no quizzes for this course</div>

                }

              </div>

            </div>
          </div>

        </section>
      </TeacherStructure>

      <Footer />

    </>
  )
}
