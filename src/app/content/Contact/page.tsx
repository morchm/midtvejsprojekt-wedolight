import Header from "@/app/Header"
import style from "@/app/content/Contact/contact.module.scss"
import img from "../../../../public/images/contact.png"

const Contact = () =>{
    return (
        <>
        <Header/>
        <div id={style.contactContainer} style={{backgroundImage: `url(${img.src})` }}>
            <div>tours</div>
        </div>
        </>
    )
}

export default Contact