import Banner from "@/components/layouts/Banner";
import Header from "@/components/layouts/Header";
import HomeMenu from "@/components/layouts/HomeMenu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HomeMenu />
    </>
  );
}
