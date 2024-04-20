import Image from "next/image";
import { Button } from "./ui/components";
import { FiArrowUpRight } from "react-icons/fi";
import ImageCard from "./ui/components/image-card";

export default function Home() {
  return (
    <div className="flex h-full justify-between md:px-32 w-full flex-wrap">
      <div className="flex w-fit flex-col justify-between px-3 ">
        <div className="flex flex-col w-full py-10 ">
          <div className="block w-fit">
            <p className="text-5xl mb-4 leading-tight font-bold ">
              FASHION{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block">
                <span className="relative text-white">FUSION</span>
              </span>
              <br /> WEAR YOUR MASTERPIECE
            </p>
          </div>
          <p className="text-xs pb-12">
            Discover Your Signature Style Unleash your Boldness. Where Trends
            Meet Timeless
          </p>
          <div className="flex space-x-3">
            <Button name="Shop Now" primary route="/shop" />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="flex text-white items-center justify-center flex-wrap">
          <ImageCard
            src="/homepage/seasonal.png"
            height={200}
            width={200}
            headline="seasonal trends"
            details="Discover Your Signature Style Unleash your Boldness. Where Trends Meet Timeless"
            animate
          />
          <ImageCard
            src="/homepage/essentials.png"
            height={200}
            width={200}
            headline="the essentials"
            details="Discover Your Signature Style Unleash your Boldness. Where Trends Meet Timeless"
            animate
          />
        </div>
      </div>

      <div className="relative flex  pt-3 justify-end  min-w-[fit-content]">
        <Image
          className="block px-3 "
          src="/homepage/trending.png"
          width={510}
          height={10}
          priority
          alt=""
          style={{
            height: "auto",
          }}
        />
        <div className="absolute inset-0 flex items-end justify-center p-10 ">
          <div className="flex flex-col p-10 bg-white border w-full justify-between">
            <div className="flex w-full justify-between">
              <p className="text-2xl mb-4 leading-tight font-bold">
                TRENDING
                <br /> COLLECTION
              </p>
              <Button
                primary
                icon={<FiArrowUpRight color="white" size={30} />}
              />
            </div>
            <p className="text-xs ">
              Discover Your Signature Style Unleash your Boldness. Where Trends
              Meet Timeless
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
