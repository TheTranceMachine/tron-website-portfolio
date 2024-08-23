import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      <Image
        src="/images/linkedin.png"
        alt="linkedin"
        width={48}
        height={48}
      />
      <Image
        src="/images/blogger.png"
        alt="blogger"
        width={48}
        height={48}
      />
      <Image
        src="/images/facebook.png"
        alt="facebook"
        width={48}
        height={48}
      />
    </div>
  );
}