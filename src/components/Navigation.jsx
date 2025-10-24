import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { useState } from 'react';


const Navigation = () => {
    const [active, setActive] = useState("About");
    const handleClick = (name) => {
        setActive(name);
    }
    const aboutMeContent = "I am a dedicated MERN Stack Developer skilled in building interactive, responsive web applications using core technologies like React, Node.js, and MongoDB. My ultimate professional drive is centered on writing clean, efficient code, with a core focus on enhancing performance and consistently delivering smooth user experiences. I thrive on translating complex requirements into elegant, functional digital solutions. My foundation in technology is reinforced by my current academic pursuit at Lovely Professional University, Jalandhar, where I am completing a Bachelors in Computer Science (CSE) from July 2023 to July 2027, maintaining a strong CGPA of 8.2. This academic rigor, combined with hands-on project experience, ensures I approach every task with both theoretical understanding and practical skill. I am proficient in Javascript, Redux, HTML, Git, and Github, and committed to following modern development practices to ensure my work is scalable and deployment-ready for real-world scenarios. My goal is to continually learn and contribute meaningful value to any team I join by focusing on building robust, high-quality full-stack applications.";
    const experienceContent = "My experience is rooted in building several full-stack and front-end applications, showcasing my command over the MERN stack and front-end best practices. The YouTube Backend Clone project highlights my backend expertise: I engineered a robust backend architecture replicating core functionalities and ensuring secure user authentication with JWT. This project involved seamless video management through Cloudinary and MongoDB and the development of efficient RESTful APIs using Node.js and Express.js to handle uploads and playlists. On the front-end, I developed a fully responsive Blogging Website using React.js and Tailwind CSS, emphasizing smooth navigation and user engagement. I implemented dynamic routing with React Router and integrated a local data storage system for efficient post management. Furthermore, my Recipe Finder App demonstrated my proficiency in API integration, dynamically fetching, searching, and filtering data from a real-time third-party API. In this app, I implemented efficient state management in React and designed a clean, intuitive interface with Tailwind CSS, ensuring faster performance and scalability through optimized rendering and component reusability.";
    const recommendedContent = "Based on my technical stack and successful project execution, I strongly recommend focusing on key areas for high-performance web development. MERN Stack technologies are crucial: mastering React for the front-end, Node.js/Express.js for the backend, and MongoDB for the database provides a highly efficient full-stack development workflow. Specifically, I recommend deep dives into: State Management: Utilizing Redux or similar tools for scalable state handling in complex applications. Styling & Responsiveness: Proficient use of CSS (Tailwind) is essential for quickly designing clean, intuitive, and visually appealing interfaces. Backend Architecture: Understanding how to engineer robust backend systems that use RESTful APIs and secure authentication methods like JWT is non-negotiable for real-world projects. Finally, always adhere to best practices in code structure, version control (Git/Github), and performance tuning, as this ensures reliability and deployment readiness across all modules and applications";

  return (
    <div className=' relative border border-gray-600 lg:w-[44svw] md:w-[44svw] h-[37svh] rounded-2xl p-3 flex flex-col items-center bg-[#32343B] main-box'>
        <FaRegQuestionCircle className='text-gray-400 text-xl absolute left-1 top-3'/>
        <div className='flex justify-between bg-gray-950 text-gray-300 md:p-2    rounded-2xl  -mt-1  md:w-[40svw] lg:w-[40svw] md:  md:ml-5  shadow-2xl shadow-neutral-900'>
            <div className={`  cursor-pointer  rounded-2xl md:w-[22svw] md:p-2 lg:p-2 lg:px-4 lg:w-45   ${active == "About"? "bg-[#32343B] text-[#E0E0E0]  shadow-[0_0_50px_rgba(0,0,0,0.5)]  shadow-black":"setTransition text-[#9C9C9C]" }`} onClick={() =>handleClick("About")}>
                <h1 className='text-center md:text-sm lg:text-lg  '>About Me</h1>
            </div>
            <div className={`  cursor-pointer  rounded-2xl lg:p-2 lg:px-4 lg:w-45 md:w-[22svw] md:p-[1svw] ${active == "Experience"? "bg-[#32343B] text-[#E0E0E0] shadow-[0_0_50px_rgba(0,0,0,0.5)]  shadow-black":"setTransition text-[#9C9C9C]" }`} onClick={() =>handleClick("Experience")}>
                <h1 className='text-center md:text-md lg:text-lg ' >Experience</h1>
            </div>
            <div className={` cursor-pointer  rounded-2xl lg:p-2 lg:px-4 lg:w-45 md:w-[22svw] md:p-[1svw] ${active == "Recommended"? "bg-[#32343B] text-[#E0E0E0] shadow-[0_0_50px_rgba(0,0,0,0.5)]  shadow-black":"setTransition text-[#9C9C9C]" }`} onClick={() =>handleClick("Recommended")}>
                <h1 className='text-center md:text-md lg:text-lg ' >Recommended</h1>
            </div>
        </div>
        <div className='lg:mt-4  scroll-m-2  lg:h-56 scroll-smooth  overflow-y-scroll lg:text-xl lg:px-8 text-gray-400 font-light md:text-md md:mt-2 md:px-4'>
            {active == "About" && aboutMeContent || active == "Experience" && experienceContent || active == "Recommended" && recommendedContent}
        </div>
    </div>
  )
}

export default Navigation