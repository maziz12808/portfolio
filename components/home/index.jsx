import Layout from "../shared/layout"
import {Button} from "antd"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "./home.module.css"

const Home = ()=>{
    const [hovered, setHovered] = useState({
        project1: false,
        project2: false,
        project3: false
    });
    const downloadResume = ()=>{
        const ancherEl = document.createElement("a");
        ancherEl.href = "/aziz_fullstack.docx";
        ancherEl.download = "/aziz_fullstack.docx";
        ancherEl.click();
        ancherEl.remove()
    }
    const Header = ()=>{
        return (
            <div className="grid md:grid-cols-2 gap-x-20">
                <div className="flex flex-col gap-y-2 md:gap-y-8 pt-5">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-400">Hi! I’m</h1>
                    <h1 className=" text-[40px] md:text-6xl font-extrabold gradient-text">
                        Muhammad <span id="stroke-text">Aziz</span>
                    </h1>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-400">
                        Full-stack 
                        <span className="text-[#342EAD]"> MERN Developer</span>
                    </h1>
                    <p className="text-gray-500 text-justify md:text-left">
                        Experienced MERN Developer proficient in creating 
                        robust web applications with MongoDB, Express.js, 
                        React, and Node.js. Expertise in both front-end 
                        and back-end development, delivering scalable, 
                        user-friendly solutions. Stay current with 
                        industry trends for innovative web development.
                    </p>
                    <div className="flex gap-x-7 mb-3">
                        <Link href="https://www.linkedin.com/in/muhammad-aziz-2642aa2a7" target="_blank">
                            <Image 
                                src="/images/indeed_logo.png" 
                                width={40} 
                                height={40} 
                                className="rounded-3xl opacity-50 hover:opacity-100"
                                alt="indeed_logo" 
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/muhammad-aziz-2642aa2a7" target="_blank">
                            <Image 
                                src="/images/rozee_logo.jpeg" 
                                width={40} 
                                height={40} 
                                className="rounded-3xl opacity-50 hover:opacity-100"
                                alt="indeed_logo" 
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/muhammad-aziz-2642aa2a7" target="_blank">
                            <Image 
                                src="/images/linkedin_logo.png" 
                                width={40} 
                                height={40} 
                                className="opacity-50 hover:opacity-100"
                                alt="linkedin_logo" 
                            />
                        </Link>
                    </div>
                    <div className="flex md:gap-x-5 items-center justify-between">
                        <Button 
                            type="text" 
                            className="flex items-center px-6 py-[27px] font-bold text-lg shadow rounded-lg"
                            style={{backgroundColor: "#FF6D5A",color: "white"}} 
                            onClick={downloadResume}
                        >
                            Dowbload CV
                        </Button>
                        <span className="underline underline-offset-2 text-xl font-medium text-[#342EAD]">
                            <Link href="/contact-us">Let’s Talk</Link>
                        </span>
                    </div>
                </div>
                <div className="relative mb-10 md:border">
                    <div className={
                        `${style['experience-gradient-text']} absolute bottom-12 left-6 
                        z-50 rounded-full w-[120px] h-[120px] md:w-[150px] md:h-[150px] border shadow`
                        }
                    >
                        <div className={`flex flex-col items-center text-center md:p-2`}>
                            <span className="text-5xl font-bold text-[#342EAD]">2+</span> 
                            <p className="text-base md:text-xl font-bold">Years Experience</p>
                            
                        </div>
                    </div>
                    <Image src="/images/hero_bg_3.svg"
                        width={0} 
                        height={0}
                        sizes="100vw" 
                        className=""
                        style={{width: "100%",height: "auto"}} 
                        loading="lazy" 
                        alt="hero_bg_3"
                    />
                    
                    <Image 
                        src="/images/aziz_port.jpg" 
                        width={0} 
                        height={0}
                        sizes="100vw" 
                        className="absolute hidden md:block  top-16 left-10 animate__animated animate__pulse animate__infinite z-10 rounded-full"
                        style={{width: "84%",height: 640}} 
                        loading="lazy" 
                        alt="hero_1"
                        
                    />

                    <Image 
                        src="/images/aziz_port.jpg" 
                        width={0} 
                        height={0}
                        sizes="100vw" 
                        className="absolute block md:hidden  top-12 left-9 animate__animated animate__pulse animate__infinite z-10 rounded-full"
                        style={{width: "80%",height: 390}} 
                        loading="lazy" 
                        alt="hero_1"
                        
                    />
                    
                </div>
            </div>
        )
    }
    return (
        <Layout header={<Header />} headerbg={style.header}>
            <div className="portfolio-bg-2 md:px-[6%] py-[10%]">
                <div className="grid md:grid-cols-2">
                    <div>
                        <div className="flex flex-col gap-y-1">
                            <p className=" text-blue-800 px-[5%]">Portfolio</p>
                            <p className=" text-[#C3C1E8] text-5xl font-bold px-[5%]">My latest</p>
                            <p className=" text-[#FF6D5A] text-5xl font-bold px-[5%]">Projects</p>
                            <div 
                                className="mt-6 md:mt-24 w-[385px] md:w-[480px] relative h-[500px] md:h-[500px] overflow-hidden"  
                                onMouseEnter={()=>setHovered({
                                    ...hovered,
                                    project1: true
                                })}
                                onMouseLeave={()=>setHovered({
                                    project1: false
                                })}
                            >
                                <div className="bg-[#E3DCED] h-16 flex items-center gap-x-3 px-5 md:rounded-t-3xl">
                                    <div className="bg-white rounded-full w-6 h-6"></div>
                                    <div className="bg-white rounded-full w-6 h-6"></div>
                                    <div className="bg-white rounded-full w-6 h-6"></div>
                                    <div className="bg-white rounded-full w-48 h-6 ml-16"></div>
                                </div>
                                <Link href="https://www.mansaeasymart.com" target="_blank">
                                    <div className={style["mansa"]}></div>
                                </Link>
                                <div className={`
                                    bg-[#2E31A7] opacity-70 w-full px-5 py-5 absolute left-0 bottom-0 
                                    md:rounded-b-3xl ${hovered.project1 ? "block" : "hidden"}`
                                    }
                                >
                                    <p className="text-white text-3xl font-semibold">Mansaeasymart Project</p>
                                    <p className="text-white text-base font-semibold underline underline-offset-4 cursor-pointer">
                                        <Link href="https://www.mansaeasymart.com" target="_blank">
                                            VIEW WORKS
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div 
                            className="mt-16 relative w-[385px] h-[500px] md:w-[500px] overflow-hidden" 
                            onMouseEnter={()=>setHovered({
                                ...hovered,
                                project2: true
                            })}
                            onMouseLeave={()=>setHovered({
                                project2: false
                            })}
                        >
                            <div className="bg-[#E3DCED] h-16 flex items-center gap-x-3 px-5 md:rounded-t-3xl">
                                <div className="bg-white rounded-full w-6 h-6"></div>
                                <div className="bg-white rounded-full w-6 h-6"></div>
                                <div className="bg-white rounded-full w-6 h-6"></div>
                                <div className="bg-white rounded-full w-48 h-6 ml-16"></div>
                            </div>
                            <Link href="https://klbtheme.com/blonwe/autoparts" target="_blank">
                                <div className={style.blonve}></div>
                            </Link>  
                            <div className={`
                                bg-[#2E31A7] opacity-70 w-full px-5 py-5 absolute left-0 bottom-0 
                                md:rounded-b-3xl ${hovered.project2 ? "block" : "hidden"}
                                `}
                            >
                                <p className="text-white text-3xl font-semibold">
                                    Blonwe Project
                                </p>
                                <p className="text-white text-base font-semibold underline underline-offset-4 cursor-pointer">
                                    <Link href="https://klbtheme.com/blonwe/autoparts" target="_blank">VIEW WORKS</Link>
                                </p>
                            </div>
                        </div>
                        <div 
                            className="mt-16 relative w-[385px] h-[500px] md:w-[500px]  md:h-[500px] overflow-hidden" 
                            // style={{width:480}} 
                            onMouseEnter={()=>setHovered({
                                ...hovered,
                                project3: true
                            })}
                            onMouseLeave={()=>setHovered({
                                project3: false
                            })}
                        >
                            <div className="bg-[#E3DCED] h-16 flex items-center gap-x-3 px-5 md:rounded-t-3xl">
                                <div className="bg-white rounded-full w-6 h-6"></div>
                                <div className="bg-white rounded-full w-6 h-6"></div>
                                <div className="bg-white rounded-full w-6 h-6"></div>
                                <div className="bg-white rounded-full w-48 h-6 ml-16"></div>
                            </div>
                            <Link href="https://www.tifara.in" target="_blank">
                                <div className={style.tifara}></div>
                            </Link>
                            <div className={`
                                    bg-[#2E31A7] opacity-70 w-full px-5 py-5 absolute left-0 bottom-0 
                                    md:rounded-b-3xl ${hovered.project3 ? "block" : "hidden"}
                                `}
                            >
                                <p className="text-white text-3xl font-semibold">Tifara Project</p>
                                <p className="text-white text-base font-semibold underline underline-offset-4 cursor-pointer">
                                    <Link href="https://www.tifara.in" target="_blank">VIEW WORKS</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-4 md:-mt-28 ml-24 text-xl text-[#FF6D5A] font-bold underline underline-offset-[4.5px] cursor-pointer">
                    <Link href="/portfolio">
                        View All Project
                        <i className='bx bx-arrow-back ml-5 rotate-[130deg] bx-sm' ></i>
                    </Link>
                </p>
            </div>
        </Layout>
    )
}

export default Home