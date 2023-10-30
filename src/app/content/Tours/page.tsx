import Header from "@/app/Header";
import img from "../../../../public/images/background-tours.png";
import style from "@/app/content/Tours/tours.module.scss";
import Image from "next/image";

const Tours = () => {
  return (
    <>

      <div
        id={style.toursContainer}
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <div className={style.lampTitle}>
          <h3>Square</h3>
          <h3>Triangle</h3>
          <h3>Circle</h3>
        </div>

        <div className={style.lampContainer}>
          <Image
            className={style.lamp}
            src="/images/square.png"
            width={200}
            height={200}
            alt="square"
          ></Image>

          <Image
            className={style.lamp}
            src="/images/triangle.png"
            width={200}
            height={200}
            alt="triangele"
          ></Image>

          <Image
            className={style.lamp}
            src="/images/round-lamp.png"
            width={200}
            height={200}
            alt="circle"
          ></Image>
        </div>


        <div>
          
        </div>


      </div>
    </>
  );
};

export default Tours;
