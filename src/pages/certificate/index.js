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
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Comments from '../../components/comments';
import UserplaycourseLectures from '../../components/UserplaycourseLectures';
import Formbutton from '../../components/formbutton';
import TeacherLecturesButton from '../../components/teacherlecturesbutton';

export default function Certificate(props) {
  return (
    <>
      <Navbar />

      <section className='certificate'>
        <div className='container'>
          <div className='border border-dark mt-5 bg-dark '>
            <div className='text-center border border-dark m-2 bg-white'>
              <h2 className='pt-4' >CERTIFICATE OF APPRECIATION</h2>

              <h5 className='pt-4'>THIS CERTIFIES THAT</h5>
              <h1 className='user-name d-inline-block '>KHALID AHMED</h1>
              <p className='mt-2'>he successfully completed a training course of</p>
              <h4>ANY COURSE</h4>
              <div className='certificate-lg-paragraph'>
                <p className='mt-3'>Narrative paragraphs are the building blocks you need to tell a story in English. This type of paragraph explains something that happened. Think about a time that a friend or family member came to you and said, “guess what!”. They probably then told you a story about something that happened to them.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
