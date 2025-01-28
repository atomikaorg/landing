import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[202px]">
      <h2 className="font-semibold text-[76px] text-center">
        {t("title.how_it_works")}
      </h2>
      <div className="grid grid-cols-[2fr_1fr_2fr] mt-[88px]">
        <div className="flex flex-col gap-y-[150px]">
          <h3 className="opacity-50 font-semibold text-[48px]">
            {t("title.theory")}
          </h3>
          <h3 className="font-semibold text-[48px]">{t("title.practice")}</h3>
          <h3 className="opacity-50 font-semibold text-[48px]">
            {t("title.training")}
          </h3>
          <h3 className="opacity-30 font-semibold text-[48px]">
            {t("title.gifts")}
          </h3>
        </div>
        <div className="mt-6 text-center">
          <img src="/steps-img.avif" alt="" className="max-h-[725px] mx-auto" />
        </div>
        <div className="flex flex-col gap-y-[190px] mt-6 text-right">
          <p className="text-gray-text font-medium text-2xl opacity-50">
            {t("title.theory_descr")}
          </p>
          <p className="text-gray-text font-medium text-2xl">
            {t("title.practice_descr")}
          </p>
          <p className="text-gray-text font-medium text-2xl opacity-50">
            {t("title.training_descr")}
          </p>
          <p className="text-gray-text font-medium text-2xl opacity-30">
            {t("title.grifts_descr")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
