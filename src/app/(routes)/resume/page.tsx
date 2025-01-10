import Transition from "@/app/Transition";
import Resume from "../../_components/resume/resume";

export default function ResumePage() {
  return (
    <div className="wrapper px-[41px] gap-1">
      <Transition initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
        <div className="content">
          <Resume />
        </div>
      </Transition>
    </div>
  );
}
