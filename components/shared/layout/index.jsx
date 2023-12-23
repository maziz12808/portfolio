import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({children,header,headerbg=null})=>{
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
    return (
        <>
            <div id={headerbg}>
                <header className="px-[5%]">
                    <nav className="flex justify-between items-center">
                        <p></p>
                        <ul className="flex gap-x-10">
                            {
                                menu.map((menuItem,menuIndex)=>(
                                    <li className={`
                                            hover:cursor-pointer py-7 text-gray-500 hover:text-[#FE7968] 
                                            text-lg" key={menuIndex
                                            ${pathname == '/' ? "text-gray-500" : "text-gray-500"}
                                        `} 
                                        key={menuIndex}
                                    >
                                        <Link href={menuItem.href}>{menuItem.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <Button 
                            type="text" 
                            className="flex items-center px-6 py-[22px] font-bold text-lg shadow rounded-lg"
                            style={{backgroundColor: "#FF6D5A",color: "white"}}
                        >
                            Hire Me
                        </Button>
                    </nav>
                   {header}
                </header>
            </div>
            <section>
                {children}
            </section>
            <footer className="footer-svg px-[5%]">
                <div className="py-[7%] flex items-center justify-between">
                    <p className="text-7xl font-bold ml-28 footer-gradient-text">Have a project?</p>
                    <Button 
                            type="text" 
                            className="flex items-center px-9 py-[27px] font-bold text-lg shadow rounded-lg mr-20"
                            style={{backgroundColor: "#FF6D5A",color: "white"}}
                        >
                        Let's Talk
                    </Button>
                </div>
                <div className="border-t py-5">
                    <p className="text-white text-center">© 2023 Laralink. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Layout