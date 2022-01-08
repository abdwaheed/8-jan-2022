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
import UserStructure from '../../components/userstructure';

export default function UserCompletedCourses(props) {

  const location = useLocation();
  const history = useHistory();

  const [completedCourses, setcompletedCourses] = useState([])


  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher != false) {
      history.push('/teachermainpage')
    }
  }


  useEffect(() => {
    console.log(props.auth?.uid)
    Firestore.collection('students').doc(props.auth?.uid).get()
      .then((data) => {
        // console.log(data.data().completedCourses)
        data.data()?.completedCourses?.map((courseId) => {
          Firestore.collection('courses').doc(courseId).get()
            .then((coursedetails) => {
              Firestore.collection('teachers').doc(coursedetails.data().teacheruid).get()
                .then((teacher) => {
                  setcompletedCourses(prevData => [...prevData, { id: coursedetails.id, ...coursedetails.data(), teacher: teacher.data()?.email }])
                }).catch((err) => {
                  alert(err)
                })
              // setcompletedCourses(prevData => [...prevData, { id: coursedetails.id, ...coursedetails.data() }])
            }).catch((err) => { alert(err) })
        })
        // setcompletedCourses(prevData => [...prevData, { id: data.id, ...data.data() }])
        // setLectures(prevData => [...prevData, { id: data.id, ...data.data(), passed: true }
      }).catch((err) => { alert(err) })
  }, [])

  console.log(completedCourses)
  return (
    <>
      <Navbar />
      <Searchbar />

      <UserStructure>
        <h3 class="pt-3">COMPLETED COURSES</h3>

        <table class="w-100">
          <thead>
            <tr>
              <td>Title</td>
              <td>Instructor</td>
              <td>Language Medium</td>
              <td>Total Lectures</td>
            </tr>
          </thead>

          <tbody>
            {completedCourses.length > 0 ?
              completedCourses?.map((data) => (
                <>
                  <tr>
                    <td>{data?.title}</td>
                    <td>{data?.teacher}</td>
                    <td>{data?.languageMedium}</td>
                    <td>{data?.totalLectures}</td>
                    {/* <td>dog</td> */}
                  </tr>
                </>
              ))
              :
              <></>
            }

          </tbody>

        </table>

      </UserStructure>

      <Footer />
    </>
  )
}
