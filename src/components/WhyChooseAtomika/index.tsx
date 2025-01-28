import { useTranslation } from "react-i18next";

const WhyChooseAtomika = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[208px]">
      <h2 className="font-semibold text-[76px] text-center">
        {t("title.choose_atomika")}
      </h2>
      <div className="grid grid-cols-2 h-[603px] mt-20 gap-5">
        <div className="py-[42px] px-9 rounded-[50px] bg-gradient-to-b from-[#C38BFA] via-purple-main to-[#8216EB] shadow-[24px_56px_82.2px_rgba(148,132,163,0.8)] flex flex-col justify-between">
          <h3 className="text-white font-medium text-[54px]">
            {t("title.study_with_atomika")}
          </h3>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium">
                {t("title.full_access")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium">
                {t("title.tests")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium">
                {t("title.individual_temp")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium">
                {t("title.gifts")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium">
                {t("title.examen_standarts")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium">
                {t("title.big_practices")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium">
                {t("title.flexible")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-white text-2xl font-medium">
                {t("title.best_price")}
              </div>
            </div>
          </div>
        </div>
        <div className="py-[42px] px-9 rounded-[50px] bg-[#C0C0C0] shadow-[0_10px_32px_rgba(24,39,75,0.5)] flex flex-col justify-between">
          <h3 className="text-white font-medium text-[54px]">
            {t("title.normal_study")}
          </h3>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text">
                {t("title.limited_time")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text">
                {t("title.less_practice")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text">
                {t("title.ordinary_temp")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text">
                {t("title.without_gifts")}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text">
                {t("title.less_practice")}
              </div>
              <div className="py-5 px-[30px] rounded-full bg-[#f2f2f2] text-2xl font-medium text-gray-text">
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
