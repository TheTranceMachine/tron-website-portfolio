import { useState } from "react";
import Image from "next/image";
import Transition from "../../Transition";
import MainMenuLinks from "./main-menu-links";
import SocialLinks from "./social-links";

const MainMenu = ({ setMenuAnimationCompletion, isMobile }) => {
  const [customClassName, setCustomClassName] = useState<string>("");
  const animationComplete = () => {
    setCustomClassName("z-50 relative");
    setMenuAnimationCompletion(true);
  };

  return (
    <Transition
      initial={{ y: -62 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      onComplete={animationComplete}
      className={customClassName}
    >
      <div className="flex gap-3">
        <div
          className={`main-menu absolute z-50 ${isMobile ? "top-[107px]" : "top-[115px]"} sm:top-[87px] md:top-[258px] lg:top-[330px] w-[300px] sm:w-[712px] md:w-[712px] lg:w-[882px] left-[0px] sm:left-[25px] md:left-[25px] lg:left-[41px] px-3 flex sm:justify-between justify-center`}
        >
          <MainMenuLinks />
          {!isMobile && <SocialLinks />}
        </div>
        <Image
          src="/images/tron-website-radiator-menu.png"
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
};

export default MainMenu;
