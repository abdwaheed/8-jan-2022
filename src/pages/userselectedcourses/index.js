// FIREBASE IMPORTS

import { Link, useHistory } from 'react-router-dom';
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
import { useLocation } from 'react-router-dom'

// import { Link } from 'react-router-dom'

export default function UserSelectedCourses(props) {

  const location = useLocation();
  const history = useHistory();

  const [uid, setuid] = useState('');
  const [userdata, setuserdata] = useState();

  const [coursedata, setCoursedata] = useState([]);

  useEffect(() => {

    if (props.auth) {
      // setLogin(true);
      setuid(props.auth.uid);
      console.log(props.userdata);
      console.log(props.userdata?.udata?.courses1)
      setuserdata(props.userdata);

      // Firestore.collection('students').doc(uid).get().then((snapshot) => {
      //   setuserdata(snapshot.data());
      // });

      if (props.userdata?.udata?.courses1) {
        props.userdata?.udata?.courses1.map((course) => {
          Firestore.collection("courses").doc(course).get().then(res => {
            if (res.exists)
              setCoursedata(prevData => [...prevData, { id: res.id, ...res.data() }])
          })
        })
      }

    }
    else {
      console.log("no courses")
    }

  }, []);

  console.log(props.userdata);

  // console.log(userdata);
  // console.log(coursedata);

  var abc;


  return (
    <>
      <Navbar />
      <Searchbar />

      <UserStructure email={props.userdata?.udata?.email} stddata={userdata} isStudent={false}>

        <h3 class="p-3">SELECTED COURSES</h3>
        <div class="goo">
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>Course Name</th>
                <th>View Lesson</th>
              </tr>
            </thead>
            <tbody>
              {coursedata.length > 0 ?
                coursedata.map((data) => (

                  <tr>

                    <>
                      <td>1</td>
                      <td>{data.title}</td>
                      <td>
                        <Link to={{
                          pathname: "./userplaycourse",
                          state: { coursedata: data }
                        }}>
                          <input type="button" value="Play"
                            class="btn btn-success" />
                        </Link>
                        {/* <Link to={{
                          pathname: props.href,
                          state: {
                            coursedata: props.data
                          }
                        }}></Link> */}
                      </td>

                    </>

                  </tr>

                ))
                :
                <div>You are not enrolled in any course</div>
              }
              {/* <tr>
                <td>2</td>
                <td>Basic Concepts of Object Oriented</td>
                <td><Link to="./userplaycourse"><input type="button" value="Play"
                  class="btn btn-success" /></Link> </td>
              </tr>
              <tr>
                <td>3</td>
                <td>C++ Programming Language and and its main fundamentals</td>
                <td><Link to="./userplaycourse"><input type="button" value="Play"
                  class="btn btn-success" /></Link> </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </UserStructure>

      <Footer />
    </>
  )
}
