
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
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserDiscussionStructure from '../../components/userdiscussionstructure';
import UserDiscussionButton from '../../components/userdiscussionbutton';
import UserDiscussionTextarea from '../../components/userdiscussiontextarea';



export default function UserDiscussion1(props) {


  const location = useLocation();
  const history = useHistory();

  // const { courseId } = location.state;

  const [questTitle, setquestTitle] = useState();
  const [questDescription, setquestDescription] = useState('why this error causes so much');


  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === true) {
      history.push('/teachermainpage')
    }
    else if (!location.state?.courseId) {
      history.push('/userdashboard')
    }
  }



  useEffect(() => {
    console.log(questDescription)
  }, [questDescription])


  const askQuestion = (e) => {
    e.preventDefault();
    Firestore.collection('stdQuestions').add({

      courseId: location.state?.courseId,
      title: questTitle,
      description: questDescription

    }).then(() => {
      // alert("your question has been added")
      reset()
      setmsg(true)
      setTimeout(() => {
        setmsg(false)
        // history.push('/userplaycourse')
      }, 3000);

    }).catch(() => {
      alert('cant add your question')
    })
  }

  console.log(location.state?.courseId)


  // FORM VALIDATION

  const onSubmit = (data, e) => {
    e.preventDefault();
    askQuestion(e)
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  // FORM VALIDATION
  const [msg, setmsg] = useState(false)

  return (
    <div>
      <Navbar />
      <Searchbar />

      <UserDiscussionStructure heading='FORUM'>

        {/* <h3 className='px-5 pt-4 pb-2'>Ask A Question</h3> */}
        <form onSubmit={handleSubmit(onSubmit)}>

          <p class="pt-4 pb-0 px-5 bold">Enter your question Title.
          </p>

          {/* <div class=""> */}

          <div class="intend-lrn-search mb-3">
            <input
              type='text'
              class="form-control py-3 ps-3"
              type="textarea" placeholder="Example: Enter Question Title here " aria-label="Search"
              {...register('title', {
                required: "fill this field"
              })
              }
              onChange={(e) => { setquestTitle(e.target.value) }}
            />
            <p className='text-danger'>{errors?.title?.message}</p>

          </div>





          <p class="pt-2 pb-0 px-5 bold">Enter your question Description.
          </p>

          <div class=" mb-3">
            <UserDiscussionTextarea
              placeholder='Example: Add your comment here !'
              register={{
                ...register('desc', {
                  required: "fill this field"
                })
              }}
            />
            <p className='text-danger'>{errors?.desc?.message}</p>

          </div>


          {/* BUTTONS */}
          <div class=" mb-0">
            <button
              type='submit'
              // onClick={askQuestion}
              className='bg-dark text-white p-2'>Ask a Question
            </button>
            {msg ? <h5 className='mt-4 text-dark'>Question has been added</h5>
              :
              <></>}
          </div>


          <div class=" mb-5">
            <button
              onClick={() => {
                history.push({
                  pathname: '/userdiscussion2',
                  state: {
                    courseData: location.state?.courseId
                  }
                })
              }}
              className='bg-dark text-white p-2'>View / Reply exisiting Question
            </button>
          </div>

        </form>






        {/* <div class="px-5 overflow-hidden mt-5 mb-5">
          <UserDiscussionButton courseId={location.state?.courseId} text='View / Reply exisiting Question' href='/userdiscussion2' />
        </div> */}
        {/* BUTTONS */}


      </UserDiscussionStructure>

      <Footer />

    </div>
  )
}




