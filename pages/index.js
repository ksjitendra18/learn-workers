import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const userName = props.resdata.name;
  return (
    <>
      <Head>
        <title>try workers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={inter.className}>hello {userName}</p>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hello`);
  const resdata = await res.json();
  console.log("data is", resdata);

  return {
    props: { resdata },
  };
}


