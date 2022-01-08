import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Comments from '../../components/comments';
import UserStructure from '../../components/userstructure';

export default function UserNewCourse(props) {
  return (
    <>
      <Navbar />
      <Searchbar />


      <UserStructure isStudent={true} value='hello'>

        <h3 class="py-3 px-4">AVAILABLE COURSES</h3>
        <div class="new-th">
          <form action="">
            <table class="w-100">
              <thead>
                <tr>
                  <th>
                    {/* <!-- <p class="mt-3"><input type="checkbox"></p> --> */}
                  </th>
                  <th class="pt-2">
                    SELECT NEW COURSE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" class="helll" /></td>
                  <td>Powerpoint XL</td>
                </tr>
                <tr>
                  <td><input type="checkbox" class="helll" /></td>
                  <td>COREL DRAW 9-12</td>
                </tr>
                <tr>
                  <td><input type="checkbox" class="helll" /></td>
                  <td>ABC</td>
                </tr>
                <tr>
                  <td><input type="checkbox" class="helll" /></td>
                  <td>EXCEL</td>
                </tr>
                <tr>
                  <td><input type="checkbox" class="helll" /></td>
                  <td>WORD</td>
                </tr>
                <tr>
                  <td><input type="checkbox" class="helll" /></td>
                  <td>ZOOM</td>
                </tr>
                <tr>
                  <td><input type="checkbox" class="helll" /></td>
                  <td>HAWAAI</td>
                </tr>

              </tbody>
            </table>

            {/* <div class="text-center">
              <input type="submit" class="btn btn-success w-50" />
            </div> */}
          </form>
        </div>
      </UserStructure>

      <Footer />

    </>
  )
}
