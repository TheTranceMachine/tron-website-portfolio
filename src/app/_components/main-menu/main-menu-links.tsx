import { Fragment } from 'react';
import Link from 'next/link'
import { newAlphabet } from "../../fonts";

const links = [
  { id: 0, name: 'Home', href: '/home' },
  // { id: 1, name: 'About', href: '/about' },
  { id: 2, name: 'Resume', href: '/resume' },
  { id: 3, name: 'Portfolio', href: '/portfolio' },
  // { id: 4, name: 'Blog', href: '/blog' },
  { id: 5, name: 'Contact', href: '/contact' },
]

export default function MainMenuLinks() {
  return (
    <Fragment>
      <div className='flex gap-6 items-end'>
        {links.map(({ id, name, href }) => (
          <Link href={href} key={id} className={`sm:text-3xl antialiased text-slate-700 ${newAlphabet.className}`}>{name}</Link>)
        )}
      </div>
    </Fragment>
  )
}