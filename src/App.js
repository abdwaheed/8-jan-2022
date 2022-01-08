import './styles/App.css';
import './styles/global.css';
import MainPage from './pages/main';
import CoursesPage from './pages/courses';
import Onlineverification from './pages/onlineverification';
import Aboutus from './pages/aboutus';
import Contactus from './pages/contactus';
import SignUp from './pages/signup';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SignIn from './pages/signin';
import ContactUs from './pages/contactus';
import Pcourses from './pages/popular-courses';
import ForgotPassword from './pages/forgotpassword';
import UserDashboard from './pages/userdashboard'
import UserSelectedCourses from './pages/userselectedcourses';
import UserCompletedCourses from './pages/usercompletedcourses';
import UserNewCourse from './pages/usernewcourse';
import UserplayCourse from './pages/userplaycourse';
import UserCourseVideo from './pages/usercoursevideo';
import UserQuiz from './pages/userquiz';
import UserQuizStart from './pages/UserQuizStart';
import UserQuizResult from './pages/UserQuizResult';
import UserDashboardEdit from './pages/UserDashboardEdit';
import TeacherMainPage from './pages/teachermainpage';
import TeacherNewCourseP1 from './pages/teachernewcoursep1';
import TeacherNewCourseP2 from './pages/teachernewcoursep2';
import TeacherIntendedLearners from './pages/teacherintendedlearners';
import TeacherCoursePreview from './pages/teachercoursepreview';
import TeacherCourseLanding from './pages/teachercourselanding';
import TeacherProfile from './pages/teacherprofile';
import TeacherUploadLecture from './pages/teacheruploadlecture';
import TeacherEditLecture from './pages/teachereditlecture';
import TeacherStudentsP1 from './pages/teacherstudentsP1';
import TeacherStudentsP2 from './pages/teacherstudentsP2';
import TeacherQuiz from './pages/teacherquiz';
import Quizzes from './pages/quizzes';
import ActualQuiz from './pages/actualquiz';
import QuizQuestions from './pages/quizquestions';
import Certificate from './pages/certificate';

import UserDiscussion1 from './pages/userdiscussion1';
import UserDiscussion2 from './pages/userdiscussion2';
import UserDiscussion3 from './pages/userdiscussion3';
import UserAllQuizzes from './pages/userallquizzes';
import UserQuizTaking from './pages/userquiztaking'

import TeacherLectures from './pages/teacherlectures';
// import ScrollToTop from './components / ScrollTop';

import { useEffect, useState } from 'react'
import firebase from "firebase/app";
import { Auth, Firestore, Storage, Functions } from './config/firebase'
// import { useState } from 'react/cjs/react.development';

function App() {

  const [userauth, setuserauth] = useState();
  const [userdataM, setuserdataM] = useState();

  const getdata = async (user) => {
    // const token = await firebase.auth().currentUser.getIdTokenResult();
    // const isteacher = token.claims.teacher;

    const role = Functions.httpsCallable('studentClaims');
    const isteacher = await role({ email: user.email })


    console.log(isteacher)
    console.log('above is teacher claim')

    const udata = await Firestore.collection(`${isteacher?.data?.teacher ? 'teachers' : 'students'}`).doc(user.uid).get();

    setuserdataM({ teacher: isteacher.data?.teacher, udata: udata.data() })
    // if (isteacher)
    // else
    //   setuserdataM({ teacher: false, udata: udata.data() })

    // setuserdataM(prevData => ({ ...prevData, teacher: isteacher, udata: udata.data() }))
    // setuserdataM(prevData => ([...prevData, { teacher: isteacher, udata: udata.data() }])
    // setuserdataM(udata.data());
  }

  useEffect(() => {
    Auth.onAuthStateChanged(user => {
      if (user) {

        console.log(window.localStorage.getItem('userdata'))

        console.log(user)
        setuserauth(user);
        getdata(user);
      }
      else {
        setuserauth(null);
        setuserdataM(null)
      }
    })
  }, [])

  // console.log(userdataM)

  return (
    <Router>


      {/* FOOTER ROUTES */}


      <Route path='/facebook' component={() => {
        window.location.href = 'https://facebook.com';
        return null;
      }} />

      <Route path='/gmail' component={() => {
        window.location.href = 'https://gmail.com';
        return null;
      }} />

      <Route path='/twitter' component={() => {
        window.location.href = 'https://twitter.com';
        return null;
      }} />

      {/* GENERAL WEBSITE ROUTES */}


      <Route path='/courses' component={() => (
        <CoursesPage auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/verification' component={() => (
        <Onlineverification auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/contactus' component={() => (
        <ContactUs auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/about' component={() => (
        <Aboutus auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/signin' component={() => (
        <SignIn auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/signup' component={() => (
        <SignUp auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/popularcourse' component={() => (
        <Pcourses auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/forgotpassword' component={() => (
        <ForgotPassword auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/marketjobs' component={() => {
        window.location.href = 'https://google.com';
        return null;
      }} />



      {/* USER PORTAL ROTUES */}


      <Route path='/userselectedcourses' component={() => (
        <UserSelectedCourses auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userdashboard' component={() => (
        <UserDashboard auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/usercompletedcourses' component={() => (
        <UserCompletedCourses
          auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/usernewcourse' component={() => (
        <UserNewCourse auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userplaycourse' component={() => (
        <UserplayCourse auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/usercoursevideo' component={() => (
        <UserCourseVideo auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userallquizzes' component={() => (
        <UserAllQuizzes auth={userauth} userdata={userdataM} />
      )} />


      <Route path='/userquiz' component={() => (
        <UserQuiz auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userquiztaking' component={() => (
        <UserQuizTaking auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userquizstart' component={() => (
        <UserQuizStart auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userquizresult' component={() => (
        <UserQuizResult auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userdashboardedit' component={() => (
        <UserDashboardEdit auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userdiscussion1' component={() => (
        <UserDiscussion1 auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userdiscussion2' component={() => (
        <UserDiscussion2 auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/userdiscussion3' component={() => (
        <UserDiscussion3 auth={userauth} userdata={userdataM} />
      )} />


      <Route path='/certificate' component={() => (
        <Certificate auth={userauth} userdata={userdataM} />
      )} />




      {/* TEACHER PORTAL ROTUES */}

      {/* <Route path='/userdashboard' component={UserDashboard} /> */}

      <Route path='/teachermainpage' component={() => (
        <TeacherMainPage auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teachernewcourseP1' component={() => (
        <TeacherNewCourseP1 auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teachernewcourseP2' component={() => (
        <TeacherNewCourseP2 auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teacherintendedlearners' component={() => (
        <TeacherIntendedLearners auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teacheruploadlecture' component={() => (
        <TeacherUploadLecture auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teachereditlecture' component={() => (
        <TeacherEditLecture auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teachercoursepreview' component={() => (
        <TeacherCoursePreview auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teacherprofile' component={() => (
        <TeacherProfile auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teachercourselanding' component={() => (
        <TeacherCourseLanding auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teacherstudentsP1' component={() => (
        <TeacherStudentsP1 auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teacherstudentsP2' component={() => (
        <TeacherStudentsP2 auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teacherlectures' component={() => (
        <TeacherLectures auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/teacherquiz' component={() => (
        <TeacherQuiz auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/quizzes' component={() => (
        <Quizzes auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/actualquiz' component={() => (
        <ActualQuiz auth={userauth} userdata={userdataM} />
      )} />

      <Route path='/quizquestions' component={() => (
        <QuizQuestions auth={userauth} userdata={userdataM} />
      )} />


      <Route path='/' exact component={() => (
        <MainPage auth={userauth} userdata={userdataM} />
      )
      } />


      {/* </ScrollToTop>, */}
    </Router >
  );
}

export default App;
