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


export default function TeacherStudentsP2(props) {

  const location = useLocation();
  const history = useHistory();

  const [courses, setCourses] = useState([]);

  const [serialNo, setSerialNo] = useState(0);

  const [allStudents, setAllStudents] = useState([]);



  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === false) {
      history.push('/userdashboard')
    }
    else if (!location.state?.students) {
      history.push('/teachermainpage')
    }
  }



  useEffect(() => {

    if (props.auth) {
      // console.log(props.auth.uid)


      // if (location.state) {
      //   const { students } = location.state;

      location.state?.students?.students?.map((stdid) => {
        Firestore.collection('students').doc(stdid).get()
          .then((stdDdata) => {
            setAllStudents(prevData => [...prevData, { id: stdDdata.id, ...stdDdata.data() }])
          })
      })
      // }

    }
  }, []);

  // console.log(allStudents);
  console.log(allStudents);

  return (
    <div>

      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="dashboard-form py-3 px-5 my-5" style={{ overflow: 'auto' }}>
          <h3 class="py-2">Students List</h3>
          <table class="table table-bordered py-4">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Std_Name</th>
                <th scope="col">Std_Email</th>
                {/* <th scope="col">Course Name</th> */}
              </tr>
            </thead>
            <tbody>

              {allStudents.length > 0 ?
                allStudents.map((stdData) => (
                  <tr>
                    <td scope="row">1</td>
                    <td>{stdData.name}</td>
                    <td>{stdData.email}</td>
                    {/* <td>JavaScript,Java,C++</td> */}
                  </tr>
                ))
                :
                <>No students in this course</>
              }


            </tbody>
          </table>
        </div>

      </TeacherStructure >

      <Footer />

    </div >
  )
}
