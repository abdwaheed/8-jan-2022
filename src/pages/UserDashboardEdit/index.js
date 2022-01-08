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

// FIREBASE IMPORTS


import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserStructure from '../../components/userstructure';
import Textbox from '../../components/textbox';


export default function UserDashboardEdit(props) {



  const [login, setLogin] = useState(true);

  const [uid, setuid] = useState();

  const [userdata, setuserdata] = useState({});

  const location = useLocation();
  const history = useHistory();

  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === true) {
      history.push('/teachermainpage')
    }
  }


  useEffect(() => {

    if (props.auth) {
      setLogin(true);
      setuid(props.auth.uid);
      setuserdata(props.userdata?.udata);
      console.log(props.userdata);
      setName(userdata?.name);
      setPhone(userdata?.phone);
      setaddress(userdata?.address);
    }
    else {
      setLogin(false);
    }

  }, [uid]);

  console.log(props?.userdata);



  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setaddress] = useState('')

  // // EDIT NEW DOCUMENT FUCNTION

  const editdoc = async (e) => {
    e.preventDefault()

    Firestore.collection("students").doc(uid).set({
      name: name,
      email: userdata?.email,
      phone: phone,
      address: address
    })
      .then(() => {
        // console.log("Document successfully edited!");
        setmsg(true)
        setTimeout(() => {
          setmsg(false)
        }, 3000);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  // // EDIT NEW DOCUMENT FUCNTION


  // FORM VALIDATION

  const onSubmit = (data, e) => {
    // console.log(email)
    editdoc(e)
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange"
  })

  // FORM VALIDATION

  const [msg, setmsg] = useState(false)


  // function setValues(ev) {
  //   const { name, value } = ev.target
  //   switch (name) {
  //     case "email":
  //       setName(value);
  //       break;
  //     case "password":
  //       setPhone(value);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <>
      <Navbar />
      <Searchbar />

      <UserStructure email={userdata?.email} isStudent={true} btnvalue='Save' onClick={editdoc} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <tr>
              <h3 class="pt-3">MY PROFILE</h3>
            </tr>
            <tr>
              <td class="ps-2">Roll No</td>
              <td>:</td>
              <td>
                <Textbox type='text' value={props?.auth?.uid} placeholder='Name'
                  readonly
                />
                {/* <input class="bg-light" type="text" value={props?.auth?.uid} placeholder="1234" readonly /> */}
              </td>
            </tr>


            <tr>
              <td class="ps-2">Email</td>
              <td>:</td>
              <td>
                <Textbox type='text' value={userdata?.email} placeholder='Name'
                  readonly
                />
                {/* <input class='bg-light' type="text" value={userdata?.email} readonly /> */}
              </td>
            </tr>


            <tr>
              <td class="ps-2">Name</td>
              <td>:</td>
              <td>

                <Textbox type='text'
                  // value={name}
                  defaultValue={props?.userdata?.udata?.name}
                  onChange={(e) => { setName(e.target.value) }}
                  placeholder='Name'
                  register={
                    {
                      ...register('name', {

                        required: "fill this field",
                        maxLength: {
                          value: 45,
                          message: "Name should not exceed 45 characters"
                        }
                      })
                    }
                  }
                />

                <p className='text-danger'>{errors?.name?.message}</p>
                {/* <input type="text" value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  register={{
                    ...register('name', {
                      required: "fill this field", maxLength: {
                        value: 45,
                        message: "Name should not exceed 45 characters"
                      }
                    })
                  }} /> */}
              </td>
            </tr>

            <tr>
              <td class="ps-2">Ph.No</td>
              <td>:</td>
              <td>
                <Textbox type='text' defaultValue={props?.userdata?.udata?.phone}
                  placeholder='Phone'
                  onChange={(e) => { setPhone(e.target.value) }}
                  register={

                    {
                      ...register('phone', {
                        required: "fill this field",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Enter valid Phone Number"
                        },
                        maxLength: {
                          value: 12,
                          message: "phone should not exceed 45 characters"
                        }
                      })
                    }

                  } />
                <p className='text-danger'>{errors?.phone?.message}</p>
                {/* <input type="text" value={phone}
                onChange={(e) => { setPhone(e.target.value) }} /> */}
              </td>
            </tr>
            <tr>
              <td class="ps-2">Address</td>
              <td>:</td>
              <td>
                <Textbox type='text' defaultValue={props?.userdata?.udata?.address}
                  placeholder='Address'
                  onChange={(e) => { setaddress(e.target.value) }}
                  register={

                    {
                      ...register('address', {
                        required: "fill this field"
                      })
                    }

                  } />
                <p className='text-danger'>{errors?.address?.message}</p>


                {/* <input type="text" value={address}
                  onChange={(e) => { setaddress(e.target.value) }} /> */}
              </td>
            </tr>
            <tr>
              <input type="submit" value='Save' />
            </tr>
            {
              msg ?

                <h5 className='mt-4'>Data Edited Successfully</h5>

                :
                <></>
            }

          </>
        </form>
      </UserStructure>

      <Footer />
    </>
  )
}
