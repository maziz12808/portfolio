import Layout from "../shared/layout"
import {Button} from "antd"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "./home.module.css"

const Home = ()=>{
    const [hiddenProject,sethiddenProject] = useState("hidden")
    const Header = ()=>{
        return (
            <div className="grid grid-cols-2 gap-x-20">
                <div className="flex flex-col gap-y-8 pt-5">
                    <h1 className="text-4xl font-bold text-gray-400">Hi! I’m</h1>
                    <h1 className="text-6xl font-extrabold gradient-text">
                        Muhammad <span id="stroke-text">Aziz</span>
                    </h1>
                    <h1 className="text-4xl font-bold text-gray-400">
                        Full-stack 
                        <span className="text-4xl font-bold text-[#342EAD]"> MERN Developer</span>
                    </h1>
                    <p className="text-gray-400">
                        Skilled Full-Stack MERN Developer proficient in creating robust web applications. 
                        Expertise in MongoDB, Express.js, React, and Node.js. Experienced in both front-end 
                        and back-end development, delivering user-friendly, scalable solutions. give me 
                        something like sentences
                    </p>
                    <div>
                        <i className='bx bxl-facebook text-2xl mr-2' id="stroke-text" />
                        <i className='bx bxl-twitter text-2xl mr-2' id="stroke-text" />
                        <i className='bx bxl-linkedin text-2xl mr-2' id="stroke-text" />
                        <i className='bx bxl-facebook text-2xl' id="stroke-text" />
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <Button 
                            type="text" 
                            className="flex items-center px-6 py-[27px] font-bold text-lg shadow rounded-lg"
                            style={{backgroundColor: "#FF6D5A",color: "white"}}
                        >
                            Dowbload CV
                        </Button>
                        <span className="underline underline-offset-2 text-xl font-medium text-[#342EAD]">
                            Let’s Talk
                        </span>
                    </div>
                </div>
                <div className="relative mb-10">
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
                        src="/images/hero_1.png" 
                        width={0} 
                        height={0}
                        sizes="100vw" 
                        className="absolute top-20 left-0 animate__animated animate__pulse animate__infinite"
                        style={{width: "100%",height: "auto"}} 
                        loading="lazy" 
                        alt="hero_1"
                        
                    />
                </div>
            </div>
        )
    }
    return (
        <Layout header={<Header />} headerbg={style.header}>
            <div className="portfolio-bg-2 px-[6%] py-[10%]">
                <div className="grid grid-cols-2">
                    <div>
                        <div className="flex flex-col gap-y-1">
                            <p className=" text-blue-800">Portfolio</p>
                            <p className=" text-[#C3C1E8] text-5xl font-bold">My latest</p>
                            <p className=" text-[#FF6D5A] text-5xl font-bold">Projects</p>
                            <div 
                                className="mt-24 relative" 
                                style={{width:480}} 
                                onMouseEnter={()=>sethiddenProject("block")}
                                onMouseLeave={()=>sethiddenProject("hidden")}
                            >
                                <div className="bg-[#E3DCED] h-16 flex items-center gap-x-3 px-5 rounded-t-3xl">
                                    <div className="bg-white rounded-full w-6 h-6"></div>
                                    <div className="bg-white rounded-full w-6 h-6"></div>
                                    <div className="bg-white rounded-full w-6 h-6"></div>
                                    <div className="bg-white rounded-full w-48 h-6 ml-16"></div>
                                </div>
                                <Image 
                                    src="/images/p5.jpg" 
                                    width={0} 
                                    height={0} 
                                    sizes="100vw" 
                                    style={{width:"100%",height:"auto"}}
                                    className="rounded-b-3xl" 
                                />
                                <div className={`bg-[#2E31A7] opacity-70 w-full px-5 py-5 absolute left-0 bottom-0 rounded-b-3xl ${hiddenProject}`}>
                                    <p className="text-white text-3xl font-semibold">Second Project</p>
                                    <p className="text-white text-base font-semibold underline underline-offset-4 cursor-pointer">
                                        <Link href="/portfolio">VIEW WORKS</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                    <div 
                                className="mt-16 relative" 
                                style={{width:480}} 
                                onMouseEnter={()=>sethiddenProject("block")}
                                onMouseLeave={()=>sethiddenProject("hidden")}
                            >
                                <div className="bg-[#E3DCED] h-16 flex items-center gap-x-3 px-5 rounded-t-3xl">
                                    <div className="bg-white rounded-full w-6 h-6"></div>
                                    <div className="bg-white rounded-full w-6 h-6"></div>
                                    <div className="bg-white rounded-full w-6 h-6"></div>
                                    <div className="bg-white rounded-full w-48 h-6 ml-16"></div>
                                </div>
                                <Image 
                                    src="/images/p4.jpg" 
                                    width={0} 
                                    height={0} 
                                    sizes="100vw" 
                                    style={{width:"100%",height:"auto"}}
                                    className="rounded-b-3xl" 
                                />
                                <div className={`bg-[#2E31A7] opacity-70 w-full px-5 py-5 absolute left-0 bottom-0 rounded-b-3xl ${hiddenProject}`}>
                                    <p className="text-white text-3xl font-semibold">Second Project</p>
                                    <p className="text-white text-base font-semibold underline underline-offset-4 cursor-pointer">
                                        <Link href="/portfolio">VIEW WORKS</Link>
                                    </p>
                                </div>
                        </div>
                        <div 
                            className="mt-16 relative" 
                            style={{width:480}} 
                            onMouseEnter={()=>sethiddenProject("block")}
                            onMouseLeave={()=>sethiddenProject("hidden")}
                        >
                            <div className="bg-[#E3DCED] h-16 flex items-center gap-x-3 px-5 rounded-t-3xl">
                                <div className="bg-white rounded-full w-6 h-6"></div>
                                <div className="bg-white rounded-full w-6 h-6"></div>
                                <div className="bg-white rounded-full w-6 h-6"></div>
                                <div className="bg-white rounded-full w-48 h-6 ml-16"></div>
                            </div>
                            <Image 
                                src="/images/p6.jpg" 
                                width={0} 
                                height={0} 
                                sizes="100vw" 
                                style={{width:"100%",height:"auto"}}
                                className="rounded-b-3xl" 
                            />
                            <div className={`bg-[#2E31A7] opacity-70 w-full px-5 py-5 absolute left-0 bottom-0 rounded-b-3xl ${hiddenProject}`}>
                                <p className="text-white text-3xl font-semibold">Second Project</p>
                                <p className="text-white text-base font-semibold underline underline-offset-4 cursor-pointer">
                                    <Link href="/portfolio">VIEW WORKS</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="-mt-28 ml-24 text-xl text-[#FF6D5A] font-bold underline underline-offset-[4.5px] cursor-pointer">
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