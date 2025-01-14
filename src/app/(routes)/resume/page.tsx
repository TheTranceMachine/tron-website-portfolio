import Transition from "@/app/Transition";
import Resume from "../../_components/resume/resume";

export default function ResumePage() {
  return (
    <div className="wrapper lg:px-[41px] -mt-4">
      <Transition initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
        <div className="content pt-4">
          <Resume />
        </div>
      </Transition>
    </div>
  );
}
