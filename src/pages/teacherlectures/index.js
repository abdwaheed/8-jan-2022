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
import Comments from '../../c\omponents/comments';
import UserplaycourseLectures from '../../components/UserplaycourseLectures';
import Formbutton from '../../components/formbutton';
import TeacherLecturesButton from '../../components/teacherlecturesbutton';
import TeacherStructure from '../../components/TeacherStructure'


export default function TeacherLectures(props) {


  const location = useLocation();
  const history = useHistory();

  const [coursedetails, setCoursedetails] = useState(null)
  const [lecturedata, setLecturedata] = useState([]);



  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === false) {
      history.push('/userdashboard')
    }

    else if (!location.state?.coursedetails) {
      history.push('teachermainpage')
    }
  }


  useEffect(() => {

    // if (location.state) {

    //   let { coursedetails: cd } = location.state;
    //   setCoursedetails(cd)
    //   console.log("COURSE DATA IN TEACHER LECTURE: ", coursedetails)

    let data = [];
    if (location.state?.coursedetails?.lectures) {
      location.state?.coursedetails?.lectures.map((lectures) => {

        data.push(lectures);

      })
    }
    // console.log(data);
    setLecturedata(data);
    // }
    //   else {
    //     history.push('/teachermainpage');
    //   }

  }, [])
  console.log(location.state?.coursedetails?.id)

  // console.log(lecturedata);

  // console.log(coursedetails);

  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>

        <section class="dashboard-lesson pt-5">
          <div class="banner text-center py-5 text-white bg-danger" styles="background-color: #dc3545;">
            <h2>ANY LECTURE NAME</h2>

          </div>
        </section>


        <section class="user-panel available-courses">

          <div class="courses1 py-5">

            <div class="ten text-white">
              <div className="row text-dark px-4 text-center">
                <h3>ALL LECTURES</h3>
              </div>


              {/* <TeacherLecturesButton text='ADD QUIZ' href='/teaaccherquiz' /> */}
              {console.log('COURSE DETAILS IN JSX: ', coursedetails)}
              <TeacherLecturesButton data={location.state?.coursedetails?.id} text='QUIZZES' href='/quizzes' />

              <TeacherLecturesButton text='ADD LECTURE' data={location.state?.coursedetails}
                href='/teacheruploadlecture' />

              <TeacherLecturesButton data={location.state?.coursedetails?.id} text='Q n A' href='/userdiscussion2' />


              <div class={`row mt-5`}>
                {lecturedata.length > 0 ? lecturedata.map((data) => (
                  <UserplaycourseLectures
                    // course={coursedetails.id}
                    lecture={data} path='/teachereditlecture' style='mt-5' />
                ))
                  :
                  <div className='text-dark'>no lectures for this course</div>

                }

                {/*
              <UserplaycourseLectures path='/teachereditlecture' />

              <UserplaycourseLectures path='/teachereditlecture' />

              <UserplaycourseLectures path='/teachereditlecture' /> */}
              </div>

            </div>
          </div>

        </section>
      </TeacherStructure>


      <Footer />

    </>
  )
}
