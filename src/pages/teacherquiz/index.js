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
// import { UseFormReset } from 'react-hook-form';
import { useForm } from 'react-hook-form';
// FIREBASE IMPORTS


import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'

export default function TeacherQuiz(props) {


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

  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === false) {
      history.push('/userdashboard')
    }

    else if (!location.state?.lecture && !location.state?.quizId) {
      history.push('/teachermainpage')
    }
  }




  useEffect(() => {
    if (location.state) {
      const { quizId } = location.state;
      setId(location.state?.quizId);
      console.log(location.state?.quizId);


      //coming from quizquestions
      // const { lecture } = location.state;
      if (location.state?.lecture) {
        setSingleQuestion(location.state?.lecture)

        console.log(location.state?.lecture?.id)
        setQuestion(location.state?.lecture?.question)
        setOption1(location.state?.lecture?.option1)
        setOption2(location.state?.lecture?.option2)
        setOption3(location.state?.lecture?.option3)
        setOption4(location.state?.lecture?.option4)
        setAnswer(location.state?.lecture?.answer)
      }


    }
  }, [])

  //ADDING QUESTIONS TO DATABASE
  const submitquiz = (e) => {
    e.preventDefault();

    // var db = firebase.firestore();
    var batch = Firestore.batch()
    questions.forEach((doc) => {
      var docRef = Firestore.collection("questions_test").doc(); //automatically generate unique id
      batch.set(docRef, doc);
    });
    batch.commit()
    setmsg(true)
    setTimeout(() => {
      setmsg(false)
      history.push('/teachermainpage')
    }, 3000);
    // alert('quizz has been added')

  }

  //ADDING QUESTIONS TO DATABASE
  const [totalQuestions, settotalQuestions] = useState(0)

  const addQuest = (e) => {
    e.preventDefault();
    setQuestions([...questions, { question, option1, option2, option3, option4, answer, id }])
    settotalQuestions(totalQuestions + 1)
    setAnswer(null)
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
      setmsg(true)
      setTimeout(() => {
        setmsg(false)
        history.push('/teachermainpage')
      }, 3000);
      // alert('question has been updated')
    }).catch(() => {
      alert('cant update question')
    })

  }

  // console.log(lecture.questId);


  const [msg, setmsg] = useState(false)

  // FORM VALIDATION

  const onSubmit = (data, e) => {
    e.preventDefault();
    // addQuest(e)
    if (!singleQuestion) {
      if (totalQuestions <= 3) {
        addQuest(e)
        reset()
      }
      else {
        submitquiz(e)
      }
    }
    else {
      EditQuestion(e)
    }
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  // FORM VALIDATION

  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="intended-learners my-5">
          <div class="dog d-flex justify-content-between overflow-hidden">
            <div>
              <h3 class="py-4 px-5">{singleQuestion ? 'EDIT' : 'ADD'} QUIZ QUESTION HERE</h3>
            </div>

          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

            <p class="pt-4 pb-0 px-5 bold">Enter Question
            </p>


            <div class="intend-lrn-search mb-3">
              <input class="form-control py-3 ps-3"
                placeholder="Example: Enter Question Here "
                defaultValue={location.state?.lecture?.question}
                // value={question}
                {...register('quest', {
                  required: "fill this field"
                })
                }

                onChange={(e) => setQuestion(e.target.value)}

              />

              <p className='text-danger'>{errors?.quest?.message}</p>

            </div>

            <p class="pt-4 pb-0 px-5 bold">Enter Options In Give Below Text Boxes
            </p>


            <div class="intend-lrn-search mb-3">
              <input
                class="form-control py-3 ps-3"
                placeholder="Enter Option 1 "
                defaultValue={location.state?.lecture?.option1}

                {...register('opt1', {
                  required: "fill this field"
                })
                }

                onChange={(e) => setOption1(e.target.value)}
              />
              <p className='text-danger'>{errors?.opt1?.message}</p>

            </div>

            <div class="intend-lrn-search mb-3">
              <input class="form-control py-3 ps-3"
                type="search" placeholder="Enter Option 2 "
                aria-label="Search"
                defaultValue={location.state?.lecture?.option2}

                {...register('opt2', {
                  required: "fill this field"
                })
                }
                onChange={(e) => setOption2(e.target.value)}
              />
              <p className='text-danger'>{errors?.opt2?.message}</p>

            </div>
            <div class="intend-lrn-search mb-3">
              <input class="form-control py-3 ps-3"
                type="search" placeholder="Enter Option 3 "
                aria-label="Search"
                defaultValue={location.state?.lecture?.option3}

                {...register('opt3', {
                  required: "fill this field"
                })
                }
                onChange={(e) => setOption3(e.target.value)}
              />
              <p className='text-danger'>{errors?.opt3?.message}</p>
            </div>

            <div class="intend-lrn-search mb-3">
              <input class="form-control py-3 ps-3"
                type="search" placeholder="Enter Option 4 "
                aria-label="Search"
                defaultValue={location.state?.lecture?.option4}

                {...register('opt4', {
                  required: "fill this field"
                })
                }
                onChange={(e) => setOption4(e.target.value)}
              />
              <p className='text-danger'>{errors?.opt4?.message}</p>

            </div>



            <p class="pt-4 pb-0 px-5 bold">Enter Correct Option Number
            </p>


            {/* radio buttons */}
            <div class="form-check">
              <input class="form-check-input"
                value="0" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                checked={answer == '0' ? true : false}

                {...register('correctopt', {
                  required: "fill this field"
                })
                }
                onClick={(val) => setAnswer(val.target.value)}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Option1
              </label>

            </div>

            <div class="form-check">
              <input class="form-check-input"
                value="1" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                checked={answer == '1' ? true : false}
                {...register('correctopt', {
                  required: "fill this field"
                })
                }
                onClick={(val) => setAnswer(val.target.value)}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Option2
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input"
                value="2" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                checked={answer == '2' ? true : false}
                {...register('correctopt', {
                  required: "fill this field"
                })
                }
                onClick={(val) => setAnswer(val.target.value)}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Option3
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input"
                type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                value="3"
                checked={answer == '3' ? true : false}
                {...register('correctopt', {
                  required: "fill this field"
                })
                }
                onClick={(val) => setAnswer(val.target.value)}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Option4
              </label>
              <p className='text-danger'>{errors?.correctopt?.message}</p>
            </div>

            {/* radio buttons */}

            {
              !singleQuestion ?
                <>
                  {totalQuestions <= 3 ?
                    <div class="intend-lrn-search mb-5 py-3">
                      <button
                        // onClick={addQuest}
                        class="btn btn-dark w-50 p-2"
                        type="submit">
                        add question
                        {/* <a class="text-decoration-none text-white"
                          href="">Add Question
                        </a> */}
                      </button>
                    </div>
                    :
                    <div class="intend-lrn-search mb-5 py-3">
                      <button
                        // onClick={submitquiz}
                        class="btn btn-dark w-50 p-2"
                        type="submit">
                        {/* <a class="text-decoration-none text-white"
                          href="">Submit Quiz</a> */}
                        Submit Quiz
                      </button>
                      {msg ?
                        <h5 className='mt-4'>Quiz{!singleQuestion ? 'Added Successfully' : 'Edited Successfully'}
                        </h5>
                        :
                        <></>
                      }
                    </div>
                  }
                </>
                :
                <div class="intend-lrn-search mb-5 py-3">
                  <button
                    // onClick={EditQuestion}
                    class="btn btn-dark w-50 p-2"
                    type="submit">
                    {/* <a class="text-decoration-none text-white"
                      href="">EDIT QUESTION
                    </a> */}
                    Edit Question
                  </button>
                  {msg ?
                    <h5 className='mt-4'>Quiz{!singleQuestion ? 'Added Successfully' : 'Edited Successfully'}
                    </h5>
                    :
                    <></>
                  }
                </div>
            }
          </form>

        </div>

      </TeacherStructure>

      <Footer />
    </>
  )
}
