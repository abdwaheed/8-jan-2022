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
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'


export default function TeacherEditLecture(props) {


  const location = useLocation();
  const history = useHistory();

  // const lecture = null;
  // const courseId = null;

  const [removeurl, setRemoveUrl] = useState(false);
  const [lectureUrl, setLectureUrl] = useState(location.state?.lecture);

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
    else if (!location.state?.lecture && !location.state?.courseId) {
      history.push('/teachermainpage')
    }
  }


  // // EDIT NEW DOCUMENT FUCNTION

  const editLecture = async (e) => {

    e.preventDefault();

    Firestore.collection("courses").doc(location.state?.courseId).update({
      lectures: firebase.firestore.FieldValue.arrayRemove(location.state?.lecture)
    }, { merge: true })
      .then(() => {
        setRemoveUrl(true);
      })
      .catch((error) => {
        alert("Cant update course: ", error);
      });


    // ADDING NEW URL

    Firestore.collection("courses").doc(location.state?.courseId).update({
      lectures: firebase.firestore.FieldValue.arrayUnion(lectureUrl)
    }, { merge: true })
      .then(() => {
        alert("Lecture has been updated!");
      })
      .catch((error) => {
        alert("Cant update course: ", error);
      });

  }

  // // EDIT NEW DOCUMENT FUCNTION


  useEffect(() => {
    // if (!location.state?.lecture && !location.state?.courseId) {
    //   history.push('/teachermainpage')
    // }


  }, [])



  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="intended-learners my-5">
          <div class="dog d-flex justify-content-between overflow-hidden">
            <div>
              <h3 class="py-4 px-5">EDIT LECTURE</h3>
            </div>

          </div>

          <p class="pt-4 pb-0 px-5 bold">Enter Youtube Link For The Lecture to "Edit"
          </p>

          <div class="intend-lrn-search mb-3">
            <input
              value={lectureUrl}
              onChange={(e) => { setLectureUrl(e.target.value) }}
              class="form-control py-3 ps-3"
              type="search"
              placeholder="Example: Enter URL / LINK "
              aria-label="Search" />
          </div>



          <div class="intend-lrn-search mb-5 py-3">
            <button
              onClick={editLecture}
              class="btn btn-dark w-50 p-2"
              type="submit">
              <a class="text-decoration-none text-white"
                href="">Update
              </a>
            </button>
          </div>

        </div>

      </TeacherStructure>

      <Footer />
    </>
  )
}
