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

import { useForm } from 'react-hook-form';
// FIREBASE IMPORTS

import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'

export default function TeacherUploadLecture(props) {

  const location = useLocation();
  const history = useHistory();

  // const { courseData } = location.state;

  const [videoUrl, setvideoUrl] = useState();


  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === false) {
      history.push('/userdashboard')
    }
    else if (!location.state?.courseData) {
      history.push('/teachermainpage')
    }
  }





  useEffect(() => {
    console.log(location.state?.courseData);
  }, [])


  // // EDIT NEW DOCUMENT FUCNTION

  const addLecture = async (e) => {

    e.preventDefault();

    Firestore.collection('courses').doc(location.state?.courseData?.id).update({
      lectures: firebase.firestore.FieldValue.arrayUnion(videoUrl)
    }, { merge: true })
      .then(() => {
        // alert("Lecture has been added!");
        reset()
        setmsg(true)
        setTimeout(() => {
          setmsg(false)
          history.push('/teachermainpage')
        }, 3000);
      })
      .catch((error) => {
        alert("Error enrolling in this course: ", error);
      });

  }

  // // EDIT NEW DOCUMENT FUCNTION


  // FORM VALIDATION

  const onSubmit = (data, e) => {
    e.preventDefault()
    addLecture(e)
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  // FORM VALIDATION

  const [msg, setmsg] = useState(false)

  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="intended-learners my-5">
          <div class="dog d-flex justify-content-between overflow-hidden">
            <div>
              <h3 class="py-4 px-5">ADD LECTURE</h3>
            </div>
          </div>


          <p class="pt-4 pb-0 px-5 bold">Enter Youtube Link For The Lecture
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="intend-lrn-search mb-3">
              <input name='videoUrl'
                {...register('url', {
                  required: "fill this field"
                })
                }
                onChange={(e) => { setvideoUrl(e.target.value) }}
                class="form-control py-3 ps-3"
                type="search"
                placeholder="Example: Enter URL / LINK "
                aria-label="Search" />
              <p className='text-danger'>{errors?.url?.message}</p>

            </div>


            <div class="intend-lrn-search mb-5 py-3">
              <button
                // onClick={addLecture}
                class="btn btn-dark w-50 p-2"
                type="submit">
                {/* <a class="text-decoration-none text-white"
                  href="">
                </a> */}
                Save
              </button>
              {msg ?
                <h5 className='mt-4'>Lecture Added Successfully
                </h5>
                :
                <></>
              }
            </div>
          </form>
        </div>

      </TeacherStructure>

      <Footer />
    </>
  )
}
