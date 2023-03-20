import React from "react";
import Image from "next/image";
import MobileImg from "../assets/icon.svg";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Applatin " content="Home Page">
    <div className="bg-[url('../assets/bg.png')] h-[93vh]	 bg-cover bg-center  flex justify-center   bg-fixed   ">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]" />
      <div className="z-[2]">
        <div className=" container text-white">
          <div className="">
            <h2 className="text-4xl font-bold">Hello</h2>
            <p className="py-2 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, id ut fugiat numquam minima, porro in ratione quo
              delectus corrupti voluptatibus? Possimus, molestias! Eius, sunt
              dolorum pariatur labore blanditiis numquam.
            </p>
            <div className="flex">
              <Image src={MobileImg} alt="Logo" width={32} height={32} />
              <h2 className="text-4xl font-bold flex mx-2">19555</h2>
            </div>
          </div>
        </div>
        <div className=" pt-[25vh]">
          <div className="bg-white ">
            <div className="text-blue-600">
              <div>
                <h1>Hello</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
