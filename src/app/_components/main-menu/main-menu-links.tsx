import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { newAlphabet } from "../../fonts";

const links = [
  { id: 1, name: "about", href: "/home" },
  { id: 2, name: "experience", href: "/resume" },
  { id: 3, name: "portfolio", href: "/portfolio" },
  { id: 4, name: "contact", href: "/contact" },
];

export default function MainMenuLinks() {
  const pathname = usePathname();

  return (
    <Fragment>
      <div className="flex gap-6 items-end">
        {links.map(({ id, name, href }) => (
          <Link
            href={href}
            key={id}
            className={`sm:text-3xl antialiased text-slate-700 ${newAlphabet.className} ${pathname === href ? "text-white underline" : ""}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </Fragment>
  );
}
