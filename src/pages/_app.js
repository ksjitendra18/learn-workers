import "../../styles/globals.css";
import { Inter } from "@next/font/google";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Header />
      <div className="px-10 mt-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
