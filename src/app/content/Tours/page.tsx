import Header from "@/app/Header";
import img from "../../../../public/images/background-tours.png";
import style from "@/app/content/Tours/tours.module.scss";
import Image from "next/image";
import triangle from "../../../../public/images/triangle.png";
import square from "../../../../public/images/square.png";
import circle from "../../../../public/images/round-lamp.png";

const Tours = () => {
  return (
    <>
      <Header />

      <div
        id={style.toursContainer}
        style={{ backgroundImage: `url(${img.src})` }}
      >

        <div className={style.lampContainer}>
          <Image
            className={style.lamp}
            src={square}
            width={200}
            height={200}
            alt="triangle"
          ></Image>

          <Image
            className={style.lamp}
            src={triangle}
            width={200}
            height={200}
            alt="triangle"
          ></Image>

          <Image
            className={style.lamp}
            src={circle}
            width={200}
            height={200}
            alt="triangle"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Tours;
