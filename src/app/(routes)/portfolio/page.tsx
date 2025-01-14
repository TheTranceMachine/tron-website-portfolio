import Transition from "@/app/Transition";
import PortfolioItem from "../../_components/portfolio/portfolio-item";

const portfolioItems = [
  {
    id: 1,
    transition: {
      transition: { duration: 1.5 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-30 relative",
    },
    imageSrc: "/images/portfolio/project1.png",
    descriptionText: "Composition Book",
    websiteUrl: "http://google.com",
    githubUrl: "http://github.com/TheTranceMachine",
  },
  {
    id: 2,
    transition: {
      transition: { duration: 2, delay: 1.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-20 relative",
    },
    imageSrc: "/images/portfolio/project2.png",
    descriptionText: "FindWork",
    websiteUrl: "http://google.com",
    githubUrl: "http://github.com/TheTranceMachine",
  },
  {
    id: 3,
    transition: {
      transition: { duration: 2, delay: 2.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-10 relative",
    },
    imageSrc: "/images/portfolio/project3.png",
    descriptionText: "Car Dealership Comparison",
    websiteUrl: "http://google.com",
    githubUrl: "http://github.com/TheTranceMachine",
  },
];

export default function PortfolioPage() {
  return (
    <div className="wrapper flex flex-col gap-1 pt-1 px-[15px] sm:px-[41px]">
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
  );
}
