import React from "react";

function ProjectCard(props) {
  const { name, image, links } = props;
  return (
    <div className="project-card">
      <img className="hover:scale-105 transition duration-500 ease-in-out" src={image} alt={name} />
      <div className="project-details">
        <h3 className="text-white text-3xl">{name}</h3>
        <div className="project-links  ">
          {links.map((link, index) => (
            <a className="text-white  " key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <h1 className="hover:scale-105 inline-block bg-blue-400 p-1 py-0 mx-2 my-2 w-[100px] text-center rounded-xl transition duration-500 ease-in-out">
              {link.text}
              </h1>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
