import React from "react";
import { InteractiveHoverButton } from "./ui/InteractiveHoverButtons";


const Contact = () => {
  return (
    <div
      className="w-full border-purple-100/[0.5] border text-white px-4 pt-8 font-bold flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 mt-10"
      id="contact"
    >
      <div>
        <nav className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <InteractiveHoverButton link="#home">Home</InteractiveHoverButton>
          <InteractiveHoverButtonColor2 link="mailto:nhari142004@gmail.com">
            Contact Me
          </InteractiveHoverButtonColor2>
          <InteractiveHoverButton link="#skills">About Me</InteractiveHoverButton>
        </nav>

        {/* Social media buttons, same behavior as the above buttons on smaller screens */}
        <nav className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:hidden mt-4">
          <InteractiveHoverButton link="https://github.com/14-Hari-14">
            Github
          </InteractiveHoverButton>
          <InteractiveHoverButtonColor link="https://www.linkedin.com/in/hari-nair-243811247">
            Linkedin
          </InteractiveHoverButtonColor>
          <InteractiveHoverButton link="https://www.instagram.com/ha.rii_14/">
            Instagram
          </InteractiveHoverButton>
        </nav>

        {/* Social media buttons, only visible on larger screens */}
        <nav className="hidden sm:flex flex-row flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 justify-center mt-4">
          <InteractiveHoverButton link="https://github.com/14-Hari-14">
            Github
          </InteractiveHoverButton>
          <InteractiveHoverButtonColor2 link="https://www.linkedin.com/in/hari-nair-243811247">
            Linkedin
          </InteractiveHoverButtonColor2>
          <InteractiveHoverButton link="https://www.instagram.com/ha.rii_14/">
            Instagram
          </InteractiveHoverButton>
        </nav>
      </div>

      <div className="h-[140px] overflow-hidden mt-10 flex items-center justify-center">
        <h1 className="text-[50px] sm:text-[200px] tracking-widest leading-[0.8] translate-y-[25px]">
          14-Hari-14
        </h1>
      </div>
    </div>
  );
};

export default Contact;
