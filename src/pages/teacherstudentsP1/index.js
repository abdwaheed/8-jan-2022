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


export default function TeacherStudentsP1(props) {

  const location = useLocation();
  const history = useHistory();

  const [courses, setCourses] = useState([]);


  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === false) {
      history.push('/userdashboard')
    }
  }



  useEffect(() => {

    if (props.auth) {
      // console.log(props.auth.uid)
      Firestore.collection('courses').where('teacheruid', '==', props.auth.uid).get()
        .then((data) => {
          data.forEach((doc) => {
            setCourses(prevData => [...prevData, { id: doc.id, ...doc.data() }])
          })
        })
    }
    else {
    }

  }, []);


  return (
    <div>

      <Navbar />
      <Searchbar />

      <TeacherStructure>


        <div className="available-courses py-5" style={{ backgroundColor: 'white' }}>
          <div className="courses border" >

            <div className='row px-5 py-3'>

              {courses?.map((data) => (

                <div className="col-md-4 py-5">
                  <div class="card co" >
                    <img class="card-img-top" src={data.imgurl} alt="Card image cap" />
                    <div class="card-body">
                      <h3>
                        <Link
                          to={{
                            pathname: "/teacherstudentsP2",
                            state: {
                              students: data
                            }
                          }}
                          className='text-decoration-none'>
                          {data.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))
              }


            </div>
          </div>


        </div>


      </TeacherStructure >

      <Footer />

    </div >
  )
}
