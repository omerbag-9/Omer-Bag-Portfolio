import React from 'react'
import { Link } from 'react-router-dom'

export default function Contacts() {
  return (
    <>
      <div className="w-75 pt-5">
      <h1 className='text-white'>Contact me</h1>
      </div>
    <div className="contact w-75 dark-color m-auto border-main rounded p-4">
      <div className="gmail mb-4">
      <i class="fa-regular fa-envelope text-main mx-2 fs-3"></i>
      <Link to={"https://mail.google.com/mail/?view=cm&fs=1&to=omerbagprog@gmail.com&su=SUBJECT"} target='_blank' className='fs-3'>Email : <u>omerbagprog@gmail.com</u></Link>
      </div>
      <div className="LinkedIn mb-4">
      <i class="fa-brands fa-linkedin text-main mx-2 fs-3"></i>
      <Link to={"http://www.linkedin.com/in/omer-bag-a20562287"} target='_blank' className='fs-3'>LinkedIn : <u>omerbag.com</u></Link>
      </div>
      <div className="Phone mb-4">
      <i class="fa-solid fa-phone text-main mx-2 fs-3"></i>
      <Link className='fs-3 text-white'>Phone : +201200454444</Link>
      </div>
      <div className="cv pb-2">
        <Link to={"https://docs.google.com/document/d/e/2PACX-1vQMIIMOBbozZHMugNxO10s77kRovpVhaw8Y-I-eUoii-ahOvM2N8Ui8psArcqT4FFCugZNVqOo8O5O-/pub"} target='_blank'><button className='btn bg-main border-0 w-100 text-white'>My Resume</button></Link>
      </div>
    </div>
    </>
  )
}
