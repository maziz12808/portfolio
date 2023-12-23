import Link from "next/link";
import Layout from "../shared/layout";
import style from "./resume.module.css"
import { usePathname } from 'next/navigation';
import { 
    Breadcrumb
 } from "antd";

const contactUs = ()=>{
    const pathname = usePathname()
    const Header = ()=>{
        return (
            <div className="py-[7%] flex items-center flex-col gap-y-4">
                <h1 className="footer-gradient-text text-7xl font-extrabold">
                    Resume
                </h1>
                <Breadcrumb 
                    className=" capitalize"
                >
                    <Breadcrumb.Item className="text-base font-medium">
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
            <div className="portfolio-bg px-[10%] py-[3%]">
                <div className="bg-[#FCF9F2] border border-red-500 w-full h-[400px]">

                </div>
            </div>
        </Layout>
    )
}



export default contactUs;