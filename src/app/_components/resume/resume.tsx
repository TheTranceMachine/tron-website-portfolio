import Transition from "@/app/Transition";
import TimelineItem from "./timeline";

const jobs = [
  {
    id: 1,
    itemPosition: "left",
    company: "AJC Transport",
    location: "Atlanta, US",
    date: "10/2023 - 10/2024",
    title: "Contract Software Engineer",
    transition: {
      transition: { duration: 1.5 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-50 relative",
    },
  },
  {
    id: 2,
    itemPosition: "right",
    company: "IBM",
    location: "Wroclaw, PL",
    date: "07/2018 - 03/2023",
    title: "Senior Software Engineer",
    transition: {
      transition: { duration: 2, delay: 1.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-40 relative",
    },
  },
  {
    id: 3,
    itemPosition: "left",
    company: "AgriCircle",
    location: "Rapperswil, CH",
    date: "05/2015 - 05/2018",
    title: "UI/UX Designer/React Developer",
    transition: {
      transition: { duration: 2, delay: 2.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-30 relative",
    },
  },
  {
    id: 4,
    itemPosition: "right",
    company: "Emarsys",
    location: "London, UK",
    date: "04/2014 - 01/2015",
    title: "Technical Integration Manager",
    transition: {
      transition: { duration: 2, delay: 3.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-20 relative",
    },
  },
  {
    id: 5,
    itemPosition: "left",
    company: "Emarsys",
    location: "London, UK",
    date: "04/2014 - 01/2015",
    title: "Technical Integration Manager",
    transition: {
      transition: { duration: 2, delay: 4.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-10 relative",
    },
  },
  {
    id: 6,
    itemPosition: "right",
    company: "Emarsys",
    location: "London, UK",
    date: "03/2012 - 03/2014",
    title: "Technical Integration Executive",
    transition: {
      transition: { duration: 2, delay: 5.0 },
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "z-0 relative",
    },
  },
];

export default function Resume() {
  const timeline = `
    max-[600px]:after:left-[31px] 
    after:content-[''] 
    after:absolute 
    after:w-[6px] 
    after:bg-tron-400
    after:top-0 
    after:bottom-0 
    after:left-1/2 
    after:-ml-[3px] 
  `;

  return (
    <div className={`timeline ${timeline}`}>
      {jobs.map(({ id, transition, ...job }) => (
        <Transition key={id} {...transition}>
          <TimelineItem {...job} />
        </Transition>
      ))}
    </div>
  );
}
