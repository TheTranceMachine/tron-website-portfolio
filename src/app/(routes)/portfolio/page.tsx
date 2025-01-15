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
    imageSrc: "/images/portfolio/composition-book.png",
    descriptionText: "Composition Book",
    websiteUrl: "https://composition-book-demo.vercel.app/",
    githubUrl: "https://github.com/TheTranceMachine/composition-book-demo",
  },
  {
    id: 2,
    transition: {
      transition: { duration: 2, delay: 1.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-20 relative",
    },
    imageSrc: "/images/portfolio/github-notifications.png",
    descriptionText: "Github Notifications",
    websiteUrl: "https://github-notifications-demo.vercel.app/",
    githubUrl: "https://github.com/TheTranceMachine/github-notifications-demo",
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
