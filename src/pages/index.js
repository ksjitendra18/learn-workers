import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [resData, setResData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch("https://learn-workers.pages.dev/api/hello");
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hello`);
      const data = await res.json();
      setResData(data.name);
      console.log("here is data", data);
    };
    fetchData();
  }, []);

  const userName = props.resdata.name;
  return (
    <>
      <Head>
        <title>try workers</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <p className="text-xl">Data Server ---&gt; {userName}</p>
      <p className="text-xl">Data Client ---&gt; {resData}</p>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hello`);
  // const res = await fetch(`https://bc4d1bbb.learn-workers.pages.dev/api/hello`);
  // const res = await fetch(`https://learn-workers.pages.dev/api/hello`);
  const resdata = await res.json();
  console.log("data is", resdata);

  return {
    props: { resdata },
  };
}
