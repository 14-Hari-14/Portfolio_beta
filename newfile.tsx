import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiC, SiCplusplus, SiOpenjdk, SiGit, SiGithub} from "react-icons/si";
import { FaLaptop } from "react-icons/fa";
import heritageLogo from '../images/heritage_logo.png'
import mecLogo from '../images/mec_logo.jpg'
import { a } from "framer-motion/dist/client";
const About = () => {
    return (
        <div className="pb-20 pt-12">
            <div className='font-bold w-full h-full flex items-start justify-start mt-72 '>
                <div className="border border-solid border-purple-100 block pl-2 rounded-lg hover:bg-purple-100 hover:bg-opacity-15">
                    <h1 className="text-[60px] text-purple-100 text-decoration-line: underline scroll-mt-8" id="skills">Skills</h1>
                    <h1 className="text-[30px] mt-10">Web-Dev:</h1>
                    <div className="max-h-fit h-max  flex flex-wrap items-center gap-8 p-4 max-w-fit w-fit">
                        <div className="flex items-center gap-4">
                            <SiHtml5 className="text-red-500 text-[60px]" title="HTML5" />
                            <SiCss3 className="text-blue-500 text-[60px]" title="CSS3" />
                            <SiJavascript className="text-yellow-500 text-[60px]" title="JavaScript" />
                            <SiReact className="text-blue-400 text-[60px]" title="React" />
                            <SiNextdotjs className="text-white-100 text-[60px]" title="React" />
                            <SiNodedotjs className="text-green-500 text-[60px]" title="NodeJs"/>
                        </div>
                    </div>
                    <h1 className="text-[30px] mt-10">Languages:</h1>
                    <div className="max-h-fit h-max  flex flex-wrap items-center gap-8 p-4">
                        <div className="flex items-center gap-4">
                            <SiPython className="text-yellow-500 text-[60px]" title="Python" />
                            <SiC className="text-blue-400 text-[60px]" title="C" />
                            <SiCplusplus className="text-blue-300 text-[60px]" title="C++" />
                            <SiOpenjdk className="text-white-100 text-[60px]" title="Java" />
                        </div>
                    </div>
                    <h1 className="text-[30px] mt-10">Other Utilities:</h1>
                    <div className="max-h-fit h-max  flex flex-wrap items-center gap-8 p-4">
                        <div className="flex items-center gap-4">
                            <SiGit className="text-orange-400 text-[60px]" title="Git" />
                            <SiGithub className="text-white-100 text-[60px]" title="Github" />
                        </div>
                    </div>
                </div>
                <div 
                className="block w-full h-full items-center justify-center ml-10 pl-2 rounded-lg">
                    <div className="border border-solid border-pink-500 rounded-lg hover:bg-pink-500 hover:bg-opacity-15">
                        <h1 className="text-[60px] text-pink-500 text-decoration-line: underline pl-3">Education</h1>
                        <div className="flex flex-wrap justify-start items-center pl-4 pt-5 pb-2">
                            <img src={heritageLogo.src} alt="school-logo"
                            height={60}
                            width={60} />
                            <div>
                                <h1 className="text-[30px] pl-2">Heritage Xperential Learning School(HXLS)</h1>
                                <h1 className="text-[15px] pl-2">April 2015 - July 2022</h1>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start items-center pl-4 pt-14 pb-1">
                            <img src={mecLogo.src} alt="school-logo"
                            height={60}
                            width={60} />
                            <div>
                                <h1 className="text-[30px] pl-2">Model Engineering College (MEC) </h1>
                                <h1 className="text-[15px pl-2">November 2022 - July 2026</h1>
                            </div>
                        </div>
                    </div>
                    <div className= "block w-full h-full items-center justify-center border border-solid border-blue-300 rounded-lg mt-16 pl-2 py-2 pr-2 hover:bg-blue-300 hover:bg-opacity-15">
                        <h1 className= "text-[60px] text-blue-300 text-decoration-line: underline pl-3 ">About Me</h1>
                        <p className="font-mono font-thin leading-8 pl-4 pt-2">Hey! I'm Harishanker S Nair, I'm 20 years old and I enjoy working on CS projects. Currently I'm pursuing my undergraduate in Computer Science Engineering and hope to get an MS in the future.
                        </p>
                        <p className="font-mono font-thin leading-8 pl-4">
                            Hoping to learn and build a lot!!   
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
