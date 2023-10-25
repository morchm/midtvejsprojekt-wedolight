"use client";
import Header from "@/app/Header";
import style from "@/app/content/Contact/contact.module.scss";
import img from "../../../../public/images/contact.png";
import { PageContent } from "@/app/types/elementTypes";
import { ReactNode, useEffect, useState } from "react";

const Contact = () => {
  const [data, setData] = useState<PageContent>();

  useEffect(() => {
    (async () => {
      const data = await fetch("/data/contact.json");
      const jsonData = await data.json();
      setData(jsonData);
    })();
  }, []);

  return (
    <>
      <Header />
      <div
        id={style.contactContainer}
        style={{ backgroundImage: `url(/images/contact.png)` }}
      >
        <div className={style.textContainer}>
        {data && <PageContent content={data} />}
        </div>
      </div>
    </>
  );
};

export default Contact;

function PageContent(props: { children?: ReactNode; content: PageContent }) {
  return (
    <>
      <h1 id={style.contactTitle}>{props.content.title}</h1>
      <p>{props.content.text}</p>

      <h1 id={style.contactTitle}>{props.content.title}</h1>
      <p>{props.content.text}</p>
      
      <h1 id={style.contactTitle}>{props.content.title}</h1>
      <p>{props.content.text}</p>
    </>
  );
}
