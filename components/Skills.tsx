import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiC, SiCplusplus, SiOpenjdk, SiGit, SiGithub } from "react-icons/si";
import heritageLogo from '../images/heritage_logo.png'
import mecLogo from '../images/mec_logo.jpg'

const About = () => {
    return (
        <div className="pb-20 pt-12 px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch justify-start mt-20 md:mt-40 lg:mt-72 w-full gap-6 lg:gap-10">
                {/* Skills Section */}
                <div className="border border-solid border-purple-100 rounded-lg hover:bg-purple-100 hover:bg-opacity-15 w-full p-4 lg:p-6">
                    <h1 className="text-3xl md:text-4xl lg:text-[60px] text-purple-100 underline scroll-mt-8" id="skills">
                        Skills
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl lg:text-[30px] mt-6 lg:mt-10">Web-Dev:</h2>
                    <div className="flex flex-wrap items-center gap-4 lg:gap-8 py-4">
                        <SiHtml5 className="text-red-500 text-[40px] lg:text-[60px]" title="HTML5" />
                        <SiCss3 className="text-blue-500 text-[40px] lg:text-[60px]" title="CSS3" />
                        <SiJavascript className="text-yellow-500 text-[40px] lg:text-[60px]" title="JavaScript" />
                        <SiReact className="text-blue-400 text-[40px] lg:text-[60px]" title="React" />
                        <SiNextdotjs className="text-white-100 text-[40px] lg:text-[60px]" title="Next.js" />
                        <SiNodedotjs className="text-green-500 text-[40px] lg:text-[60px]" title="NodeJs" />
                    </div>

                    <h2 className="text-xl md:text-2xl lg:text-[30px] mt-6 lg:mt-10">Languages:</h2>
                    <div className="flex flex-wrap items-center gap-4 lg:gap-8 py-4">
                        <SiPython className="text-yellow-500 text-[40px] lg:text-[60px]" title="Python" />
                        <SiC className="text-blue-400 text-[40px] lg:text-[60px]" title="C" />
                        <SiCplusplus className="text-blue-300 text-[40px] lg:text-[60px]" title="C++" />
                        <SiOpenjdk className="text-white-100 text-[40px] lg:text-[60px]" title="Java" />
                    </div>

                    <h2 className="text-xl md:text-2xl lg:text-[30px] mt-6 lg:mt-10">Other Utilities:</h2>
                    <div className="flex flex-wrap items-center gap-4 lg:gap-8 py-4">
                        <SiGit className="text-orange-400 text-[40px] lg:text-[60px]" title="Git" />
                        <SiGithub className="text-white-100 text-[40px] lg:text-[60px]" title="Github" />
                    </div>
                </div>

                {/* Education Section */}
                <div className="w-full">
                    <div className="border border-solid border-white-100 rounded-lg hover:bg-white-100 hover:bg-opacity-15 p-4 lg:p-6 h-full flex flex-col">
                        <h1 className="text-3xl md:text-4xl lg:text-[60px] text-white-100 underline">
                            Education
                        </h1>
                        
                        <div className="flex-grow flex flex-col justify-evenly mt-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <img
                                    src={heritageLogo.src}
                                    alt="school-logo"
                                    className="w-12 h-12 lg:w-[60px] lg:h-[60px] object-contain"
                                />
                                <div>
                                    <h2 className="text-xl md:text-2xl lg:text-[30px]">Heritage Xperential Learning School(HXLS)</h2>
                                    <p className="text-sm lg:text-[15px] text-gray-300">April 2015 - July 2022</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <img
                                    src={mecLogo.src}
                                    alt="college-logo"
                                    className="w-12 h-12 lg:w-[60px] lg:h-[60px] object-contain"
                                />
                                <div>
                                    <h2 className="text-xl md:text-2xl lg:text-[30px]">Model Engineering College (MEC)</h2>
                                    <p className="text-sm lg:text-[15px] text-gray-300">November 2022 - July 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="border border-solid border-blue-300 rounded-lg mt-8 lg:mt-16 p-4 lg:p-6 hover:bg-blue-300 hover:bg-opacity-15">
                <h1 className="text-3xl md:text-4xl lg:text-[60px] text-blue-300 underline">
                    About Me
                </h1>
                <div className="space-y-4 mt-4">
                    <p className="font-mono font-thin leading-relaxed pt-2">
                    Hey! I&apos;m Harishanker S Nair, I&apos;m 20 years old and I enjoy working on open-source CS projects. Currently, I&apos;m pursuing my undergraduate in Computer Science Engineering and hope to get an MS in the future.
                    </p>
                    <p className="font-mono font-thin leading-relaxed">
                        Hoping to learn and build a lot!!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;