import '../App.css'
import React from 'react'
import codeye from '../assets/images/codeye.png'
import musicforall from '../assets/images/m4a.png'
import workout from '../assets/images/workout.png'
import canvyeth from '../assets/images/canvyeth.png'
import lemon from '../assets/images/lemon.png'
import facebook from '../assets/images/facebook.png'
import ProjectCard from './projectCard'
import Youtube from './youtube'


const Projects = () => {
  return (
    <div className='flex-initial justify-center items-center py-10 desktop:mx-[25.5rem] mobile:mx-4 desktop:w-[815px] h-[170px] mobile:w-[210px]' >
        <h1 className='text-white desktop:text-7xl mobile:text-6xl'>WORK</h1>

      <div className=' inline-block desktop:mx-8'>
      <ProjectCard 
        name="Canvy ETH"
        image={canvyeth}
        links={[
          { url: "https://github.com/ZeroScriptz/blockchain-web3app", text: " Source Code" },
          { url: "https://canvyeth.netlify.app/", text: " View " },
        ]}
      />
      <ProjectCard 
        name="Music 4 All"
        image={musicforall}
        links={[
          { url: "https://github.com/ZeroScriptz/music4all", text: " Source Code" },
          { url: "https://musicforall.netlify.app/", text: " View " },
        ]}
      />
            <ProjectCard 
        name="Code Eye"
        image={codeye}
        links={[
          { url: "https://github.com/ZeroScriptz/code-eye-ai", text: " Source Code" },
          { url: "https://code-eye.vercel.app/", text: " View " },
        ]}
      />
      </div>
      <div className=' inline-block '>
      <ProjectCard 
        name="Little Lemon"
        image={lemon}
        links={[
          { url: "https://github.com/ZeroScriptz/little-lemon-final", text: " Source Code" },
          { url: "https://little-lemon-restaurant.web.app/", text: " View " },
        ]}
      />
      <ProjectCard 
        name="Facebook Login"
        image={facebook}
        links={[
          { url: "https://github.com/ZeroScriptz/facebookmeta-login-clonee", text: " Source Code" },
          { url: "https://facebooklogin-clone.netlify.app/", text: " View " },
        ]}
      />
            <ProjectCard 
        name="Workout Form"
        image={workout}
        links={[
          { url: "https://github.com/ZeroScriptz/workout-form", text: " Source Code" },
          { url: "https://gymworkoutform.netlify.app/", text: " View " },
        ]}
      />
      </div>
      <div>
        <Youtube />
        </div>
    </div>
  )
}

export default Projects