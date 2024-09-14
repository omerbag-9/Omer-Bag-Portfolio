import React from 'react'
import { Link } from 'react-router-dom'
import Ecommerce from '../../assets/E-commerce.png'
import Yummy from '../../assets/Yummy.png'
import Mealify from '../../assets/Mealify.png'
import Daniles from '../../assets/Daniels.png'
import html from '../../assets/icons.svg'
import css from '../../assets//icons (2).svg'
import react from '../../assets/icons (1).svg'
import js from '../../assets/bootstrap.svg'
import jQuery from '../../assets/jquery.svg'

export default function Home() {
  return (
   <>
    <div className="">
      <h1 className='text-main pb-1'>Front-End Developer</h1>
      <div className="light-box m-auto position-absolute start-50 top-50 z-n1"></div>
      <div className="row g-5">
        <div className="col-md-6">

          <div className="row g-2">
            <div className="col-md-6">
              <div className="dark-color text-white p-5 rounded-3 text-center">
                <h2 className='h1'>15<span className='text-main'>+</span></h2>
                <p className='text-grey'>Completed Projects</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dark-color text-white p-5 rounded-3 text-center">
                <h2 className='h1'>1Year</h2>
                <p className='text-grey'>React Developer</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dark-color text-white p-5 rounded-3 text-center">
                <h2 className='h1'>Route</h2>
                <p className='text-grey'>Front-end diploma</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dark-color text-white p-5 rounded-3 text-center">
                <h2 className='h1'>Flexible</h2>
                <p className='text-grey w-100'>with our users</p>
              </div>
            </div>

          </div>

        </div>

        <div className="col-md-6">
          <div className="dark-color text-white rounded-3 h-100 row align-items-center">
            <div className="col-md-12">
              <h3>Your trusted React developer</h3>
              <p className='text-grey'>Experienced React developer ready to bring your digital projects to life. Let's create engaging web experiences together!</p>
              <Link to={"http://www.linkedin.com/in/omer-bag-a20562287"} target='_blank' className='text-main touch-link'>Get in touch</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="dark-color text-white rounded-3 h-100 text-center p-4">
            <h2>Featured Project</h2>
            <Link to={"/projects"} className='text-main'>View all</Link>
            <div className="w-100 ">
              {/*carousel*/}
              <div id="carouselExampleSlidesOnly" class="carousel slide pt-3" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={Ecommerce}  class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                  <img src={Yummy}  class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                  <img src={Mealify}  class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                  <img src={Daniles}  class="d-block w-100" alt="..."/>
                  </div>
                </div>
              </div>
              {/* /carousel */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="dark-color text-white rounded-3 h-100 p-2">
          <h2>Skills</h2>
          <div className="row g-2 justify-content-around align-items-center h-100 p-2">
            <div className="col-md-6 text-center"><img src={html} alt="" /></div>
            <div className="col-md-6 text-center"><img src={js} alt="" /></div>
            <div className="col-md-6 text-center"><img src={css} alt="" /></div>
            <div className="col-md-6 text-center"><img src={react} alt="" /></div>
            <div className="col-md-6 text-center"><img src={jQuery} alt="" /></div>
          </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
