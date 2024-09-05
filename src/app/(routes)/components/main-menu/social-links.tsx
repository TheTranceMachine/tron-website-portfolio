import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      <Image
        src="/images/linkedin.png"
        alt="linkedin"
        width={48}
        height={48}
        className="w-[48px] h-[48px] sm:w-[36px] md:w-[36px] lg:w-[48px] sm:h-[36px] md:h-[36px] lg:h-[48px]"
      />
      <Image
        src="/images/blogger.png"
        alt="blogger"
        width={48}
        height={48}
        className="w-[48px] h-[48px] sm:w-[36px] md:w-[36px] lg:w-[48px] sm:h-[36px] md:h-[36px] lg:h-[48px]"
      />
      <Image
        src="/images/facebook.png"
        alt="facebook"
        width={48}
        height={48}
        className="w-[48px] h-[48px] sm:w-[36px] md:w-[36px] lg:w-[48px] sm:h-[36px] md:h-[36px] lg:h-[48px]"
      />
    </div>
  );
}