import Link from "next/link";
import { usePathname } from "next/navigation";
import Layout from "../shared/layout";
import style from "./portfolio.module.css"
import { Breadcrumb } from "antd";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Portfolio = ()=>{
    const pathname = usePathname();
    
    const Header = ()=>{
        return (
            <div className="py-[29%] md:py-[7%] flex items-center flex-col gap-y-4">
                <h1 className="footer-gradient-text text-7xl font-extrabold">
                    Portfolio
                </h1>
                <Breadcrumb 
                    className=" capitalize"
                >
                    <Breadcrumb.Item className=" md:text-base font-medium">
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
            <div className="hero-bg2 md:px-[5%] py-[10%]">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry columnsCount={3} gutter="20px">
                        <div className=" relative h-[400px] md:h-[480px] w-full border shadow-md">
                            <Link href="https://www.mansaeasymart.com/" target="_blank">
                                <div className={`${style.mansa}`}></div>
                            </Link>
                            <div className=" absolute left-0 bottom-0 px-5 py-5">
                                <p className="text-red-600 text-base font-semibold underline underline-offset-4 cursor-pointer">
                                    <Link href="https://www.mansaeasymart.com/" target="_blank">VIEW WORKS</Link>
                                    <i className='bx bxs-right-arrow ml-3 bx-xs'></i>
                                </p>
                            </div>
                        </div>
                        <div className=" relative h-[400px] md:h-[700px] w-full border shadow-md">
                            <Link href="https://klbtheme.com/blonwe/autoparts/" target="_blank"><div className={`${style.blonve}`}></div></Link>
                            <div className=" absolute left-0 bottom-0 px-5 py-5">
                                <p className="text-red-600 text-base font-semibold underline underline-offset-4 cursor-pointer">
                                    <Link href="https://klbtheme.com/blonwe/autoparts/" target="_blank">
                                        VIEW WORKS
                                    </Link>
                                    <i className='bx bxs-right-arrow ml-3 bx-xs'></i>
                                </p>
                            </div>
                        </div>
                        <div className=" relative h-[400px] md:h-[550px] w-full border shadow-md">
                        <Link href="https://www.tifara.in" target="_blank">
                            <div className={`${style.tifara}`}></div>
                        </Link>
                            <div className=" absolute left-0 bottom-0 px-5 py-5">
                                <p className="text-red-600 text-base font-semibold underline underline-offset-4 cursor-pointer">
                                    <Link href="https://www.tifara.in" target="_blank">VIEW WORKS</Link>
                                    <i className='bx bxs-right-arrow ml-3 bx-xs'></i>
                                </p>
                            </div>
                        </div>
                        <div className=" relative h-[400px] md:h-[620px] w-full border shadow-md">
                            <Link href="https://www.bluestone.com" target="_blank">
                                <div className={`${style.bluestone}`}></div>
                            </Link>
                            <div className=" absolute left-0 bottom-0 px-5 py-5">
                                <p className="text-red-600 text-base font-semibold underline underline-offset-4 cursor-pointer">
                                    <Link href="https://www.bluestone.com" target="_blank">VIEW WORKS</Link>
                                    <i className='bx bxs-right-arrow ml-3 bx-xs'></i>
                                </p>
                            </div>
                        </div>
                        <div className=" relative h-[400px] md:h-[500px] w-full border shadow-md">
                            <Link href="https://www.nithiyamotors.com" target="_blank">
                                <div className={`${style.nithiyamotors}`}></div>
                            </Link>
                            <div className=" absolute left-0 bottom-0 px-5 py-5">
                                <p className="text-red-600 text-base font-semibold underline underline-offset-4 cursor-pointer">
                                    <Link href="https://www.nithiyamotors.com" target="_blank">VIEW WORKS</Link>
                                    <i className='bx bxs-right-arrow ml-3 bx-xs'></i>
                                </p>
                            </div>
                        </div>
                        <div className=" relative h-[400px] md:h-[500px] w-full border shadow-md">
                            <Link href="https://panbaiinternationalschool.com" target="_blank">
                                <div className={`${style.panbaiinternationalschool}`}></div>
                            </Link>
                            <div className=" absolute left-0 bottom-0 px-5 py-5">
                                <p className="text-red-600 text-base font-semibold underline underline-offset-4 cursor-pointer">
                                    <Link href="https://panbaiinternationalschool.com" target="_blank">VIEW WORKS</Link>
                                    <i className='bx bxs-right-arrow ml-3 bx-xs'></i>
                                </p>
                            </div>
                        </div>
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </Layout>
    )
}

export default Portfolio