import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import myImg from '../../assets/profilepic.jpg'

export default function SideBar() {
  return (
    <>
            <div className='p-'>
      <div className="rounded-circle mt-4 px-5">
        <img src={myImg} className='w-100 rounded- rounded-circle' alt="" />
      </div>
      <div className="text-center">
      <h2 className='my-2 text-white'>Omer Bag</h2>
      <h6 className='my-2 text-grey'>Web Developer</h6>
      </div>
      <ul className='text-center'>
        <li className='mt-5'><NavLink to={""} className={  ({isActive})=> isActive == true ? 'opacity-100 text-main ' : 'opacity-75'  }><i class="fa-solid fa-user-tie user mx-2"></i>Home</NavLink></li>
        <li className='mt-5'><NavLink to={"projects"} className={  ({isActive})=> isActive == true ? 'opacity-100 text-main ' : 'opacity-75'  }><i class="fa-solid fa-list-check project mx-2"></i>Projects</NavLink></li>
        <li className='mt-5'><NavLink to={"about"} className={  ({isActive})=> isActive == true ? 'opacity-100 text-main ' : 'opacity-75'  }><i class="fa-regular fa-address-card about mx-2"></i>About</NavLink></li>
        <li className='mt-5'><NavLink to={"contact"} className={  ({isActive})=> isActive == true ? 'opacity-100 text-main ' : 'opacity-75'  }><i class="fa-regular fa-envelope contact mx-2"></i>Contact</NavLink></li>
      </ul>
    </div>

    </>
  )
}
