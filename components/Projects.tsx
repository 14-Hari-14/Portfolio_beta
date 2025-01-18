'use client'
import { projects } from '@/data';
import React from 'react';
import { FollowerPointerCard } from './ui/following-pointer';
import { InteractiveHoverButton } from './ui/InteractiveHoverButtons';

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      {/* Section Heading */}
      <h1 className="heading text-[40px] font-bold text-center">
        A small selection of{' '}
        <span className="text-purple-100 text-[40px] font-bold">my recent projects</span>
      </h1>

      {/* Projects List */}
      <div className="flex flex-col items-center justify-center mt-10 gap-6">
        {projects.map(({ id, title, des, techLists, link }, index) => (
          <React.Fragment key={id}>
            {/* Shared Divider Line */}
            {index >= 0 && <div className="w-full max-w-4xl border-t border-gray-400" />}

            {/* Project Card with FollowerPointerCard */}
            <FollowerPointerCard className="w-full max-w-4xl px-4 sm:px-10 py-6" title={des}>
              <div className="relative">
                {/* Project Title */}
                <h2 className="text-2xl font-semibold text-center text-white-100">0{id}.{title}</h2>
                <div className="flex items-center justify-center mt-4">
                <div className="flex gap-4">
                    {techLists.map((tech, index) => (
                        <span key={index} className="text-[17px] px-2 font-mono rounded-lg border border-solid border-purple-100/[0.85]">
                          {tech}
                        </span>
                      ))}
                </div>
                </div>
                {/* Project Link */}
                {link && (
                  <div className="flex justify-center items-center px-2 mt-6 text-[20px] mx-auto">
                    <InteractiveHoverButton link={link}>View Project</InteractiveHoverButton>
                  </div>
                )}
              </div>
            </FollowerPointerCard>
          </React.Fragment>
        ))}
        {/* Bottom Divider Line */}
        <div className="w-full max-w-4xl border-t border-gray-400" />
      </div>
    </div>
  );
};

export default Projects;
