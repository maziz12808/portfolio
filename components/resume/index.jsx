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
            <div className="py-[7%] flex items-center flex-col gap-y-4">
                <h1 className="footer-gradient-text text-7xl font-extrabold">
                    Contact Us
                </h1>
                <Breadcrumb 
                    className=" capitalize"
                >
                    <Breadcrumb.Item className=" text-base font-medium">
                        <Link href="/" className="text-orange">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="text-white text-base font-medium">
                        <Link href={pathname} className="text-white">{pathname.split("/").join("> ")}</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
    return (
        <Layout header={<Header />} headerbg={style.header}>
            <div className="hero-bg2 px-[10%] py-[4%]">
                <div className="shadow-2xl p-6 border rounded-3xl">
                    <div className="grid grid-cols-12 px-5 pb-5">
                        <div className="col-span-9">
                            <div className="flex flex-col gap-y-4">
                                <h1 className="text-5xl font-extrabold gradient-text">
                                    Muhammad <span id="stroke-text">Aziz</span>
                                </h1>
                                <h1 className="text-2xl font-bold text-gray-400">
                                    Full-stack 
                                    <span className="text-2xl font-bold text-[#342EAD]"> MERN Developer</span>
                                </h1>
                                <p className="text-[#6d493b]">
                                    Skilled Full-Stack MERN Developer proficient in creating robust web applications. 
                                    Expertise in MongoDB, Express.js, React, and Node.js. Experienced in both front-end 
                                    and back-end development, delivering user-friendly, scalable solutions. give me 
                                    something like sentences
                                </p>
                            </div>
                        </div>
                        <div className="resume-cover-img relative">
                            <Image 
                                src="/images/hero_1.png" 
                                width={200} 
                                height={200}
                                loading="lazy" 
                                alt="hero_1" 
                                className=" absolute top-10 left-0"
                            />
                        </div>
                    </div>
                    <Divider className="my-1" />
                    <div className="grid grid-cols-2  px-5">
                        <div className=" relative">
                            <div className={style.eye}></div>
                            <h1 className="text-[#6D493B] absolute top-8 left-6 rotate-0 text-3xl font-bold">Skills</h1>
                            <div className=" flex flex-col gap-y-5">
                                <div className="text-[#6D493B]">
                                    <p className=" text-xl font-semibold underline mb-2">Front End and UI</p>
                                    <ul className=" grid grid-cols-2 gap-y-1">
                                        <li className="flex gap-x-2 items-center font-medium border-b w-fit">
                                            <img src="/images/resume-image/html_logo.png" width={30} height={30} />
                                            Html and CSS 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/bootstrap_logo.png" width={30} height={30} />
                                            Bootstrap
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/tailwind_logo.png" width={30} height={30} />
                                            Tailwind CSS  
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/material_logo.png" width={30} height={30} />
                                            Material UI 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/adobe_logo.png" width={30} height={30} />
                                            Adobe XD
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium ml-2">
                                            <img src="/images/resume-image/figma_logo.png" width={15} height={15} className=" mr-2" />
                                            Figma
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-[#6D493B]">
                                    <Divider className="mt-1" />
                                    <p className="text-xl font-semibold underline underline-offset-8 mb-2">Javascript and Framework Library</p>
                                    <ul className=" grid grid-cols-2 gap-y-2">
                                        <li className="flex gap-x-2 items-center font-medium w-fit">
                                            <img src="/images/resume-image/react_logo.png" width={30} height={30} />
                                            Reactjs and Nextjs 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/angular_logo.png" width={30} height={30} />
                                            Angular 13 and Universal Nestjs
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/veu_logo.png" width={30} height={30} />
                                            Veu 13 and Nuxtjs  
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/ant_logo.jpeg" width={30} height={30} />
                                            Ant design
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/material_logo.png" width={30} height={30} />
                                            Material UI
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-[#6D493B]">
                                    <Divider className="mt-1" />
                                    <p className=" text-xl font-semibold underline underline-offset-8 mb-2">Devops and Project Managment Tools</p>
                                    <ul className="grid grid-cols-2 gap-y-2">
                                        <li className="font-medium col-span-2">
                                            <div className="flex gap-x-2 items-center underline">
                                                <img src="/images/resume-image/aws_logo.png" width={40} height={40} />
                                                AWS 
                                            </div>
                                            <p className="text-[15px] text-center">
                                                EC2, Rout53, RDS, ACM, Load Balancer, Lamda, API Gatway, Cloudfront, S3, SES, Live Streaming.
                                            </p>
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/sprint_logo.png" width={30} height={30} />
                                            Zohoo Sprints
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/jira_logo.png" width={30} height={30} />
                                            Jira  
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/bitbucket_logo.png" width={30} height={30} />
                                            BitBucket
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/github_logo.png" width={30} height={30} />
                                            Github and Git
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/digital_logo.png" width={30} height={30} />
                                            Digital Ocean
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/azure_logo.jpeg" width={30} height={30} />
                                            Azure
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/apache_kafka_logo.png" width={30} height={30} />
                                            Apache Kafka
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/kubernetes_logo.png" width={30} height={30} />
                                            Kubernetes
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/docker_logo.png" width={30} height={30} />
                                            Docker
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-[#6D493B]">
                                    <Divider className="mt-1" />
                                    <p className=" text-xl font-semibold underline underline-offset-8 mb-2">Databases (Managed, Unmanaged)</p>
                                    <ul className="grid grid-cols-2 gap-y-2">
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/mysql_logo.png" width={30} height={30} />
                                            MySql  
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/postgresql_logo.png" width={30} height={30} />
                                            PostgreSQL
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/aws_dynamodb_logo.png" width={30} height={30} />
                                            AWS DynamoDB
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/aws_documentdb_logo.jpeg" width={30} height={30} />
                                            AWS DocumentDB
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center">
                                                <i className='bx bxl-mongodb text-[20px]' style={{color:"#00ED64"}}  />
                                            </div>
                                            MongoDB
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/apache_kafka_logo.png" width={30} height={30} />
                                            Apache Kafka
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/kubernetes_logo.png" width={30} height={30} />
                                            Kubernetes
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/docker_logo.png" width={30} height={30} />
                                            Docker
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-[#6D493B]">
                                    <Divider className="mt-1" />
                                    <p className=" text-xl font-semibold underline underline-offset-8 mb-2">Databases (Managed, Unmanaged)</p>
                                    <ul className="grid grid-cols-2 gap-y-2">
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/nodejs_logo.png" width={25} height={25} />
                                            Node js, Express js and Fastify 
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/php_logo.png" width={30} height={30} />
                                            Php and Laravel
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/wordpress_logo.png" width={30} height={30} />
                                            Wordpress
                                        </li>
                                        <li className="flex gap-x-2 items-center font-medium">
                                            <img src="/images/resume-image/python_logo.png" width={30} height={30} />
                                            Python and java (basic)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="border-l px-5">
                            <div>
                                <div className="relative">
                                    <div className={style.eye}></div>
                                    <h1 className="text-[#6D493B] absolute top-8 left-4 rotate-0 text-2xl font-bold">
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
                                        <span className="text-[#6d493b]">aziz27304@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-x-2  mb-3">
                                        <div className="bg-[#6d493b] p-1 px-2" style={{borderRadius: "100%"}}>
                                            <i className='bx bx-current-location text-[16px] text-white'  />
                                        </div>
                                        <span className="text-[#6d493b]">Peshawar, Pakistan</span>
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <div className={style.eye}></div>
                                    <h1 className="text-[#6D493B] absolute top-8 left-1 rotate-0 text-2xl font-bold">
                                        Education
                                    </h1>
                                </div>
                                <div className="">
                                    <p className="text-[#6d493b] font-semibold">2020-2021</p>
                                    <p className="text-[#6d493b] text-md font-bold mt-3">
                                        WAP INSTITUTE 
                                    </p>
                                    <p className="text-[#6d493b] text-sm font-bold">
                                        www.wapinstitute.com  
                                    </p>
                                    <p className="text-[#6d493b] font-semibold mt-3">
                                        Web Development In Mern Stack  
                                    </p>
                                    <p className="text-[#6d493b] font-semibold">
                                        12 Months  
                                    </p>
                                    <p className="text-[#6d493b] font-semibold mt-3">2018-2022</p>
                                    <p className="text-[#6d493b] text-md font-bold mt-3">
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