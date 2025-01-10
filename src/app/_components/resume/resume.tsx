import TimelineItem from "./timeline";

export default function Resume() {
  const timeline = `
    max-[600px]:after:left-[31px] 
    after:content-[''] 
    after:absolute 
    after:w-[6px] 
    after:bg-white 
    after:top-0 
    after:bottom-0 
    after:left-1/2 
    after:-ml-[3px]
  `;

  return (
    <div className={`timeline ${timeline}`}>
      <TimelineItem position="left" />
      <TimelineItem position="right" />
    </div>
  );
}
