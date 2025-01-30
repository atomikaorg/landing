import { useTranslation } from "react-i18next";

const WhyChooseAtomika = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[208px] max-md:mt-[116px]">
      <h2 className="font-semibold text-[76px] text-center leading-20 max-w-[80%] mx-auto max-md:leading-10 max-md:max-w-full max-md:text-[38px]">
        {t("title.choose_atomika")}
      </h2>
      <div className="grid grid-cols-2 h-[603px] max-md:h-auto mt-20 gap-5 max-md:grid-cols-1">
        <div className="py-[42px] px-9 rounded-[50px] bg-gradient-to-b from-[#C38BFA] via-purple-main to-[#8216EB] shadow-[24px_56px_82.2px_rgba(148,132,163,0.8)] flex flex-col justify-between">
          <h3 className="text-[#f3f3f3] font-medium text-[54px] max-md:text-[42px]">
            {t("title.study_with_atomika")}
          </h3>
          <div className="flex flex-col gap-y-2 max-md:mt-20">
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.full_access")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.tests")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.individual_temp")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.gifts2")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.examen_standarts")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.big_practices")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.flexible")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.best_price")}
              </div>
            </div>
          </div>
        </div>
        <div className="py-[42px] px-9 rounded-[50px] bg-[#C0C0C0] shadow-[0_10px_32px_rgba(24,39,75,0.5)] flex flex-col justify-between">
          <h3 className="text-[#f3f3f3] font-medium text-[54px] max-md:text-[42px]">
            {t("title.normal_study")}
          </h3>
          <div className="flex flex-col gap-y-2 max-md:mt-20">
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.limited_time")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.less_practice")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.ordinary_temp")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.without_gifts")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.less_practice")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text max-md:text-xs max-md:px-[26px] max-md:py-[14px]">
                {t("title.big_price")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAtomika;
