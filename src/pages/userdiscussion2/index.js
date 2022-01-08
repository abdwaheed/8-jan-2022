
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



import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserDiscussionStructure from '../../components/userdiscussionstructure';
import TeacherStructure from '../../components/TeacherStructure';

export default function UserDiscussion1(props) {


  const location = useLocation();
  const history = useHistory();

  // const { courseId } = location.state;

  const [allQuestions, setallQuestions] = useState([])


  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {

    if (!location.state?.courseData) {
      if (props.userdata?.teacher === false) {
        history.push('/userdashboard')
      }
      else {
        history.push('/teachermainpage');
      }
    }
  }




  useEffect(() => {

    if (location.state?.courseData) {
      console.log(location.state?.courseData)
      Firestore.collection('stdQuestions').where('courseId', '==', location.state?.courseData)
        .get().then((allquestions) => {

          allquestions.forEach((question) => {

            setallQuestions(prevData => [...prevData, { id: question.id, ...question.data(), }])
          })
        })
    }
  }, [])

  // console.log(allQuestions)
  return (
    <div>
      <Navbar />
      <Searchbar />

      <UserDiscussionStructure heading='Reply to an existing question'>

        {
          allQuestions?.length > 0 ?
            allQuestions.map((data) => (
              <div className="py-2 pt-4">
                <Link to={{
                  pathname: '/userdiscussion3',
                  state: {
                    questionDetails: data
                  }
                }}
                  class="pt-4 pb-0 px-5 bold text-decoration-none"> {data.title}
                </Link>
              </div>
            ))
            :
            <>no questions added for this course yet</>
        }


        {/* <div className="py-2">
          <Link to='/userdiscussion3' class="pt-4 pb-0 px-5 bold text-decoration-none">2. Syntax error, not found.
          </Link>
        </div>

        <div className="py-2 pb-4">
          <Link to='/userdiscussion3' class="pt-4 pb-0 px-5 bold text-decoration-none">3. Program failure due to error in code.
          </Link>
        </div> */}

      </ UserDiscussionStructure >

      <Footer />

    </div >
  )
}




