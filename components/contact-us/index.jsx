import Link from "next/link";
import Layout from "../shared/layout"
import style from "./contact.module.css";
import { usePathname } from 'next/navigation';
import { 
    Breadcrumb,
    Form,
    Input,
    Button
 } from "antd";
const {Item} = Form;

const ContactUs = ()=>{
    const pathname = usePathname()
    console.log(pathname);
    const Header = ()=>{
        return (
            <div className="py-6 flex items-center flex-col gap-y-4">
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
            <div className="portfolio-bg-2 px-[5%] py-[10%]">
                <div className="ml-[15%]">
                    <h1 className=" text-3xl font-bold mb-1">Lets Talk</h1>
                    <p className=" text-gray-500 mb-5">Got a project in mind? Fill in the form or send us.</p>
                    <Form className=" w-8/12">
                        <Item name="firstname" rules={[{required:true,message:"fullname is required!"}]}>
                            <Input 
                            size="large" 
                            style={{borderRadius: 0}} 
                            placeholder="First name"
                        />
                        </Item>
                        <Item name="lastname" rules={[{required:true,message:"fullname is required!"}]}>
                            <Input 
                            size="large" 
                            style={{borderRadius: 0}} 
                            placeholder="Last name"
                        />
                        </Item>
                        <Item name="email" rules={[{required:true,message:"fullname is required!"}]}>
                            <Input 
                            size="large" 
                            style={{borderRadius: 0}} 
                            placeholder="Email"
                        />
                        </Item>
                        <Item name="message" rules={[{required:true,message:"fullname is required!"}]}>
                            <Input.TextArea 
                            rows={6}
                            style={{borderRadius: 0}} 
                            placeholder="Your message"
                        />
                        </Item>
                        <Item>
                            <Button 
                                type="text" 
                                className="flex items-center px-9 py-[27px] font-bold text-lg shadow rounded-lg mr-20"
                                style={{backgroundColor: "#FF6D5A",color: "white"}}
                            >
                                Send Messaage
                            </Button>
                        </Item>
                    </Form>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs