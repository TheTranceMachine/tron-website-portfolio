import Transition from "@/app/Transition";
import PortfolioItem from "../components/portfolio/portfolio-item";
import { init } from "next/dist/compiled/webpack/webpack";

const portfolioItems = [
  {
    id: 1,
    transition: {
      transition: { duration: 1.5 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-30",
    },
    imageSrc: "/images/portfolio/project1.png",
    descriptionText: "Composition Book",
    websiteUrl: "http://google.com",
    githubUrl: "http://github.com/TheTranceMachine"
  },
  {
    id: 2,
    transition: {
      transition: { duration: 2, delay: 1.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-20",
    },
    imageSrc: "/images/portfolio/project2.png",
    descriptionText: "FindWork",
    websiteUrl: "http://google.com",
    githubUrl: "http://github.com/TheTranceMachine"
  },
  {
    id: 3,
    transition: {
      transition: { duration: 2, delay: 1.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-10",
    },
    imageSrc: "/images/portfolio/project3.png",
    descriptionText: "Car Dealership Comparison",
    websiteUrl: "http://google.com",
    githubUrl: "http://github.com/TheTranceMachine"
  }
]

const PortfolioPage = () => (
  <div className="wrapper flex flex-col px-[41px] gap-1">
    {portfolioItems.map(({ id, transition, imageSrc, descriptionText, websiteUrl, githubUrl }) => (
      <Transition key={id} {...transition}>
        <PortfolioItem
          imageSrc={imageSrc}
          descriptionText={descriptionText}
          websiteUrl={websiteUrl}
          githubUrl={githubUrl}
        />
      </Transition>
    ))}
  </div>
)

export default PortfolioPage