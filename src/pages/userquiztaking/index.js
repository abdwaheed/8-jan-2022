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

export default function UserQuizTaking(props) {


  const location = useLocation();
  const history = useHistory();
  // const { quizdetails } = location.state;

  const [id, setId] = useState('');

  const [questions, setQuestions] = useState([]);

  const [question, setQuestion] = useState("")
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [option3, setOption3] = useState("")
  const [option4, setOption4] = useState("")
  const [answer, setAnswer] = useState("")

  const [singleQuestion, setSingleQuestion] = useState();
  // console.log("State Change: ", questions)
  // const { lecture } = location.state;

  const [studentId, setstudentId] = useState();

  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === true) {
      history.push('/teachermainpage')
    }
    else if (!location.state?.lecture) {
      history.push('/userdashboard')
    }
  }



  useEffect(() => {
    if (firebase.auth().currentUser) {
      setstudentId(firebase.auth().currentUser?.uid)
    }

    // if (location.state) {

    //   if (lecture) {
    console.log(location.state?.lecture);

    Firestore.collection('questions_test').where('id', '==', location.state?.lecture?.id).get()
      .then((questions) => {
        questions.forEach((data) => {
          setQuestions(prevData => [...prevData, { id: data.id, ...data.data() }])
        })
      })
    // }
    // }
  }, [])


  //ADDING QUESTIONS TO DATABASE
  const submitquiz = (e) => {
    e.preventDefault();
    var batch = Firestore.batch()
    questions.forEach((doc) => {
      var docRef = Firestore.collection("questions_test").doc(); //automatically generate unique id
      batch.set(docRef, doc);
    });
    batch.commit()
  }


  const [userAnswers, setuserAnswers] = useState([])



  //ADDING QUESTIONS TO DATABASE

  const [qNo, setQNo] = useState(0);
  let finalOption;

  const addQuest = (e) => {
    e.preventDefault()
    setuserAnswers([...userAnswers, { answer }])
    setQNo(qNo + 1)

    if (qNo >= 3) {
      finalOption = answer;
      // console.log(finalOption)
      quizResult(e)
    }
    // console.log(answer)
    // setQuestions([...questions, { question, option1, option2, option3, option4, answer, id }])
  }

  const [result, setresult] = useState(0);

  const quizResult = (e) => {
    e.preventDefault()
    // if (qNo >= 2) {
    //   setuserAnswers([...userAnswers, { answer }])
    // }
    let newResult = 0;


    questions.forEach((data, index) => {
      if (data.answer === userAnswers[index]?.answer) {
        newResult = newResult + 1

      }
      if (index === 3) {
        if (data.answer === finalOption) {
          newResult = newResult + 1
        }
      }
    })

    console.log(newResult)

    if (newResult >= 2) {
      // alert('you have passed the quiztit')
      setpassFail(true)
      setmsg(true)
      setTimeout(() => {
        setmsg(false)
        history.push('/userselectedcourses')
      }, 3000);

      Firestore.collection('quizzes').doc(location.state?.lecture?.id)
        .update({
          passStudents: firebase.firestore.FieldValue.arrayUnion(studentId)
        })
    }
    else {
      // alert('you are failed')
      setmsg(true)
      setTimeout(() => {
        setmsg(false)
        history.push('/userselectedcourses')
      }, 3000);
    }
  }


  const EditQuestion = (e) => {
    e.preventDefault()

    Firestore.collection('questions_test').doc(location.state?.lecture?.questId).update({
      question: question,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      answer: answer,
    }).then(() => {
      alert('question has been updated')
    }).catch(() => {
      alert('cant update question')
    })

  }

  const [msg, setmsg] = useState(false)
  const [passFail, setpassFail] = useState(false)

  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="intended-learners my-5">
          <div class="dog d-flex justify-content-between overflow-hidden">
            <div>
              {/* <h3 class="py-4 px-5">{singleQuestion ? 'EDIT' : 'ADD'} QUIZ QUESTION HERE</h3> */}
              <h3 class="py-4 px-5"> QUIZ STARTS</h3>

            </div>
          </div>

          <p class="pt-4 pb-0 px-5 bold">Question
          </p>

          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3"
              value={questions[qNo]?.question}
              onChange={(e) => setQuestion(e.target.value)}
              type="search"
              aria-label="Search" />
          </div>

          <p class="pt-4 pb-0 px-5 bold">Given below are the Options
          </p>


          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3"
              value={questions[qNo]?.option1}
              // onChange={(e) => setOption1(e.target.value)}
              type="search"
              aria-label="Search" />
          </div>
          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3"
              value={questions[qNo]?.option2}
              // onChange={(e) => setOption2(e.target.value)}
              type="search"
              aria-label="Search" />
          </div>
          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3"
              value={questions[qNo]?.option3}
              // onChange={(e) => setOption3(e.target.value)}
              type="search"
              aria-label="Search" />
          </div>

          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3"
              value={questions[qNo]?.option4}
              // onChange={(e) => setOption4(e.target.value)}
              type="search"
              aria-label="Search" />
          </div>



          <p class="pt-4 pb-0 px-5 bold">Enter Correct Option Number
          </p>


          {/* radio buttons */}
          <div class="form-check">
            <input class="form-check-input "
              onClick={(val) => setAnswer(val.target.value)}
              value="0" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
              checked={answer == '0' ? true : false} />
            <label class="form-check-label" for="flexRadioDefault1">
              Option1
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
              onClick={(val) => setAnswer(val.target.value)}
              value="1" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
              checked={answer == '1' ? true : false} />
            <label class="form-check-label" for="flexRadioDefault2">
              Option2
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
              onClick={(val) => setAnswer(val.target.value)}
              value="2" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
              checked={answer == '2' ? true : false} />
            <label class="form-check-label" for="flexRadioDefault2">
              Option3
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
              onClick={(val) => setAnswer(val.target.value)}
              value="3"
              checked={answer == '3' ? true : false} />
            <label class="form-check-label" for="flexRadioDefault2">
              Option4
            </label>
          </div>

          {/* radio buttons */}

          {
            !singleQuestion ?
              <>
                <div class="intend-lrn-search mb-5 py-3">

                  <button
                    // onClick={qNo < 2 ? addQuest : quizResult}
                    onClick={addQuest}

                    class="btn btn-dark w-50 p-2" type="button">
                    <a class="text-decoration-none text-white"
                      href="">{qNo <= 2 ? 'Next' : 'Submit'}
                    </a>
                  </button>
                  {msg ?
                    <h5 className='text-dark mt-4'>You have {passFail ? 'Passed' : 'Failed'} Quiz
                    </h5>
                    : <></>}

                </div>

                {/* <div class="intend-lrn-search mb-5 py-3">
                  <button
                    onClick={submitquiz}
                    class="btn btn-dark w-50 p-2" type="button"><a class="text-decoration-none text-white"
                      href="">Submit Quiz</a></button>
                </div> */}
              </>
              :
              <div class="intend-lrn-search mb-5 py-3">
                <button
                  onClick={EditQuestion}
                  class="btn btn-dark w-50 p-2" type="button"><a class="text-decoration-none text-white"
                    href="">EDIT QUESTION</a></button>
              </div>

          }
        </div>

      </TeacherStructure>

      <Footer />
    </>
  )
}
