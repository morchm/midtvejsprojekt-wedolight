"use client";
import style from "@/app/content/About/about.module.scss";
import img from "../../../../public/images/front.png";
import { aboutContent, Content } from "@/app/types/elementTypes";
import { useEffect, useState } from "react";
import { content } from "../../../../public/json/elements.json";

const About = () => {
  const [data, setData] = useState<aboutContent | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetch("");

      const jsonData = await data.json();

      setData(jsonData);
    })();
  }, []);

  return (
    <div
      id={style.aboutContainer}
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div>
        {data &&
          data.content.map((item: Content, index: number) => (
            <div key={index}>{item.id}</div>
          ))}
      </div>
    </div>
  );
};

export default About;
