import React from 'react'
import ecommerce from '../../assets/E-commerce laptop.png'
import mealify from '../../assets/mealify Laptop.png'
import Yummy from '../../assets/yummy Laptop.png'
import Fokir from '../../assets/fokir Laptop.png'
import Daniels from '../../assets/Daniels laptop.png'
import { Link } from 'react-router-dom'

export default function Projects() {
  return <>
    <div className="row g-5 ms-1">
      <div className=" col-md-6 ">
        <div className="dark-color rounded p-4 border-main">
        <img className='w-100' src={ecommerce} alt="" />
        <ul className='my-4'>
          <li className='text-white '>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>HTML</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>CSS</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>JS</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>Bootstrap</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>Reactjs</span>
          </li>
        </ul>
        <div className="row justify-content-between">
          <div className="col-md-6">
            <span className='text-white fs-5 text-start'>E-Commerce</span>
          </div>
          <div className="col-md-6 text-end">
            <Link to={"https://omerbag-9.github.io/E-commerce/#/"} target='_blank' className='text-white fs-5'>Go to Website <i class="fa-solid fa-arrow-up-right-from-square fs-6 text-white"></i></Link>
          </div>
        </div>
        </div>
      </div>
      {/* ecommerce */}
      <div className=" col-md-6 ">
        <div className="dark-color rounded p-4 border-main">
        <img className='w-100' src={Yummy} alt="" />
        <ul className='my-4'>
          <li className='text-white '>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>HTML</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>CSS</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>JS</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>jQuery</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>Bootstrap</span>
          </li>
        </ul>
        <div className="row justify-content-between">
          <div className="col-md-6">
            <span className='text-white fs-5 text-start'>Yummy</span>
          </div>
          <div className="col-md-6 text-end">
            <Link to={"https://yummyprojectroute.netlify.app/"} target='_blank' className='text-white fs-5'>Go to Website <i class="fa-solid fa-arrow-up-right-from-square fs-6 text-white"></i></Link>
          </div>
        </div>
        </div>
        
      </div>
      {/* Yummy */}
      <div className=" col-md-6">
        <div className=" dark-color rounded p-4 border-main">
        <img className='w-100' src={Daniels} alt="" />
        <ul className='my-4'>
          <li className='text-white '>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>HTML</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>CSS</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>JS</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>Bootstrap</span>
          </li>
        </ul>
        <div className="row justify-content-between">
          <div className="col-md-6">
            <span className='text-white fs-5 text-start'>Daniels protfolio</span>
          </div>
          <div className="col-md-6 text-end">
            <Link to={"https://danielportofolio.netlify.app/"} target='_blank' className='text-white fs-5'>Go to Website <i class="fa-solid fa-arrow-up-right-from-square fs-6 text-white"></i></Link>
          </div>
        </div>
        </div>
        
      </div>
      {/* Daniels */}
      <div className=" col-md-6 ">
        <div className="dark-color rounded p-4 border-main">
        <img className='w-100' src={mealify} alt="" />
        <ul className='my-4'>
          <li className='text-white '>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>HTML</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>CSS</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>Bootstrap</span>
          </li>
        </ul>
        <div className="row justify-content-between">
          <div className="col-md-6">
            <span className='text-white fs-5 text-start'>Mealify</span>
          </div>
          <div className="col-md-6 text-end">
            <Link to={"https://mealifyroute.netlify.app/"} target='_blank' className='text-white fs-5'>Go to Website <i class="fa-solid fa-arrow-up-right-from-square fs-6 text-white"></i></Link>
          </div>
        </div>
        </div>
        
      </div>
      {/* mealify */}
      <div className=" col-md-6 ">
        <div className="dark-color rounded p-4 border-main">
        <img className='w-100' src={Fokir} alt="" />
        <ul className='my-4'>
          <li className='text-white '>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>HTML</span>
            <span className=' border-grey p-1 rounded opacity-75 fw-lighter me-2'>CSS</span>
          </li>
        </ul>
        <div className="row justify-content-between">
          <div className="col-md-6">
            <span className='text-white fs-5 text-start'>Fokir</span>
          </div>
          <div className="col-md-6 text-end">
            <Link to={"https://fokirprojectroute.netlify.app/"} target='_blank' className='text-white fs-5'>Go to Website <i class="fa-solid fa-arrow-up-right-from-square fs-6 text-white"></i></Link>
          </div>
        </div>
        </div>
        
      </div>
      {/* Fokir */}
    </div>
  </>
}
