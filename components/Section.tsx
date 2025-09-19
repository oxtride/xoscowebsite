import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section 
      id={id} 
      ref={ref}
      className="min-h-[60vh] py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      <div 
        className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-wider text-gradient">
          {title}
        </h2>
      </div>
      <div 
        className={`transition-all duration-700 ease-out delay-200 w-full flex justify-center ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
