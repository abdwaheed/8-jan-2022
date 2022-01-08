
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


import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserDiscussionTextarea from '../../components/userdiscussiontextarea';
import UserDiscussionButton from '../../components/userdiscussionbutton';
import UserDiscussionStructure from '../../components/userdiscussionstructure';
import UserDiscussionComments from '../../components/userdiscussioncomments';


export default function UserDiscussion1(props) {

  const location = useLocation();
  const history = useHistory();

  // const { questionDetails } = location.state;

  const [answer, setanswer] = useState('')
  const [allreplies, setAllReplies] = useState([])


  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === true) {
      history.push('/teachermainpage')
    }
    else if (!location.state?.questionDetails) {
      history.push('/userdashboard')
    }
  }


  const replyToQuestion = (e) => {
    e.preventDefault();

    Firestore.collection('questionAnswers').add({
      questionsId: location.state?.questionDetails?.id,
      answer: answer,
      commentor: firebase.auth().currentUser.email


    }).then(() => {
      // alert("Your respone to this question has been added")
      reset()
      setmsg(true)
      setTimeout(() => {
        setmsg(false)
      }, 3000);
    }).catch(() => {
      alert('cant add your respone')
    })
  }


  useEffect(() => {
    Firestore.collection('questionAnswers').where('questionsId', '==', location.state?.questionDetails?.id)
      .get().then((allanswers) => {
        allanswers.forEach((reply) => {
          setAllReplies(prevData => [...prevData, { id: reply.id, ...reply.data(), }])
        })
      })
  }, [])


  // FORM VALIDATION

  const onSubmit = (data, e) => {
    e.preventDefault();
    replyToQuestion(e)
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  // FORM VALIDATION

  const [msg, setmsg] = useState(false)

  return (
    <div>
      <Navbar />
      <Searchbar />

      <UserDiscussionStructure heading={location.state?.questionDetails?.title}>

        <div className="py-2 pt-4">
          <h5 className="py-3 px-5">
            {location.state?.questionDetails?.description}
          </h5>

          <div class=" py-3 px-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <UserDiscussionTextarea
                placeholder='Example: Add your comment here !'
                register={{
                  ...register('comment', {
                    required: "fill this field",
                  })
                }}
                onChange={(e) => { setanswer(e.target.value) }}
              />
              <p className='text-danger'>{errors?.comment?.message}</p>

              <button
                // onClick={replyToQuestion}
                type='submit'
                className='mt-3 p-2 px-3 bg-dark text-white'>
                POST
              </button>
              {msg ? <h5 className='mt-4 text-dark'>You Comment is Added</h5>
                :
                <></>}
            </form>

          </div>

          <h4 className="px-5 pt-4">ANSWERS: </h4>
        </div>

        {allreplies?.length > 0 ?
          allreplies.map((data) => (
            <UserDiscussionComments commentor={data?.commentor} comment={data.answer} date='asnwered at  3-july-2020 12.30 pm' />
          )) :
          <>no answers for this question yet!</>
        }

      </UserDiscussionStructure>

      <Footer />

    </div >
  )
}




