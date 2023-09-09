import Navbar from "@/components/Navbar";
import HorizontalSlider from "@/components/HorizontalSlider";
import Image from "next/image";
import TrendingCard from "@/components/TrendingCard";

export default function Home() {
  return (
    <div className="flex items-center flex-col md:flex-row w-full">
      <div className="items-center w-full">
        <Navbar />
      </div>
      <div className="w-[90%] flex justify-center ">
        <HorizontalSlider>
          <TrendingCard url="/images/large.jpg" />
          <TrendingCard url="/images/large.jpg" />
          <TrendingCard url="/images/large.jpg" />
          <TrendingCard url="/images/large.jpg" />
          <TrendingCard url="/images/large.jpg" />
          <TrendingCard url="/images/large.jpg" />
          <TrendingCard url="/images/large.jpg" />
          <TrendingCard url="/images/large.jpg" />
          <TrendingCard url="/images/large.jpg" />
        </HorizontalSlider>
      </div>
    </div>
  );
}
