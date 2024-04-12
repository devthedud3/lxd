import Image from "next/image";
import { Banner, Button, Header } from "./ui/components";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center p-0">
      <Banner message="Free shipping for our first 200 orders" />
      <div className="flex flex-col h-full w-full px-10 pb-4">
        <Header />
        <div className="flex h-full">
          <div className="flex flex-1 flex-col justify-between px-3 mr-3">
            <div className="flex flex-col w-full py-10 ">
              <div className="flex w-full justify-between">
                <p className="text-5xl mb-4 leading-tight font-bold">
                  FASHION FUSION
                  <br /> WEAR YOUR MASTERPIECE
                </p>
              </div>
              <p className="text-xs pb-12">
                Discover Your Signature Style Unleash your Boldness. Where
                Trends Meet Timeless
              </p>
              <div className="flex space-x-3">
                <Button name="Shop Now" primary />
                <Button name="Learn More" />
              </div>
            </div>
            <div className="flex text-white space-x-4">
              <div className="relative">
                <Image
                  className="block"
                  src="/homepage/seasonal.png"
                  width={400}
                  height={400}
                  alt=""
                />
                <div className="absolute inset-0 flex items-end justify-center p-4 ">
                  Test
                </div>
              </div>
              <div className="relative">
                <Image
                  className="block"
                  src="/homepage/essentials.png"
                  width={400}
                  height={400}
                  alt=""
                />
                <div className="absolute inset-0 flex items-end justify-center p-4 ">
                  Test
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-fit">
            <Image
              className="block"
              src="/homepage/trending.png"
              width={510}
              height={10}
              alt=""
            />
            <div className="absolute inset-0 flex items-end justify-center p-4 ">
              <div className="flex flex-col p-10 bg-white border w-full justify-between">
                <div className="flex w-full justify-between">
                  <p className="text-2xl mb-4 leading-tight font-bold">
                    TRENDING
                    <br /> COLLECTION
                  </p>
                  <Button primary icon={<FiArrowUpRight size={30} />} />
                </div>
                <p className="text-xs ">
                  Discover Your Signature Style Unleash your Boldness. Where
                  Trends Meet Timeless
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
