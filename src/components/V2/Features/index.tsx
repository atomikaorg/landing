import { useTranslation } from "react-i18next";
import {motion, useInView} from "framer-motion"
import { useRef } from "react";
export default function Features() {
  const { t } = useTranslation();
 const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div 
//     ref={ref}
//     initial="hidden"
//     animate={isInView ? "visible" : "hidden"}
//     variants={{
//     hidden: { y: 100, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   }}
//   transition={{ duration: 0.8, delay: 0.1 }}
    className="container mt-[61px] md:mt-[116px]" id="privileges">
        <div className="flex items-center justify-center">
      <button className="px-7 cursor-pointer text-[#787878] rounded-[14px] bg-white py-5 shadow-[0px_12px_42px_-4px_#18274B1F,0px_8px_18px_-6px_#18274B1F]">{t("version2.features.badge")}</button>
        </div>
      <h2 className="mt-[13px] md:mt-6 text-left mb-[10px] md:mb-5 font-semibold text-[48px] mx-auto max-md:text-[32px] max-md:leading-10 max-md:w-full">
        {t("version2.features.title")} <span className="text-[40px] md:text-[64px] bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] bg-clip-text text-transparent">{t("version2.features.atomika")}</span>{t("version2.features.title2")}
      </h2>
      <p className="text-[#6B7280] text-[15px] md:text-[24px]">{t("version2.features.description")}</p>
      <div className="grid grid-cols-2 gap-5 mt-10 max-md:mt-[30px] max-md:grid-cols-1">
        <motion.div 
          ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={{
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }}
  transition={{ duration: 0.8, delay: 0.1 }}
        className=" relative bg-gradient-to-r from-[#C38BFA] via-purple-main to-[#8216EB] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]">
          <div className="absolute inset-0 bg-[url('/original-course-bg.png')] bg-contain bg-right bg-no-repeat max-md:bg-[size:300px] max-md:bg-right-top"></div>
          <h5 className="text-white font-semibold text-3xl max-md:text-[32px] max-md:max-w-[70%] z-10">
            {t("version2.features.cards.expertTeachers.title")}
          </h5>
          <p className="text-white font-medium text-[22px] z-10">
            {t("version2.features.cards.expertTeachers.description")}
          </p>
        </motion.div>
        <motion.div 
          ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={{
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }}
  transition={{ duration: 0.8, delay: 0.1 }}
        className="relative bg-gradient-to-r from-[#F8DC71] to-[#F09C38] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px]shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]">
          <div className="absolute inset-0 bg-[url('/training-card-bg.png')] bg-[length:447px] bg-right-top bg-no-repeat max-md:bg-[size:250px]"></div>
          <h5 className="text-white font-semibold text-3xl max-md:text-[32px] max-md:max-w-[70%] z-10">
            {t("version2.features.cards.smartPractice.title")}
          </h5>
          <p className="text-white font-medium text-[22px] z-10">
            {t("version2.features.cards.smartPractice.description")}
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5 max-md:grid-cols-1">
        <motion.div 
          ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={{
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }}
  transition={{ duration: 0.8, delay: 0.1 }}
        className="relative bg-gradient-to-r from-[#D2FF73] to-[#C3FB4C] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px]  shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]">
          <div className="absolute inset-0 bg-[url('/gamification-card-bg.png')] bg-[length:203px] bg-right-top bg-no-repeat max-md:bg-[size:150px]"></div>
          <h5 className="text-black font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]">
            {t("version2.features.cards.progressSystem.title")}
          </h5>
          <p className="text-gray-text font-medium text-[22px] z-10">
            {t("version2.features.cards.progressSystem.description")}
          </p>
        </motion.div>
        <motion.div 
          ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={{
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }}
  transition={{ duration: 0.8, delay: 0.1 }}
        className="relative bg-gradient-to-r from-[#54A7FF] to-[#1C75D4] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]">
          <div className="absolute inset-0 bg-[url('/lesson-card-bg.png')] bg-[length:362px] bg-right-top bg-no-repeat max-md:bg-[size:250px]"></div>
          <h5 className="text-white font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]">
            {t("version2.features.cards.clearExplanations.title")}
          </h5>
          <p className="text-white font-medium text-[22px] z-10">
            {t("version2.features.cards.clearExplanations.description")}
          </p>
        </motion.div>
        <motion.div 
          ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={{
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }}
  transition={{ duration: 0.8, delay: 0.1 }}
        className="relative bg-white h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]">
          <div className="absolute inset-0 bg-[url('/flexible-card-bg.png')] bg-[length:164px] bg-right-top bg-no-repeat max-md:bg-[size:150px]"></div>
          <h5 className="text-black font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]">
            {t("version2.features.cards.flexibleLearning.title")}
          </h5>
          <p className="text-gray-text font-medium text-[22px] z-10">
            {t("version2.features.cards.flexibleLearning.description")}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
