import Layout from "../shared/layout";
import style from "./contact.module.css"
const contactUs = ()=>{
    const Header = ()=>{
        return (
            <div className="text-center">
                <h1 className={`text-7xl font-bold header-gradient-text ${style.title}`}>Contact Us</h1>
            </div>
        )
    }
    return (
        <Layout header={<Header />} headerbg={style.header}>

            <h1>contack</h1>
        </Layout>
    )
}

export default contactUs;