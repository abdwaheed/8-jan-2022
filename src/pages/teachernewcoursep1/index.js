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
import TeacherStructure from '../../components/TeacherStructure';


export default function TeacherNewCourseP1(props) {

  const location = useLocation();
  const history = useHistory();

  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === false) {
      history.push('/userdashboard')
    }
  }


  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure >
        <div>
          <h2 class="text-center mt-5 mb-3">Let's start with the course you're making.</h2>

          <div class="pt-4 pb-5 px-3 mt-5 course-p1-s1 text-center border border-dark">
            <Link to="/teacherintendedlearners" class="text-decoration-none text-black">
              <ion-icon name="logo-youtube"></ion-icon>
              <h4 class="mt-2">course</h4>
              <p>Create rich learning experiences with the help of video lectures, quizzes, coding excercies, etc.</p>
            </Link>
          </div>
        </div>
      </TeacherStructure>


      <Footer />
    </>
  )
}
