import Image from "next/image";
import { FaGithub, FaEye, FaGlobe } from "react-icons/fa";
import Button from "../button/button";
import Link from "next/link";

type PortfolioItemType = {
  imageSrc: string;
  descriptionText: string;
  websiteUrl: string;
  githubUrl: string;
  className?: string;
};

const PortfolioItem = ({ imageSrc, descriptionText, websiteUrl, githubUrl, className }: PortfolioItemType) => (
  <div className={`shadow-xl shadow-black/30 rounded-xl border-4 border-tron-sky-800 mb-2 sm:mb-7 ${className}`}>
    <Image src={imageSrc} alt="project1" width={882} height={280} className="rounded-t-lg" />
    <div className="flex justify-between bg-gradient-to-b from-tron-sky-800 from-70% to-tron-sky-700 border-t-8 border-black/25 rounded-b-md h-12 px-2 pb-1 items-center">
      <div className="text-tron-dark-green font-bold subpixel-antialiased text-xs sm:text-base">{descriptionText}</div>
      <div className="flex gap-x-2">
        <Link href={websiteUrl} target="_blank">
          <Button>
            <FaGlobe className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
          </Button>
        </Link>
        <Link href={githubUrl} target="_blank">
          <Button>
            <FaGithub className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default PortfolioItem;
