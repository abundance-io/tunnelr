import Image from "next/image";
import { AiFillAppstore } from "react-icons/ai";
import { BiFilm } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { PiTelevisionBold } from "react-icons/pi";
import { FaFolder } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className=" transition-all flex flex-row md:flex-col items-center justify-between md:justify-start rounded-2xl my-8 mx-6  md:h-[95vh] w-[95%] py-5 bg-[#161D2F] px-4 md:w-[8vw]  xs:rounded-none xs:m-0 xs:w-full">
      <Image
        src={"/images/logo.svg"}
        alt=""
        width={33}
        height={27}
        className="md:mb-[50%]"
      />
      <div className="text-2xl flex items-center justify-between md:h-[25%] md:flex-col w-[40%]">
        <button>
          <AiFillAppstore className="transition text-white hover:text-[#FC4747] duration-1000 " />
        </button>

        <button>
          <BiFilm className="transition text-[#5A698F] hover:text-[#FC4747] duration-1000 " />
        </button>

        <button>
          <PiTelevisionBold className="transition text-[#5A698F] hover:text-[#FC4747] duration-1000 " />
        </button>

        <button>
          <BsFillBookmarkFill className=" text-xl !important transition text-[#5A698F] hover:text-[#FC4747] duration-1000 " />
        </button>
      </div>
      <div className="md:mt-auto">P</div>
    </div>
  );
}
