import '../App.css'
import React from 'react'
import codeye from '../assets/images/codeye.png'
import textBlock from '../assets/images/textBlock.png'
import viewButton from '../assets/images/viewButton.png'
import musicforall from '../assets/images/m4a.png'
import workout from '../assets/images/workout.png'
import canvyeth from '../assets/images/canvyeth.png'
import lemon from '../assets/images/lemon.png'
import facebook from '../assets/images/facebook.png'
import ProjectCard from './projectCard'
import { SiGithub } from 'react-icons/si'



const Projects = () => {
  return (
    <div className='flex-initial justify-center items-center py-10 desktop:mx-[25.5rem] mobile:mx-4 desktop:w-[815px] h-[170px] mobile:w-[210px]' >
        <h1 className='text-white desktop:text-7xl mobile:text-6xl'>WORK</h1>
        <img src={textBlock} alt='textBlock' className='desktop:mx-40 desktop:w-20 desktop:-my-[4rem] mobile:w-14 mobile:mx-36 mobile:-my-12 ' />
        <div className='desktop:my-40 mobile:my-20'>
        <img src={codeye} alt='codeye' className='mobile:w-full desktop:w-[350px]' />
          <div className='mobile:my-0 desktop:my-6'>
            <a href="https://github.com/ZeroScriptz/code-eye-ai" className='image1'>
            <SiGithub className='desktop:text-5xl text-white  hover:scale-105 transition duration-500 ease-in-out hover:rotate-6 mobile:text-4xl'/> 
            </a>
            <a href='https://code-eye.vercel.app/' className='w-50'>
            <img src={viewButton} alt='viewButton' className='desktop:mx-[4rem]  desktop:-my-12  hover:scale-105 transition duration-500 ease-in-out hover:-rotate-6 mobile:mx-14 mobile:-my-10'  />
            </a>
            
            <h1 className='desktop:mx-50 desktop:my-2 desktop:text-4xl text-white mobile:text-3xl mobile:my-1 mobile:mx-44 mobile:w-96'>CODE-EYE</h1>
          </div>

        </div>
<div className='mobile:-my-[4.5rem]'>
        <img src={musicforall} className='desktop:w-[350px] desktop:mx-[30rem] desktop:-my-[29rem]' /> 
        <a href='https://github.com/ZeroScriptz/music4all'>
          <SiGithub className='text-white desktop:text-5xl desktop:my-[30rem] desktop:mx-[30rem] hover:scale-105 transition duration-500 ease-in-out hover:rotate-6 mobile:text-4xl'/>
        </a>
        <a href='https://musicforall.netlify.app/' className='image2'>
          <img src={viewButton} alt='viewButton' className='desktop:mx-[34rem] desktop:-my-[33rem] mobile:mx-12 mobile:-my-10  hover:scale-105 transition duration-500 ease-in-out hover:-rotate-6 mobile:text-4xl' />
        </a>  
          <h1 className='text-white desktop:text-4xl desktop:mx-[41rem] desktop:my-[30.75rem] w-full mobile:mx-40 mobile:my-1 mobile:text-3xl'>Music 4 All</h1>

          <img src={workout} className="desktop:w-[350px] desktop:mx-[60rem] desktop:-my-[49.5rem]" />
          <a href="https://github.com/ZeroScriptz/workout-form">
          <SiGithub className='text-white desktop:text-5xl desktop:my-[50.25rem] desktop:mx-[60rem] mobile:text-4xl'  />
          </a>
          <a href="https://gymworkoutform.netlify.app/" className='image3'>
          <img src={viewButton} alt='viewButton' className='desktop:mx-[65rem] desktop:-my-[53rem] mobile:mx-12 mobile:-my-10' />
          </a>
          <h1 className='text-white desktop:my-[50.5rem] desktop:text-4xl desktop:mx-[72rem] w-80 mobile:text-3xl mobile:my-1 mobile:mx-40'>Workout Form</h1>
          </div>



    <div className='desktop:-my-[48rem] mobile:my-20' >
      <img src={canvyeth} className='desktop:w-[350px]'/>
      <a href="https://github.com/ZeroScriptz/blockchain-web3app">
      <SiGithub className='text-white desktop:text-5xl my-4 mobile:text-4xl' />
      </a>
      <a href="https://canvyeth.netlify.app/" className='image4'>
      <img src={viewButton} className='desktop:mx-20 desktop:-my-16 mobile:mx-16 mobile:-my-14' />
      </a>
      <h1 className='text-white desktop:text-4xl desktop:mx-52 desktop:my-6 mobile:mx-44 mobile:text-3xl mobile:my-4'>CanvyETH</h1> 

      <img src={facebook}  className='desktop:w-[350px] desktop:mx-[30rem] desktop:-my-[20rem]' />
      <a href='https://github.com/ZeroScriptz/facebookmeta-login-clonee'>
      <SiGithub className='text-white desktop:text-5xl desktop:mx-[30rem] desktop:my-[21rem] mobile:text-4xl mobile:my-3 ' /> 
      </a>
      <a href='https://facebooklogin-clone.netlify.app/' className='image5'>
      <img src={viewButton} className='desktop:mx-[34rem] desktop:-my-[24rem] mobile:mx-12 mobile:-mt-[3.5rem]' />
      </a>
      <h1 className='text-white desktop:text-4xl desktop:mx-[42rem] desktop:my-[21.5rem] w-96 mobile:text-3xl mobile:mx-[10rem] mobile:-mt-10'>Login Form</h1> 
      
      <img src={lemon} className='desktop:w-[350px] desktop:mx-[60rem] desktop:-my-[40rem] mobile:mt-6' />
      <a href='https://github.com/ZeroScriptz/little-lemon-final'>
      <SiGithub className='text-white desktop:text-5xl desktop:my-[41rem] desktop:mx-[60rem] mobile:text-4xl mobile:mt-3' />
      </a>
      <a href='https://little-lemon-restaurant.web.app/' className='image6'>
      <img src={viewButton} className='desktop:mx-[65rem] desktop:-my-[44rem] mobile:mx-14 mobile:-mt-10'/>
      </a>
      <h1 className='text-white desktop:text-4xl desktop:mx-[73rem] w-80 desktop:my-[41.5rem] mobile:text-3xl mobile:mx-[10.5rem] mobile:-mt-10'>Little Lemon</h1>

    </div>
      
      <ProjectCard 
        name="Test Project 1"
        image="\src\assets\images\lemon.png"
        links={[
          { url: "https://github.com/myusername/myproject", text: " Source Code" },
          { url: "https://myproject.com", text: " View " },
        ]}
      />


    </div>
  )
}

export default Projects