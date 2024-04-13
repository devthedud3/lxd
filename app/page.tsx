import Image from "next/image";
import { Banner, Button, Header } from "./ui/components";
import { FiArrowUpRight } from "react-icons/fi";
import ImageCard from "./ui/components/image-card";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center p-0">
      <Banner show />
      <div className="flex flex-col h-full w-full px-2 pb-4">
        <Header />
        <div className="flex h-full items-center justify-between w-full flex-wrap">
          <div className="flex w-fit flex-col justify-between px-3 mr-3 ">
            <div className="flex flex-col w-full py-10 ">
              <div className="block w-fit">
                <p className="text-5xl mb-4 leading-tight font-bold ">
                  FASHION FUSION
                  <br /> WEAR YOUR MASTERPIECE
                </p>
              </div>
              <p className="text-xs pb-12">
                Discover Your Signature Style Unleash your Boldness. Where
                Trends Meet Timeless
              </p>
              <div className="flex space-x-3">
                <Button name="Shop Now" primary route="/shop" />
                <Button name="Learn More" />
              </div>
            </div>
            <div className="flex text-white items-center justify-center flex-wrap">
              <ImageCard
                src="/homepage/seasonal.png"
                size={400}
                headline="seasonal trends"
                details="Discover Your Signature Style Unleash your Boldness. Where Trends Meet Timeless"
                animate
              />
              <ImageCard
                src="/homepage/essentials.png"
                size={400}
                headline="the essentials"
                details="Discover Your Signature Style Unleash your Boldness. Where Trends Meet Timeless"
                animate
              />
            </div>
          </div>

          <div className="relative flex w-fit justify-center">
            <Image
              className="block p-3"
              src="/homepage/trending.png"
              width={510}
              height={10}
              alt=""
            />
            <div className="absolute inset-0 flex items-end justify-center p-10 ">
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
