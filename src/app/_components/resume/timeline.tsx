const TimelineItem = ({ itemPosition, company, location, date, title }) => {
  const container = `
    max-[425px]:pl-14
    max-[425px]:pr-5
    max-[425px]:before:left-[46px]
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
    min-[600px]:w-1/2
    py-2 
    px-10 
    relative 
    bg-inherit
    after:content-[''] 
    after:absolute 
    after:w-6
    after:h-6
    after:-right-[12px] 
    after:bg-tron-400  
    after:border-tron-300 
    after:border-solid 
    after:border-[4px] 
    after:top-4
    after:rounded-full
    after:z-10
  `;

  const bothSides = `
    max-[425px]:after:left-[19px] 
    max-[600px]:after:-left-[22px] 
    before:absolute 
    before:z-10 
    before:h-0 
    before:content-[' '] 
    before:w-0 
    before:top-[18px]
  `;

  const left = `
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
    <div className={`${container} ${itemPosition} ${itemPosition === "left" ? left : right} ${bothSides}`}>
      <div className="relative bg-tron-300 rounded-md drop-shadow-lg shadow-black">
        <div className="py-2 px-4 text-sm border-b border-slate-400/30">{date}</div>
        <div className="py-2 px-4 border-t border-slate-100/30">
          <div className="text-lg py-3">{title}</div>
        </div>
        <div className="flex items-baseline bg-slate-600/50 text-white font-thin text-sm rounded-b-md drop-shadow-2xl shadow-black">
          <div className="py-2 px-4 border-r border-r-slate-500/40">{company}</div>
          <div className="py-2 px-4 border-l border-l-slate-200/30">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
