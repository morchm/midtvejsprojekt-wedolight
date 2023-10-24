import Header from "@/app/Header"
import img from "../../../../public/images/background-tours.png"
import style from "@/app/content/Tours/tours.module.scss"

const Tours = () => {
    return (
        <>
        <Header/>
        <div id={style.toursContainer} style={{backgroundImage: `url(${img.src})` }}>
            <div>tours</div>
        </div>
        </>
    )
}

export default Tours