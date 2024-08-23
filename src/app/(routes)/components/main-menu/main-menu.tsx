import Image from "next/image";
import Transition from "../../../Transition";
import MainMenuLinks from "./main-menu-links";
import SocialLinks from "./social-links";

export default function MainMenu({ setMenuAnimationCompletion }) {
  return (
    <Transition
      initial={{ y: -62 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      onComplete={() => setMenuAnimationCompletion(true)}
    >
      <div className="flex gap-3">
        <div className="absolute z-50 top-[335px] left-[41px] px-3">
          <div className="flex justify-between">
            <MainMenuLinks />
            <SocialLinks />
          </div>
        </div>
        <Image
          src="/images/tron-website-radiator2-test.png"
          alt="Radiator2"
          width={964}
          height={408}
          priority
          quality={100}
          className="z-40"
        />
      </div>
    </Transition>
  );
}