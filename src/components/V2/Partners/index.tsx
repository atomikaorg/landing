import IT_PARK from "/itpark-logo.png?url";
import CYBER_PARK from "/cyber.png?url";
import MINISTRY from "/ministry-logo.png?url";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export default function Partners() {
  const {t}=useTranslation()
  const ref =useRef(null)
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={{
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }}
  transition={{ duration: 0.8, delay: 0.1 }}
      className="pt-[39px]"
    >
      <div className="container  mx-auto">

      <div className="flex items-center justify-center">
        <button className="cursor-pointer text-[#787878] rounded-[14px] bg-white py-5 px-[28px] shadow-[0px_12px_42px_-4px_#18274B1F,0px_8px_18px_-6px_#18274B1F]">
        {t("version2.info.partners")}
        </button>
      </div>

      <div className="overflow-hidden mt-[30px] md:mt-[68px]">
        <div
          className="
            flex items-center gap-[50px] lg:gap-0 md:justify-between
            overflow-x-auto lg:overflow-visible
            px-5  md:px-0
            scroll-smooth
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          <div className="flex justify-center flex-shrink-0">
            <img src={CYBER_PARK} className="w-[116px] md:w-[211px]" />
          </div>

          <div className="flex justify-center flex-shrink-0">
            <img src={IT_PARK} className="w-[166px] md:w-[303px]" />
          </div>

          <div className="flex justify-center flex-shrink-0">
            <img src={MINISTRY} className="w-[200px] md:w-[367px]" />
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
}