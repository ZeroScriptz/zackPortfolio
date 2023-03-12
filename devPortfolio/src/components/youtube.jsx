import React from 'react'
import ProjectCard from './projectCard'
import oracle from '../assets/images/youtube/oracle.png'
import oraxen from '../assets/images/youtube/oraxen.png'
import abstract from '../assets/images/youtube/abstract.png'
import pause from '../assets/images/youtube/pause.png'
import update from '../assets/images/youtube/update.png'
import items from '../assets/images/youtube/items.png'


function Youtube() {
  return (
    <div className='desktop:mx-8 '>
        <h1 className='text-white desktop:text-7xl mobile:text-6xl'>YOUTUBE</h1>
        <div className='desktop:grid desktop:grid-cols-2 desktop:gap-8'>
        <ProjectCard 
                name="Create Free Oracle Servers"
                image={oracle}
                links={[
                  { url: "https://www.youtube.com/watch?v=nJb12LbktVk&t=1s", text: "Watch" },
                ]}
        />
        <ProjectCard 
                name="Minecraft Furnitures using Oraxen"
                image={oraxen}
                links={[
                  { url: "https://www.youtube.com/watch?v=ch4Fufti5Rg&t=1s", text: "Watch" },
                ]}
        />
        </div>
        <div className='desktop:grid desktop:grid-cols-2 desktop:gap-8'>
        <ProjectCard 
                name="Custom Minecraft Pause Menu"
                image={pause}
                links={[
                  { url: "https://www.youtube.com/watch?v=IKDcPdRtFg0", text: "Watch" },
                ]}
        />
        <ProjectCard 
                name="How to update Oraxen Plugin"
                image={update}
                links={[
                  { url: "https://www.youtube.com/watch?v=LkansZwVaPY&t=1s", text: "Watch" },
                ]}
        />
        <ProjectCard 
                name="Custom Minecraft Items"
                image={items}
                links={[
                  { url: "https://www.youtube.com/watch?v=kjN9uPcu3hc&t=66s", text: "Watch" },
                ]}
        />
        <ProjectCard 
                name="Free Abstract Backgrounds"
                image={abstract}
                links={[
                  { url: "https://www.youtube.com/watch?v=FpBBUOjREEs&t=1s", text: "Watch" },
                ]}
        />
        
        </div>
    </div>
  )
}

export default Youtube