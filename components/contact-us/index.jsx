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
    // FINCTIONS
    const onContact = (value)=>{
        console.log(value);
    }
    const Header = ()=>{
        return (
            <div className="py-[30%] md:py-[7%] flex items-center flex-col gap-y-4">
                <h1 className="footer-gradient-text text-6xl md:text-7xl font-bold md:font-extrabold">
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
                <div className=" ml-0 md:ml-[15%]">
                    <h1 className=" text-3xl font-bold mb-5">Lets Talk</h1>
                    <Form className="w-full md:w-8/12 flex flex-col md:gap-y-4 gap-y-2" onFinish={onContact}>
                        <Item 
                            name="firstname" 
                            rules={[
                                {
                                    required:true,
                                    message:<h1 className="text-lg">Please fill out this field.</h1>
                                }
                            ]}>
                            <Input 
                            size="large" 
                            style={{borderRadius: 0}} 
                            placeholder="First name" 
                            className=" focus:border-indigo-800 focus:shadow-none hover:border-inherit"
                        />
                        </Item>
                        <Item 
                            name="lastname" 
                            rules={[
                                {required:true,
                                message:<h1 className="text-lg">Please fill out this field.</h1>
                                }
                            ]}
                        >
                            <Input 
                            size="large" 
                            style={{borderRadius: 0}} 
                            placeholder="Last name" 
                            className=" focus:border-indigo-800 focus:shadow-none hover:border-inherit"
                        />
                        </Item>
                        <Item 
                            name="email" 
                            rules={[
                                {
                                    required:true,
                                    message:<h1 className="text-lg">Please fill out this field.</h1>
                                }
                            ]}
                        >
                            <Input 
                            size="large" 
                            style={{borderRadius: 0}} 
                            placeholder="Email" 
                            className=" focus:border-indigo-800 focus:shadow-none hover:border-inherit"
                        />
                        </Item>
                        <Item name="message" 
                            rules={[
                                {
                                    required:true,
                                    message:<h1 className="text-lg">Please fill out this field.</h1>
                                }
                            ]}
                        >
                            <Input.TextArea 
                            rows={6}
                            style={{borderRadius: 0}} 
                            placeholder="Your message" 
                            className=" focus:border-indigo-800 focus:shadow-none hover:border-inherit"
                        />
                        </Item>
                        <Item>
                            <Button 
                                type="text" 
                                htmlType="submit"
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