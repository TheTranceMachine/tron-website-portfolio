const TimelineItem = ({ position }) => {
  const container = `
    max-[600px]:pl-5
    max-[600px]:pr-0
    max-[600px]:w-full 
    max-[600px]:before:left-[10px] 
    max-[600px]:before:border-solid
    max-[600px]:before:border-[4px]
    max-[600px]:before:border-white
    max-[600px]:before:border-t-[10px]
    max-[600px]:before:border-r-[10px]
    max-[600px]:before:border-b-[10px]
    max-[600px]:before:border-l-0
    max-[600px]:before:border-t-transparent
    max-[600px]:before:border-r-tron-300
    max-[600px]:before:border-b-transparent
    max-[600px]:before:border-l-transparent
    py-2 
    px-10 
    min-[600px]:w-1/2
    relative 
    bg-inherit
    after:content-[''] 
    after:absolute 
    after:w-6
    after:h-6
    after:-right-[12px] 
    after:bg-white 
    after:border-gray-400
    after:border-solid 
    after:border-[4px] 
    after:top-4
    after:rounded-full
    after:z-10
  `;

  const bothSides = `
    before:absolute 
    before:z-10 
    before:h-0 
    before:content-[' '] 
    before:w-0 
    before:top-[18px]
  `;

  const left = `
    max-[600px]:after:-left-[22px] 
    left-0 
    before:border-tron-300 
    before:border-solid 
    before:border-t-[10px] 
    before:border-r-0 
    before:border-b-[10px] 
    before:border-l-[10px] 
    before:border-t-transparent 
    before:border-r-transparent 
    before:border-b-transparent 
    before:border-l-tron-300
    before:right-[30px]
  `;

  const right = `
    max-[600px]:after:-left-[22px] 
    max-[600px]:left-0
    left-1/2 
    after:-left-[12px] 
    before:border-tron-300 
    before:border-solid 
    before:border-t-[10px] 
    before:border-r-[10px] 
    before:border-b-[10px] 
    before:border-l-0 
    before:border-t-transparent 
    before:border-r-tron-300 
    before:border-b-transparent 
    before:border-l-transparent
    before:left-[30px]
  `;

  return (
    <div className={`timeline__container ${container} ${position} ${position === "left" ? left : right} ${bothSides}`}>
      <div className="timeline__container__content relative bg-tron-300 py-5 px-7 rounded-md">
        <h2>Title Left</h2>
        <p>Test Left</p>
      </div>
    </div>
  );
};

export default TimelineItem;
