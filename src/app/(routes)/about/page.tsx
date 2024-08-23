import Transition from "@/app/Transition"

const AboutPage = () => (
  <div className="px-[41px] gap-1 w-full flex">
    <Transition
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-slate-100 w-[700px] text-black p-3 shadow-md border border-tron-200 rounded-md">
        <h1>About</h1>
        <p>This is the about page</p>
      </div>
    </Transition>
    <Transition
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <div className="bg-slate-100 w-auto text-black p-3 shadow-md border border-tron-200 rounded-md">
        <h1>Links</h1>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
      </div>
    </Transition>
  </div>
)

export default AboutPage