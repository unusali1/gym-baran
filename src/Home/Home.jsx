import React from 'react'
import "./Home.css";
import nike from "../Assets/nike-xxl.png";
import adidas from "../Assets/adidas.PNG";
import puma from "../Assets/puma.PNG";
import reebok from "../Assets/reebook.PNG";
import man from "../Assets/man.PNG";
import exersise from "../Assets/exersice.PNG";
import challenge from "../Assets/challenge.PNG";
import kalllogo from "../Assets/kall-logo.PNG";
import { BsChevronRight } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import homelogo from "../Assets/homelogo.PNG"
import homelogo2 from "../Assets/homelogo2.PNG"
import Nav from './Navbar/Nav';

const Home = () => {
  return (
    <div>
      <Nav />
      <div className='home-container'>
        <div className='home-text sm:w-16 md:ml-12 lg:mt-32 lg:ml-24 lg:w-96'>
          <h1 className='text '>
            Healthy in side <br></br><span className='fresh'>fresh</span> out side
          </h1>
          <p className='para'>
            Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.
          </p>
          <div className='btn-home flex '>
            <button className=' lg:w-44 mt-4 flex lg:ml-1 p-2 lg:h-10 rounded-lg bg-blue-900 text-slate-100 '>Get started  <BsChevronRight className=' text-black ml-12 mt-1 bg-white rounded-lg' /></button>
            <button className='lg:w-44 mt-4  flex ml-8 p-2 lg:h-10 rounded-lg  text-cyan-700 bg-transparent'> <BsFillPlayCircleFill className='  text-black ml-4 lg:mr-6 mt-1 bg-white rounded-lg sm:mr-2' />Learn more </button>
          </div>
          <div className='mt-12'>
            <h1 className='mt-8 '>Brands</h1>
            <div className='flex'>
              <img className='h-12 ml-4' src={nike} alt='not found' />
              <img className='ml-8 h-12' src={adidas} alt='not found' />
              <img className=' ml-8 h-12' src={puma} alt='not found' />
              <img className='ml-8 h-12' src={reebok} alt='not found' />
            </div>
          </div>
        </div>
        <div className='home-img' >
          <div className='home-card1 ml-24 flex '>
            <img className='ml-2' src={homelogo} alt='not found' />
            <div className='mt-2 p-2'>
              <h5 >150+</h5>
              <p className='opacity-75'>Members</p>
            </div>
          </div>
          <div>
            <div className='home-card2 mt-24 ml-96 '>
              <img className='ml-10 mt-4' src={homelogo2} alt='not found' />
              <div className='mt-2 p-2'>
                <h5 className='ml-4' >Zaqky Simorang</h5>
                <p className='opacity-75 ml-12'>Trainer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex healty-conatiner'>
        <div className=' w-96 ml-24 p-4 mt-20'>
          <h1 className='healthy'>Healthy in side <br></br> fresh out side</h1>
        </div>
        <div className='lg:ml-32 lg:mt-28 p-4 '>
          <p className='healty-para'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>
        </div>
      </div>

      <div>
        <div className='exercise-days' >
          <div className='flex m-6'>

            <img className="w-32 h-24 mt-12 ml-4" src={man} alt=' not found' />
            <div className='ml-4'>
              <h4 className='text-white mt-16 font-[Poppins]'>Get that 11 line in 30 days</h4>
              <button className='flex text-white ' >Leanrn More <BsArrowRightShort className=' ml-3 mt-1' /></button>
            </div>
          </div>
          <div className='flex m-6'>

            <img className='w-32 h-24 mt-12 ml-4' src={exersise} alt=' not found' />
            <div className='ml-4'>
              <h4 className='text-white mt-16 font-[Poppins] '>14 Days sherd challenge</h4>
              <button className='flex text-white ' >Leanrn More  <BsArrowRightShort className=' ml-3 mt-1' /> </button>
            </div>
          </div>
          <div className='flex m-6'>

            <img className="w-32 h-24 mt-12 ml-4" src={challenge} alt=' not found' />
            <div className='ml-4'>
              <h4 className='text-white mt-16 font-[Poppins] '>Get flat belly in 30 days</h4>
              <button className='flex text-white ' >Leanrn More  <BsArrowRightShort className=' ml-3 mt-1' /></button>
            </div>
          </div>
        </div>
      </div>

      <div className='full-body '>
        <div className='body-img'>
          <div className='kall'>
            <div>
              <img className='kalllogo' src={kalllogo} alt="not found" />
            </div>
            <div className='fat'>
              <h5>800 kall <br></br> <span className='fatp'>Burn fat</span></h5>
            </div>
          </div>

        </div>
        <div className='best-body'>
          <h4 className='workout'>Best full body <br></br> workout to lose fat</h4>
          <p className='important'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
          <button className='flex ml-6 bg-blue-700 p-2 text-white rounded-2xl'>
            Get started  <BsArrowRightShort className='ml-6 mt-1' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home