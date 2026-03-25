import { useTranslation } from "react-i18next";
import {motion, useInView} from "framer-motion"
import { useRef } from "react";
const WhyAtomika = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const atomikaItems = [
    t("version2.whyAtomika.atomika.items.0"),
    t("version2.whyAtomika.atomika.items.1"),
    t("version2.whyAtomika.atomika.items.2"),
    t("version2.whyAtomika.atomika.items.3"),
    t("version2.whyAtomika.atomika.items.4"),
    t("version2.whyAtomika.atomika.items.5"),
    t("version2.whyAtomika.atomika.items.6"),
  ];

  const otherCoursesItems = [
    t("version2.whyAtomika.otherCourses.items.0"),
    t("version2.whyAtomika.otherCourses.items.1"),
    t("version2.whyAtomika.otherCourses.items.2"),
    t("version2.whyAtomika.otherCourses.items.3"),
    t("version2.whyAtomika.otherCourses.items.4"),
    t("version2.whyAtomika.otherCourses.items.5"),
    t("version2.whyAtomika.otherCourses.items.6"),
  ];

  return (
    <div className="bg-[#0F0A1F] mt-[30px] md:mt-[100px] pb-[30px] md:pb-[141px]">
      <motion.div
       ref={ref}
       initial="hidden"
       animate={isInView ? "visible" : "hidden"}
       variants={{
       hidden: { y: 100, opacity: 0 },
       visible: { y: 0, opacity: 1 }
       }}
       transition={{ duration: 0.8, delay: 0.1 }}
      className="relative container pt-[30px] md:pt-[100px]">
       <h2 className="text-[#F9FAFB]  drop-shadow-[0_4px_19.9px_rgba(255,255,255,0.27)] text-[32px] md:text-[48px] leading-[1.1] md:leading-[1.2]  mb-[10px] md:mb-5">{t("version2.whyAtomika.title")}<span className=" text-[40px] md:text-[64px]  bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)]  bg-clip-text text-transparent leading-none">{t("version2.features.atomika")}</span>{t("version2.whyAtomika.title2")}</h2>   
        <p className="text-white/60 text-[15px] md:text-[24px] font-normal mb-[30px] md:mb-10">{t("version2.whyAtomika.description")}</p>
        <div className="flex items-center gap-6 justify-center max-md:flex-col">
        <div className=" relative px-9 pt-9 pb-8 rounded-[40px] maxw-[585px] w-full overflow-hidden     bg-[linear-gradient(206.98deg,#C38BFA_-27.16%,#A755F7_25.69%,#8216EB_95.99%)]">
         <img
           src="/atombg.png"
           alt=""
           className="absolute top-0 right-0 w-[250px] md:w-[250px] lg:w-[300px] pointer-events-none"
         />
          <h4 className="text-[#F9FAFB] text-[32px]">{t("version2.whyAtomika.atomika.title")}</h4>
          {atomikaItems.map((item, index) => (
            <p className={`text-[#F9FAFB] flex items-center gap-3  ${index!=6 ?"border-b border-[#FFFFFF14]" :null} py-3`} key={index}><img src="/check.svg" alt="" /> {item}</p>
          ))}
        </div>

        <div className=" px-9 pt-9 pb-8 rounded-[40px] max-w-[585px] w-full bg-[#1B162A]">
          <h4 className="text-[#F9FAFB] text-[32px] " >{t("version2.whyAtomika.otherCourses.title")}</h4>
          {otherCoursesItems.map((item, index) => (
            <p className={`text-[#F9FAFB] flex items-center gap-3  ${index!=6 ?"border-b border-[#FFFFFF14]" :null} py-3`} key={index}> <img src={index === 3? "/danger.png": index === 4  ? "/check.svg" : "/x.png" } alt="" /> {item}</p>
          ))}
        </div>
        </div>
        <div className="absolute  bottom-[-150px] right-[-16%]   w-[284px] h-[300px] bg-[url('/pen.png')] bg-contain bg-no-repeat hidden lg:block  "></div>
      </motion.div>
    </div>
  );
};

export default WhyAtomika;
