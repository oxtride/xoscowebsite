import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import ScrollProgressBar from './components/ScrollProgressBar';
import Loader from './components/Loader';
import CursorFollower from './components/CursorFollower';
import RainBackground from './components/RainBackground';

const skills = [
  'react', 'vite', 'javascript', 'html', 'css', 'typescript', 'node.js', 'tailwind css', 'next.js', 
  'figma', 'ui/ux design'
];

const projects = [
  {
    title: 'Vess',
    description: 'a simple web based HTML, CSS, JavaScript real-time code editor with Live Preview',
    link: 'https://vess.surge.sh'
  }
];

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSite, setShowSite] = useState(false);
  const audioRef = useRef(new Audio('/rooftop.mp3'));

  useEffect(() => {
    audioRef.current.loop = true;

    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased relative">
      <RainBackground />
      <Loader isLoading={isLoading} />
      {!isLoading && !showSite && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center z-50 cursor-pointer"
          onClick={() => {
            setShowSite(true);
            audioRef.current.play().catch(console.error);
          }}
        >
          <p className="text-white text-xl font-light">сlick to enter the site</p>
        </div>
      )}
      <CursorFollower />
      
      <div className={`transition-opacity duration-700 ease-in-out ${showSite ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ScrollProgressBar />
        <Header />
        <main className="px-6 sm:px-12 md:px-24">
          <div id="home" className="h-screen flex items-center">
              <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
                  <div>
                      <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-gradient leading-tight">
                          xosco
                      </h1>
                      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-lg font-regular">
                          a junior frontend engineer passionate about building beautiful, functional, and user-centric web landings and apps.
                      </p>
                  </div>
              </div>
          </div>

          <Section id="about" title="about Me">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed font-light">
              having little experience in the industry, I had the honor to work on various projects. My passion lies at the intersection of design and technology, where I strive to create intuitive and engaging user interfaces. I believe that excellent software is built on the basis of clean code, thoughtful design, and a deep understanding of user needs.
            </p>
          </Section>

          <Section id="skills" title="skills">
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
              {skills.map(skill => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </Section>

          <Section id="projects" title="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
              {projects.map(project => (
                <ProjectCard key={project.title} title={project.title} description={project.description} link={project.link} />
              ))}
            </div>
          </Section>
        </main>

        <footer className="text-center py-12 px-6">
          <p className="text-gray-500">All rights reserved. &copy; {new Date().getFullYear()}. discord: @xosco</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

