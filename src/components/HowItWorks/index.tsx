import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[202px]">
      <h2 className="font-semibold text-[76px] text-center max-w-[80%] mx-auto leading-20">
        {t("title.how_it_works")}
      </h2>
      <div className="flex flex-col gap-y-[150px] mt-[88px] w-full relative">
        <div className="flex w-full justify-between items-center">
          <h3 className="opacity-50 font-semibold text-[48px]">
            {t("title.theory")}
          </h3>
          <p className="text-gray-text font-medium text-2xl opacity-50 max-w-[483px]">
            {t("title.theory_descr")}
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <h3 className="font-semibold text-[48px]">{t("title.practice")}</h3>
          <p className="text-gray-text font-medium text-2xl max-w-[483px]">
            {t("title.practice_descr")}
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <h3 className="opacity-50 font-semibold text-[48px]">
            {t("title.training")}
          </h3>
          <p className="text-gray-text font-medium text-2xl opacity-50 max-w-[483px]">
            {t("title.training_descr2")}
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <h3 className="opacity-30 font-semibold text-[48px]">
            {t("title.gifts")}
          </h3>
          <p className="text-gray-text font-medium text-2xl opacity-30 max-w-[483px]">
            {t("title.grifts_descr")}
          </p>
        </div>
        <div className="absolute text-center right-[50%] translate-x-[50%]">
          <img src="/steps-img.avif" alt="" className="max-h-[725px] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
