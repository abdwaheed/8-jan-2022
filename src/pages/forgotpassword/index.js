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
import Textbox from '../../components/textbox';
import Formbutton from '../../components/formbutton';
import Formstructure from '../../components/formstructure';
import Footer from '../../components/footer';
import Comments from '../../components/comments';

export default function ForgotPassword(props) {

  const [email, setemail] = useState('bometi1635@veb65.com')


  const forgotpass = async (e) => {
    e.preventDefault()
    console.log(firebase.auth())
    try {

      const res = await firebase.auth().sendPasswordResetEmail('abdwaheed619@gmail.com')
      alert('hi')
    } catch (error) {
      alert(error)
    }


  }



  return (
    <>
      <Navbar />
      <Searchbar />

      <section class="signin">
        <div class="container-fluid">
          {/* <!-- error above line--> */}
          <div class="row">
            <div class="col-md-6 pt-3" styles="background-color: #1f4363;">
              <div class="left">
                <h1>FIND YOUR ACCOUNT</h1>
                <h3 class="mt-5">HELP LINE <span class="mt-3">+92 434 43293423</span></h3>
              </div>
            </div>
            <div class="col-md-6" styles="background-color: #d1d3d4;">
              {/* <div class=" form bg-light right"> */}
              <Formstructure style='right'>

                {/* <!-- <h1>Forgot Password</h1> --> */}
                <form>
                  <h4>Enter your Email Id to recover your password</h4><br />
                  {/* <div class="form-group mt-3">
                    <h4>Enter your Email Id to recover your password</h4><br />
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                  </div> */}

                  <Textbox type='email' placeholder='Enter Your Email' />



                  {/* <div class="form-group text-center">
                    <input type="submit" value="Recover Password" class="btn btn-success w-90 mb-1" /><br />
                    <a href="signin.html">Click Here To Login</a>

                  </div> */}

                  <button onClick={(e) => { forgotpass(e) }}>
                    forgot pass</button>

                  <Formbutton type='submit' classname='btn btn-success w-90 mb-1' value='Recover Password'
                    href='/signin' text='Click Here To Login' />


                </form>
                {/* </div> */}
              </Formstructure>
            </div>
            {/*
                <!-- <div class ="col-md-6">
                <div class ="right">
                <div class ="form-signin">

                <form>
                <div class ="form-group mt-3">

                <h5>Enter your Email Id to recover your password</h5><br>
                <input type ="email" class ="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email">
                </div>


                <div class ="form-group mt-3">

                <a href="./user-portal/dashboard.html"><input type ="submit" value="SEND TO EMAIL"
                class ="btn btn-success form-control"></a>
                </div>

                <div class ="form-group mt-3">

                <a href="signup.html">Create New Account</a>

                </div>

                </form>


                </div>
                </div>

                </div> --> */}

          </div>
        </div>
      </section>

    </>
  )
}
