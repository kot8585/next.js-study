import Image from "next/image";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import os from "os"; //노드 API
import Counter from "../components/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // notFound();
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지다!</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
