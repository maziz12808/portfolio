import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Layout from "../shared/layout";
import style from "./portfolio.module.css"
import { Breadcrumb } from "antd";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Portfolio = ()=>{
    const pathname = usePathname();
    const images = [
        {
            url: "/images/project/p3.jpg",
            text: "First Project"
        },
        {
            url: "/images/project/p2.jpg",
            text: "Second Project"
        },
        {
            url: "/images/project/p8.jpg",
            text: "Thired Project"
        },
        {
            url: "/images/project/p7.jpg",
            text: "Fourth Project"
        },
        {
            url: "/images/project/p9.jpg",
            text: "Fourth Project"
        },
        {
            url: "/images/project/p4.jpg",
            text: "Fourth Project"
        },
        {
            url: "/images/project/p10.jpg",
            text: "Fourth Project"
        },
        {
            url: "/images/project/pp9.jpg",
            text: "Fourth Project"
        },
        {
            url: "/images/project/p11.jpg",
            text: "Fourth Project"
        }
    ]
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
            <div className="portfolio-bg px-[5%] py-[10%]">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry columnsCount={3}>
                        {images.map((image, i) => (
                            <div className=" relative">
                                <img
                                    key={i}
                                    src={image.url}
                                    style={{width: "100%", display: "block"}}
                                />
                                <div className=" absolute left-0 text-white bottom-0 px-5 py-5">
                                    <p className="text-white text-3xl font-semibold mb-2">
                                        {image.text}
                                    </p>
                                    <p className="text-white text-base font-semibold underline underline-offset-4 cursor-pointer">
                                        <Link href="/portfolio">VIEW WORKS</Link>
                                        <i className='bx bxs-right-arrow ml-3 bx-xs'></i>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </Layout>
    )
}

export default Portfolio