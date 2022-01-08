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


import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'
import Textbox from '../../components/textbox';

export default function TeacherProfile(props) {



  const [login, setLogin] = useState(true);
  const [uid, setuid] = useState();
  const [userdata, setuserdata] = useState({});

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [address, setaddress] = useState('')

  const location = useLocation();
  const history = useHistory();


  if (props.auth === null) {
    history.push('/')
  }
  if (props.userdata?.teacher != undefined) {
    if (props.userdata?.teacher === false) {
      history.push('/userdashboard')
    }
  }



  useEffect(() => {

    if (props.auth != null) {
      setLogin(true);
      setuid(props.auth.uid);
      console.log('hi')

      Firestore.collection('teachers').doc(props.auth.uid).get().then((snapshot) => {
        // setuserdata(snapshot.data());
        setname(snapshot.data()?.name)
        setemail(snapshot.data()?.email)
        setphone(snapshot.data()?.phone)
        setaddress(snapshot.data()?.address)
        // setname(userdata?.name)
      });
    }
    else {
      setLogin(false);
    }
  }, [uid]);



  // console.log(props?.userdata?.udata?.name)
  // console.log(name)


  // FOR EDITING DOCUMENT
  const editdoc = async (e) => {
    e.preventDefault()
    console.log("in edit fucnt")
    console.log(name)
    Firestore.collection("teachers").doc(uid).set({
      name: name,
      email: email,
      phone: phone,
      address: address
    })
      .then(() => {
        // alert("Document successfully edited!")
        setmsg(true)
        setTimeout(() => {
          setmsg(false)
        }, 3000);
      })
      .catch((error) => {
        alert("Error writing document: ", error)
      });
  }
  // FOR EDITING DOCUMENT


  // FORM VALIDATION

  const onSubmit = (data, e) => {
    editdoc(e)
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange"
  })

  // FORM VALIDATION
  const [msg, setmsg] = useState(false)

  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="profile-teacher">
          <div class="row">
            <h2 class="pb-4 m-0 ps-0 mt-4">Profile & Settings</h2>

            <div class="col-md-6">

              <form onSubmit={handleSubmit(onSubmit)}>

                <label for="" class="mb-1  mt-5 bold">Email</label>
                <div class="p-0 ms-0 mb-3">
                  <input
                    // onChange={(e) => { setemail(e.target.value) }}
                    readOnly
                    value={email}
                    class="form-control py-3 ps-3" type="search" placeholder="enter email" aria-label="Search" />
                </div>


                <label for="" class="mb-1 bold">Name</label>
                <div class="p-0 ms-0 mb-3">
                  <input
                    class="form-control py-3 ps-3"
                    placeholder="enter name"

                    defaultValue={props?.userdata?.udata?.name}
                    {...register('name', {
                      required: "fill this field",
                      maxLength: {
                        value: 45,
                        message: "Name should not exceed 45 characters"
                      }
                    })
                    }
                    onChange={(e) => { setname(e.target.value) }}
                  />
                  <p className='text-danger'>{errors?.name?.message}</p>
                </div>


                <label for="" class="mb-1 mt-1 bold">Phone</label>
                <div class="p-0 ms-0 mb-3">
                  <input
                    class="form-control py-3 ps-3"
                    placeholder="enter Phone"
                    type='text'
                    defaultValue={props?.userdata?.udata?.phone}
                    {...register('phone', {
                      required: "fill this field",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Enter valid Phone Number"
                      },
                      maxLength: {
                        value: 12,
                        message: "Phone should not exceed 12 digits"
                      }
                    })
                    }
                    onChange={(e) => { setphone(e.target.value) }}
                  />
                  <p className='text-danger'>{errors?.phone?.message}</p>
                </div>


                <label for="" class="mb-1 mt-1 bold">Address</label>
                <div class="p-0 ms-0 mb-3">
                  <input
                    class="form-control py-3 ps-3"
                    placeholder="Enter Address"

                    defaultValue={props?.userdata?.udata?.address}
                    {...register('address', {
                      required: "fill this field"
                    })
                    }
                    onChange={(e) => { setaddress(e.target.value) }}
                  />
                  <p className='text-danger'>{errors?.address?.message}</p>
                </div>


                <img class="w-100 mt-4" src="./images/avail3.jpg" alt="" />
                <h3 class="font-weight-bold mt-3">Profile Picture
                </h3>
                <input class="mt-2" type="file" />

                {/* <!--FOR SAVE BUTTON--> */}

                <div class="mb-5 py-3 mt-4">
                  <button
                    class="btn btn-dark w-50 p-2"
                    type="submit">
                    <a class="text-decoration-none text-white">
                      Save
                    </a>
                  </button>
                  {msg ? <h5 className='mt-3 text-danger'>Data has been updated</h5> : <></>}
                </div>

              </form>

            </div>

            <div class="col-md-6">

            </div>
          </div>
        </div>

      </TeacherStructure>

      <Footer />
    </>
  )
}
