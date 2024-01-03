import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Layout = ({children,header,headerbg=null})=>{
    const [openMobMenu,setOpenMobMenu] = useState("hidden");
    const pathname = usePathname();
    const menu = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Portfolio",
            href: "/portfolio"
        },
        {
            label: "Resume",
            href: "/resume"
        },
        {
            label: "Contact Us",
            href: "/contact-us"
        }
    ]
    const onOpenMenu = ()=>{
        if(openMobMenu == "hidden") return setOpenMobMenu("block animate__animated animate__fadeInRight")
        
        setOpenMobMenu("hidden")
    }
    return (
        <>
            <div id={headerbg}>
                <header className="px-[2%] md:px-[5%]">
                    <div className=" hidden md:block">
                        <nav className="flex justify-between items-center">
                            <p></p>
                            <ul className="flex gap-x-10">
                                {
                                    menu.map((menuItem,menuIndex)=>(
                                        <li className={`
                                                hover:cursor-pointer py-7 text-gray-500 hover:text-[#FE7968] 
                                                text-lg" key={menuIndex
                                            `} 
                                            key={menuIndex}
                                        >
                                            <Link href={menuItem.href} legacyBehavior>
                                                <a className={`${pathname === menuItem.href && "text-[#FE7968]"}`}>
                                                    {menuItem.label}
                                                </a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Button 
                                type="text" 
                                className="flex items-center px-6 py-[22px] font-bold text-lg shadow rounded-lg"
                                style={{backgroundColor: "#FF6D5A",color: "white"}} 
                            >
                                <Link href="/contact-us">
                                    Hire Me
                                </Link>
                            </Button>
                        </nav>
                    </div>
                    <div className=" block md:hidden py-[3%]">
                        <nav className=" relative">
                            <Button 
                                size="large"
                                type="text" 
                                className="float-right" 
                                style={{color: "white"}}
                                icon={<MenuOutlined style={{fontSize: 40}} />} 
                                onClick={onOpenMenu}
                            />
                            <ul 
                                className={`
                                    text-white bg-black absolute w-full top-14 px-4 py-3 border-t-4
                                    border-[#FF6D5A] ${openMobMenu} z-[1]
                                `}
                            >
                                {
                                    menu.map((menuItem,menuIndex)=>(
                                        <li className="py-3" key={menuIndex}>
                                            <Link href={menuItem.href}>{menuItem.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                   {header}
                </header>
            </div>
            <section>
                {children}
            </section>
            <footer className="footer-svg px-[5%]">
                <div className="py-[25%] md:py-[8%] flex flex-col md:flex-row gap-y-7 items-center md:justify-between">
                    <p className="text-5xl md:text-7xl font-bold md:ml-28 footer-gradient-text">Have a project?</p>
                    <Button 
                            type="text" 
                            className="flex items-center px-9 py-5 md:py-[27px] font-bold text-lg shadow rounded-lg md:mr-20"
                            style={{backgroundColor: "#FF6D5A",color: "white"}}
                        >
                        <Link href="/contact-us">Let's Talk</Link>
                    </Button>
                </div>
                <div className="border-t py-5">
                    <p className="text-white text-center text-xl md:text-xl">© 2023 Laralink. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Layout