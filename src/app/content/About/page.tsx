"use client";
import style from "@/app/content/About/about.module.scss";
import { PageContent } from "@/app/types/elementTypes";
import { ReactNode, useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState<PageContent>();

  useEffect(() => {
    (async () => {
      const data = await fetch("/data/about.json");
      const jsonData = await data.json();
      setData(jsonData);
    })();
  }, []);

  return (
    <div
      id={style.aboutContainer}
      style={{ backgroundImage: `url(/images/front.png)` }}
    >
      {data && <PageContent content={data} />}
    </div>
  );
};

function PageContent(props: { children?: ReactNode; content: PageContent }) {
  return (
    <>
      <h1 id={style.aboutTitle}>{props.content.title}</h1>
      <p>{props.content.text}</p>
    </>
  );
}

export default About;
