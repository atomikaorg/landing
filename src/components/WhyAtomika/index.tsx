import { useTranslation } from "react-i18next";

const WhyAtomika = () => {
  const { t } = useTranslation();

  return (
    <section className="container max-md:mt-[116px]" id="privileges">
      <h2 className="text-center w-[70%] font-semibold text-[76px] mx-auto max-md:text-[38px] max-md:leading-10 max-md:w-full">
        {t("title.why_atomika")}
      </h2>
      <div className="grid grid-cols-2 gap-5 mt-[68px] max-md:mt-[34px] max-md:grid-cols-1">
        <div className="relative bg-gradient-to-r from-[#C38BFA] via-purple-main to-[#8216EB] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px]">
          <div className="absolute inset-0 bg-[url('/original-course-bg.png')] bg-contain bg-right bg-no-repeat max-md:bg-[size:300px] max-md:bg-right-top"></div>
          <h5 className="text-white font-semibold text-3xl max-md:text-[32px] max-md:max-w-[70%] z-10">
            {t("title.original_course")}
          </h5>
          <p className="text-white font-medium text-[22px]">
            {t("title.original_course_descr")}
          </p>
        </div>
        <div className="relative bg-gradient-to-r from-[#F8DC71] to-[#F09C38] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px]">
          <div className="absolute inset-0 bg-[url('/training-card-bg.png')] bg-[length:447px] bg-right-top bg-no-repeat max-md:bg-[size:250px]"></div>
          <h5 className="text-white font-semibold text-3xl max-md:text-[32px] max-md:max-w-[70%] z-10">
            {t("title.interactive")}
          </h5>
          <p className="text-white font-medium text-[22px]">
            {t("title.interactive_descr")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5 max-md:grid-cols-1">
        <div className="relative bg-gradient-to-r from-[#D2FF73] to-[#C3FB4C] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px]">
          <div className="absolute inset-0 bg-[url('/gamification-card-bg.png')] bg-[length:203px] bg-right-top bg-no-repeat max-md:bg-[size:150px]"></div>
          <h5 className="text-black font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]">
            {t("title.gamification")}
          </h5>
          <p className="text-gray-text font-medium text-[22px]">
            {t("title.gamification_descr")}
          </p>
        </div>
        <div className="relative bg-gradient-to-r from-[#54A7FF] to-[#1C75D4] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px]">
          <div className="absolute inset-0 bg-[url('/lesson-card-bg.png')] bg-[length:362px] bg-right-top bg-no-repeat max-md:bg-[size:250px]"></div>
          <h5 className="text-white font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]">
            {t("title.lesson_with_help")}
          </h5>
          <p className="text-white font-medium text-[22px]">
            {t("title.lesson_with_help_descr")}
          </p>
        </div>
        <div className="relative bg-white h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px]">
          <div className="absolute inset-0 bg-[url('/flexible-card-bg.png')] bg-[length:164px] bg-right-top bg-no-repeat max-md:bg-[size:150px]"></div>
          <h5 className="text-black font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]">
            {t("title.flexible_study")}
          </h5>
          <p className="text-gray-text font-medium text-[22px]">
            {t("title.flexible_study_descr")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAtomika;
