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

export default function QuizQuestions(props) {

  const history = useHistory();

  const location = useLocation();

  // const { coursedetails } = location.state;


  const [lecturedata, setLecturedata] = useState([]);

  const [allQuestions, setAllQuestions] = useState([]);
  const [quizId, setQuizId] = useState('');

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
    else if (!location.state?.courseId) {
      history.push('/teachermainpage')
    }
  }


  useEffect(() => {

    // if (location.state) {
    //   const { courseId } = location.state;
    if (location.state?.courseId) {
      setQuizId(location.state?.courseId)
      Firestore.collection('questions_test').where('id', '==', location.state?.courseId).get()
        .then((doc) => {
          doc.forEach((data) => {
            // console.log(data.id)

            setAllQuestions(prevData => [...prevData, { questId: data.id, ...data.data() }])
          })
        })
    }
    // }

  }, [])


  const addQuestion = (e) => {
    e.preventDefault();

    history.push({
      pathname: '/teacherquiz',
      state: {
        quizId: quizId
      }
    })


  }

  console.log(allQuestions);

  return (
    <>
      <Navbar />
      <Searchbar />

      <section class="dashboard-lesson pt-5">
        <div class="banner text-center py-5 text-white bg-danger" styles="background-color: #dc3545;">
          <h2>ALL QUESTIONS</h2>

        </div>
      </section>


      <section class="user-panel available-courses">

        <div class="courses1 py-5">

          <div class="ten text-white">

            {/* <TeacherLecturesButton text='ADD QUIZ' href='/actualquiz' /> */}



            <div class={`row mt-5`}>
              {allQuestions.length > 0 ? allQuestions.map((data) => (
                <UserplaycourseLectures
                  lecture={data} //here data is for all 'data' of a single question
                  path='/teacherquiz' style='mt-5' />
              ))
                :
                <>
                  {/* <TeacherLecturesButton text='ADD QUESTIONS' data={quizId} href='/teacherquiz' /> */}

                  <div class="d-flex justify-content-center intend-lrn-search mb-5 py-3">
                    <button
                      onClick={addQuestion}
                      class="btn btn-dark w-50 p-2" type="button">
                      ADD QUESTIONS
                    </button>
                  </div>

                  <div className='text-dark text-center'>NO QUESTIONS ADDED TO THIS Quiz</div>
                </>
              }

            </div>

          </div>
        </div>

      </section>

      <Footer />

    </>
  )
}
