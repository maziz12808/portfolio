import Link from "next/link";
import Image from "next/image";
import Layout from "../shared/layout"
import style from "./resume.module.css";
import { usePathname } from 'next/navigation';
import { 
    Breadcrumb,
    Divider
 } from "antd";

const ContactUs = ()=>{
    const pathname = usePathname()
    const Header = ()=>{
        return (
            <div className="py-[30%] md:py-[7%] flex items-center flex-col gap-y-4">
                <h1 className="footer-gradient-text text-6xl md:text-7xl font-extrabold">
                    About Me
                </h1>
                <Breadcrumb 
                    className=" capitalize"
                >
                    <Breadcrumb.Item className="md:text-base font-medium">
                        <Link href="/" className="text-orange">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="text-white md:text-base font-medium">
                        <Link href={pathname} className="text-white">{pathname.split("/").join("> ")}</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
    return (
        <Layout header={<Header />} headerbg={style.header}>
            <div className="hero-bg2 md:px-[10%] py-[4%]">
                <div className="md:shadow-2xl md:p-6 md:border md:rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-12 px-3 md:px-5 pb-5">
                        <div className="col-span-9">
                            <div className="flex flex-col gap-y-4">
                                <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">
                                    Muhammad <span id="stroke-text">Aziz</span>
                                </h1>
                                <h1 className="text-2xl font-bold text-gray-400">
                                    Full-stack 
                                    <span className="text-2xl font-bold text-[#342EAD]"> 
                                        MERN Developer
                                    </span>
                                </h1>
                                <p className="text-[#6d493b] text-justify md:text-left leading-7">
                                    Experienced MERN Developer proficient in creating 
                                    robust web applications with MongoDB, Express.js, 
                                    React, and Node.js. Expertise in both front-end 
                                    and back-end development, delivering scalable, 
                                    user-friendly solutions. Stay current with 
                                    industry trends for innovative web development.

                                </p>
                            </div>
                        </div>
                        <div className="resume-cover-img hidden md:block">
                            <Image 
                                src="/images/hero_1.png" 
                                width={200} 
                                height={200}
                                loading="lazy" 
                                alt="hero_1" 
                                className="absolute top-10 left-0"
                            />
                        </div>
                        <div className="resume-cover-mobimg block md:hidden ml-4 md:ml-0">
                            <Image 
                                src="/images/hero_1.png" 
                                width={300} 
                                height={300}
                                loading="lazy" 
                                alt="hero_1" 
                                className="absolute top-10 left-3"
                            />
                        </div>
                    </div>
                    <Divider className="my-1" />
                    <div className="grid md:grid-cols-2  px-5">
                        <div className=" relative">
                            <div className={`${style.eye}`}></div>
                            <h1 className="text-[#6D493B] absolute top-8 left-6 rotate-0 text-3xl md:text-3xl font-bold font-serif">Skills</h1>
                            <div className=" flex flex-col gap-y-5">
                                <div className="text-[#6D493B]">
                                    <p className="text-xl font-semibold underline mb-2 font-serif flex items-center gap-x-3">
                                        <Image 
                                            src="/images/resume-image/double_arrows.png" 
                                            width={25} 
                                            height={25} 
                                            alt="double_arrows"
                                        />
                                        Front-End and UI
                                    </p>
                                    <ul className=" grid md:grid-cols-2 gap-y-4 px-5 md:px-0">
                                        <li className="flex gap-x-2 items-center font-medium border-b w-fit">
                                            <Image 
                                                src="/images/resume-image/html_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="html_logo"
                                            />
                                            Html and CSS 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/bootstrap_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="bootstrap_logo"
                                            />
                                            Bootstrap
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/tailwind_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="tailwind_logo"
                                            />
                                            Tailwind CSS  
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/material_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="material_logo"
                                            />
                                            Material UI 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/adobe_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="adobe_logo"
                                            />
                                            Adobe XD
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium ml-2">
                                            <Image 
                                                src="/images/resume-image/figma_logo.png" 
                                                width={15} 
                                                height={15} 
                                                className=" mr-2" 
                                                alt="figma_logo"
                                            />
                                            Figma
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-[#6D493B]">
                                    <Divider className="mt-1" />
                                    <p className="font-extrabold md:text-xl md:font-semibold underline underline-offset-4 mb-2 font-serif flex items-center gap-x-3">
                                        <Image 
                                            src="/images/resume-image/double_arrows.png" 
                                            width={25} 
                                            height={25} 
                                            alt="double_arrows"
                                        />
                                        Javascript and Framework Library
                                    </p>
                                    <ul className=" grid md:grid-cols-2 gap-y-4 px-5 md:px-0">
                                        <li className="flex gap-x-2 items-center font-medium w-fit">
                                            <Image 
                                                src="/images/resume-image/react_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="react_logo" 
                                            />
                                            Reactjs and Nextjs 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/angular_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="angular_logo"
                                            />
                                            Angular 13 and Universal Nestjs
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/veu_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="veu_logo"
                                            />
                                            Veu 13 and Nuxtjs  
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/ant_logo.jpeg" 
                                                width={30} 
                                                height={30} 
                                                alt="ant_logo"
                                            />
                                            Ant design 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/material_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="material_logo"
                                            />
                                            Material UI
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-[#6D493B]">
                                    <Divider className="mt-1" />
                                    <p className="font-extrabold md:text-xl md:font-semibold underline underline-offset-4 mb-2 font-serif flex items-center gap-x-3">
                                        <Image 
                                            src="/images/resume-image/double_arrows.png" 
                                            width={25} 
                                            height={25} 
                                            alt="double_arrows"
                                        />
                                        Devops and Project Managment Tools
                                    </p>
                                    <ul className="grid grid-cols-2 gap-y-4 px-5 md:px-0">
                                        <li className="font-medium col-span-2">
                                            <div className="flex gap-x-2 items-center underline">
                                                <Image 
                                                    src="/images/resume-image/aws_logo.png" 
                                                    width={40} 
                                                    height={40} 
                                                    alt="aws_logo"
                                                />
                                                AWS 
                                            </div>
                                            <p className="text-[15px] md:text-center">
                                                EC2, Rout53, RDS, ACM, Load Balancer, Lamda, API Gatway, Cloudfront, S3, SES, Live Streaming.
                                            </p>
                                        </li>
                                        
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/jira_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="jira_logo"
                                            />
                                            Jira  
                                        </li>
                                        
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/github_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="github_logo"
                                            />
                                            Github and Git
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-[#6D493B]">
                                    <Divider className="mt-1" />
                                    <p className="font-extrabold md:text-xl md:font-semibold underline underline-offset-4 mb-2 font-serif flex items-center gap-x-3">
                                        <Image 
                                            src="/images/resume-image/double_arrows.png" 
                                            width={25} 
                                            height={25} 
                                            alt="double_arrows"
                                        />
                                        Databases (Managed, Unmanaged)
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-y-4 px-5 md:px-0">
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/mysql_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="mysql_logo"
                                            />
                                            MySql  
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/postgresql_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="postgresql_logo"
                                            />
                                            PostgreSQL
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center">
                                                <i 
                                                    className='bx bxl-mongodb text-[20px]' 
                                                    style={{color:"#00ED64"}}  
                                                />
                                            </div>
                                            MongoDB
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-[#6D493B]">
                                    <Divider className="mt-1" />
                                    <p className="text-xl font-semibold underline underline-offset-2 mb-2 font-serif flex items-center gap-x-3">
                                        <Image 
                                            src="/images/resume-image/double_arrows.png" 
                                            width={25} 
                                            height={25} 
                                            alt="double_arrows"
                                        />
                                        Back-End and Server Side
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-y-4 px-5 md:px-0">
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/nodejs_logo.png" 
                                                width={25} 
                                                height={25} 
                                                alt="nodejs_logo"
                                            />
                                            Node js
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/express_logo.png" 
                                                width={25} 
                                                height={25} 
                                                alt="express_logo"
                                            />
                                            Express js 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/fastify_logo.jpg" 
                                                width={25} 
                                                height={25} 
                                                alt="fastify_logo"
                                            />
                                            Fastify 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <Image 
                                                src="/images/resume-image/php_logo.png" 
                                                width={30} 
                                                height={30} 
                                                alt="php_logo"
                                            />
                                            Php and Laravel
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="md:border-l px-5">
                            <div>
                                <div className="relative border-t md:border-t-0 border-gray-500 mt-9">
                                    <div className={style.eye}></div>
                                    <h1 className="text-[#6D493B] absolute top-8 left-4 rotate-0 text-2xl font-bold font-serif">
                                        Contact
                                    </h1>
                                </div>
                                <div className="flex items-center gap-x-2 mb-3">
                                        <div className="bg-[#6d493b] p-1 px-2" style={{borderRadius: "100%"}}>
                                            <i className='bx bx-phone-call text-[16px] text-white'  />
                                        </div>
                                        <span className="text-[#6d493b]">+92-331-9598421</span>
                                </div>
                                <div className="flex items-center gap-x-2  mb-3">
                                        <div className="bg-[#6d493b] p-1 px-2" style={{borderRadius: "100%"}}>
                                            <i className='bx bx-envelope text-[16px] text-white'  />
                                        </div>
                                        <span className="text-[#6d493b]">maziz12808@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-x-2  mb-3 font-serif">
                                        <div className="bg-[#6d493b] p-1 px-2" style={{borderRadius: "100%"}}>
                                            <i className='bx bx-current-location text-[16px] text-white'  />
                                        </div>
                                        <span className="text-[#6d493b]">Peshawar, Pakistan</span>
                                </div>
                            </div>
                            <div>
                                <div className="relative mt-7 font-serif">
                                    <div className={style.eye}></div>
                                    <h1 className="text-[#6D493B] absolute top-9 left-2 rotate-0 text-xl font-bold">
                                        Education
                                    </h1>
                                </div>
                                <div>
                                    <p className="text-[#6d493b] font-semibold">2020-2021</p>
                                    <p className="text-[#6d493b] text-md font-bold mt-4">
                                        WAP INSTITUTE 
                                    </p>
                                    <p className="text-[#6d493b] text-sm font-bold">
                                        www.wapinstitute.com  
                                    </p>
                                    <p className="text-[#6d493b] font-semibold mt-4">
                                        Web Development In Mern Stack  
                                    </p>
                                    <p className="text-[#6d493b] font-semibold">
                                        12 Months  
                                    </p>
                                    <p className="text-[#6d493b] font-semibold mt-4">2017-2021</p>
                                    <p className="text-[#6d493b] text-md font-bold mt-4">
                                        UNIVERSITY OF QURTUBA PESHAWAR  
                                    </p>
                                    <p className="text-[#6d493b] font-semibold">
                                        Bachelor of CS, Major in Technology   
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs