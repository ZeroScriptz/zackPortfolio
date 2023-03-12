import React from 'react'
import buttonone from '../assets/images/buttton.png';
import underButton from '../assets/images/underButton.png';
import dPhoto from '../assets/images/dPhoto.png';
import abtMe from '../assets/images/aboutMe.png';
import line from '../assets/images/line.png';
import '../App.css'

import { SiReact, SiJavascript, SiTypescript, SiShopify, SiTailwindcss } from "react-icons/si";
import { AiFillYoutube, AiFillMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"
export default function home() {


  return (
    <div className='flex-initial justify-center items-center py-10 desktop:mx-[25.5rem] mobile:mx-4 desktop:w-[815px] h-[170px] mobile:w-[210px]'>
        <h4 className='baloo text-[#4AC7FA] text-2xl'>Hey there 👋</h4>
        <h2 className='text-white desktop:text-7xl mobile:text-[3.5rem] desktop:w-[990px] mobile:w-[390px]'>
          I'm <span className='text-transparent bg-clip-text bg-gradient-to-tl from-blue-400 to-purple-500'>Zack Darnell,</span> a Front End Developer
        </h2>

        <div className='my-4'>
        <SiJavascript fontSize={34} className="text-white" />
        <h2 className='baloo text-xl mx-12 -my-8 text-white'>JavaScript</h2>
        <SiReact fontSize={38} className="mx-40 text-white"/>
        <h2 className='baloo text-white text-xl mx-52 -my-8'>React.js</h2>
        <SiTypescript fontSize={38} className="mobile:my-12 desktop:mx-[18.5rem] desktop:my-0 text-white" />
        <h2 className='text-white baloo text-xl mobile:-my-[5rem] mobile:mx-[3rem] desktop:-my-8 desktop:mx-[21.5rem]'>Typescript</h2>
        <SiShopify fontSize={38} className="text-white mobile:my-12 mobile:mx-[10rem] desktop:mx-[28.5rem] desktop:my-0" />
        <h2 className='text-white baloo text-xl mobile:-my-[5rem] mobile:mx-[13rem] desktop:-my-8 desktop:mx-[31.5rem]'>Shopify</h2>
        <SiTailwindcss fontSize={38} className="text-white mobile:my-24 desktop:my-0 desktop:mx-[37rem] " /> 
        <h2 className='baloo text-white text-xl mobile:-my-32 mobile:mx-12 desktop:-my-8 desktop:mx-[40rem]'>TailwindCSS</h2>
        </div>

      <div className=''>
      <a  href="https://zackresume.tiiny.site" className='' >
      <img src={buttonone} alt="button to resume"  className=" hover:scale-105 transition duration-500 ease-in-out hover:-rotate-6  mobile:my-[10rem]   mobile:mx-0 desktop:my-[4rem] desktop:mx-0" />
      </a>
      </div>
      <img src={dPhoto} alt="photo for 3d photo"  className="desktop:mx-[48rem] desktop:-my-[24rem] mobile:-my-[10rem] "  />



      <img src={underButton} className="w-[275px] desktop:mx-[51rem] desktop:my-[23rem] mobile:my-[9.5rem]"/>
      <a className='cursor-pointer' alt="link to linkin" href='https://www.linkedin.com/in/zackdarnell/'>
      <AiFillLinkedin  className="text-white desktop:mx-[52rem] desktop:-my-[26.50rem] mobile:mx-[1rem] desktop:text-5xl mobile:-my-[12.25rem] mobile:text-4xl  hover:scale-105 transition duration-500 ease-in-out hover:-rotate-6 " />
      </a>
      <a className='cursor-pointer' href='https://github.com/ZeroScriptz?tab=repositories'>
      <AiOutlineGithub  className="text-white desktop:mx-[56rem] desktop:my-[23.5rem] desktop:text-5xl mobile:text-4xl mobile:mx-[4rem] mobile:my-40 hover:scale-105 transition duration-500 ease-in-out hover:rotate-6 " />
      </a>
      <a className='cursor-pointer' href="https://www.youtube.com/@ZACKDEV">
          <AiFillYoutube  className="text-white desktop:-my-[26.5rem] desktop:mx-[60rem] hover:scale-105 transition duration-500 desktop:text-5xl mobile:text-4xl mobile:-my-[12.25rem] mobile:mx-[7rem]  ease-in-out hover:-rotate-6 " />
        </a>      
      <a className='cursor-pointer' href="mailto:zackddesigns@outlook.com">
        <AiFillMail  className="text-white desktop:my-[23.50rem] desktop:mx-[64rem] hover:scale-105 transition duration-500 ease-in-out hover:rotate-6  desktop:text-5xl mobile:text-4xl mobile:my-[10rem] mobile:mx-40"  />
      </a>

    <div className=''>
    <img src={abtMe} alt="about me"  className='desktop:-my-[18rem] mobile:-my-[8rem]'/>
    <div className='mobile:my-[9rem] desktop:-my-[1rem]'>
      <h1 className='text-white desktop:text-6xl desktop:-my-[46rem] desktop:w-80 desktop:mx-[38rem] mobile:text-4xl'> ABOUT ME </h1>
      <img src={line} alt="line"  className='desktop:my-[46rem] desktop:mx-[38rem]' />
      <p className='baloo text-white desktop:mx-[38rem] desktop:-my-[45rem] desktop:w-[550px] text-xl desktop:leading-10'>
      Highly passionate about crafting exceptional code that can elevate a website from blank page to 
      something like the site you are on or any of the ones in my projects page! Where its automating processes, Website 
      Development, API integrations, and developing next-level dev-tools or SaaS. With a keen eye for detail
      from college courses in Studio Art and Front-End certification from Meta , I take pride in developing 
      elegant solutions to make users in LOVE!  
      </p>
      </div>
      <div className='desktop:-my-[47rem] mobile:-my-[9rem] mobile:text-3xl'>
            <h1 className='desktop:text-6xl  text-purple-500  desktop:my-[48rem] desktop:mx-[38rem] hover:scale-105 hover:rotate-3 transition ease-in-out cursor-pointer'>22</h1>
            <h2 className='text-white desktop:text-xl text-center  desktop:-my-[48rem] desktop:mx-[38.25rem] '>Years old</h2>
            <h1 className='desktop:text-6xl  text-purple-500  desktop:my-[41rem] desktop:mx-[46rem] hover:scale-105 transition ease-in-out hover:-rotate-3 cursor-pointer'>6+</h1>
            <h2 className='text-white desktop:text-xl text-center  desktop:-my-[41rem] desktop:mx-[46.25rem] '>Years Coding</h2>
            <h1 className='desktop:text-6xl  text-purple-500  desktop:my-[34rem] desktop:mx-[54rem]  hover:scale-105 hover:rotate-3 transition ease-in-out cursor-pointer'>2</h1>
            <h2 className='text-white desktop:text-xl text-center  desktop:-my-[34rem] desktop:mx-[54rem]'>Amazing Kids</h2>
            <h1 className='desktop:text-6xl  text-purple-500  desktop:my-[26.5rem] desktop:mx-[62rem] hover:scale-105 hover:-rotate-3 transition ease-in-out cursor-pointer'>1k+</h1>
            <h2 className='text-white desktop:text-xl text-center  desktop:-my-[26rem] desktop:mx-[62.25rem]'>Commits</h2>
            <h1 className='desktop:text-6xl  text-purple-500  desktop:my-[20rem] desktop:mx-[70rem] hover:scale-105 hover:rotate-3 transition ease-in-out cursor-pointer'>35k+</h1>
            <h2 className='text-white desktop:text-xl text-center  desktop:-my-[19.5rem] desktop:mx-[71.25rem]'>Youtube Views</h2>
      </div>
    </div>



    </div>
  )
}
