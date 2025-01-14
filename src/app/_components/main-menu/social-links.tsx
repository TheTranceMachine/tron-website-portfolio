import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaRegFilePdf } from "react-icons/fa";

export default function SocialLinks() {
  const iconStyles = `
    w-12 
    h-12 
    cursor-pointer 
    rounded-full 
    border-4 
    border-slate-500/40 
    shadow-inner 
    shadow-black 
    overflow-hidden 
    content-center 
    text-slate-500 
    hover:shadow-none
  `;

  return (
    <div className="flex gap-3">
      <div className={`${iconStyles}bg-blue-500/20 hover:bg-blue-500 hover:text-white hover:border-blue-700/70`}>
        <Link
          href="https://www.linkedin.com/in/gregorysmolin/"
          target="_blank"
          aria-label="linkedin-link"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="w-6 h-6 place-items-center justify-self-center" />
        </Link>
      </div>
      <div className={`${iconStyles}bg-slate-500/20 hover:bg-white hover:text-black hover:border-black/70`}>
        <Link
          href="https://github.com/TheTranceMachine"
          target="_blank"
          aria-label="github-link"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 place-items-center justify-self-center" />
        </Link>
      </div>
      <div className={`${iconStyles}bg-green-500/20 hover:bg-green-500 hover:text-white hover:border-green-700/70`}>
        <Link href="/pdf/Grzegorz-Smolin_Resume.pdf" target="_blank" aria-label="pdf-link" rel="noopener noreferrer">
          <FaRegFilePdf className="w-6 h-6 place-items-center justify-self-center" />
        </Link>
      </div>
    </div>
  );
}
