import Image from "next/image";
import { ReactNode } from "react";

interface TrendingCardProps {
  url: string;
  movieData?: any;
}

export default function TrendingCard(props: TrendingCardProps) {
  return (
    <div className="relative min-h-[140px] min-w-[240px] sm:min-w-[400px] sm:min-h-[230px] lg:min-w-[470px] rounded-lg">
      <div className="absolute inset-0">
        <Image fill alt={""} src={props.url} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        this is the child text
      </div>
    </div>
  );
}
