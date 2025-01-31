import { useTranslation } from "react-i18next";

const PaymentTariff = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[208px]" id="pricing">
      <h2 className="font-semibold text-[76px] text-center leading-20 max-w-[70%] mx-auto max-md:leading-10 max-md:max-w-full max-md:text-[38px]">
        {t("title.choose_tariff")}
      </h2>
      <div className="grid grid-cols-2 gap-x-5 gap-y-[30px] mt-20 max-md:grid-cols-1">
        <div className="h-[369px] bg-white rounded-[40px] p-11 shadow-lg flex flex-col justify-between max-md:px-6 max-md:py-8">
          <h2 className="font-semibold text-[64px] flex items-center gap-x-3 max-md:text-[54px]">
            <span>
              <img src="/free_tariff.png" alt="" className="size-[120px] max-md:size-[96px]" />
            </span>{" "}
            Free
          </h2>
          <div>
            <span className="bg-[#f2f2f2] text-gray-text rounded-full text-2xl py-5 px-[30px] max-md:px-6 max-md:py-[14px] max-md:text-sm">
              {t("title.price_0")}
            </span>
            <span className="bg-[#f2f2f2] text-gray-text rounded-full text-2xl py-5 px-[30px] ml-1 max-md:px-6 max-md:py-[14px] max-md:text-sm">
              {t("title.lesson_per_day")}
            </span>
          </div>
        </div>
        <div className="h-[369px] bg-white rounded-[40px] shadow-lg flex max-md:flex-col justify-between p-5 pl-[47px] max-md:px-6 max-md:py-8">
          <div>
            <h4 className="text-3xl font-medium">{t("title.abilities")}</h4>
            <p className="mt-[49px] max-md:mt-4 max-md:text-lg text-2xl font-medium text-gray-text">
              {t("title.abilities_descr")}
            </p>
          </div>
          <div className="rounded-full bg-[#e9e9e9] text-2xl font-medium w-[110px] flex justify-center items-center max-md:w-full max-md:h-[76px]">
            <p className="rotate-270 max-md:rotate-0">{t("actions.start_education")}</p>
          </div>
        </div>
        <div className="h-[369px] bg-white rounded-[40px] p-11 shadow-lg flex flex-col justify-between max-md:px-6 max-md:py-8">
          <h2 className="font-semibold text-[64px] text-purple-main flex items-center gap-x-3 max-md:text-[54px]">
            <span>
              <img src="/standart_tariff.png" alt="" className="size-[120px] max-md:size-[96px] max-sm:size-[60px]" />
            </span>{" "}
            Standard
          </h2>
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-y-2">
            <span className="bg-[#f2f2f2] rounded-full text-2xl py-5 px-[30px] max-md:px-6 max-md:py-[14px] max-md:text-sm max-sm:w-[170px]">
              {t("title.price_390")}
            </span>
            <span className="bg-[#f2f2f2] rounded-full text-2xl py-5 px-[30px] ml-1 max-md:px-6 max-md:py-[14px] max-md:text-sm max-sm:w-[170px]">
              {t("title.two_lesson_per_day")}
            </span>
          </div>
        </div>
        <div className="h-[369px] bg-white rounded-[40px] shadow-lg flex max-md:flex-col justify-between p-5 pl-[47px] max-md:px-6 max-md:py-8">
          <div>
            <h4 className="text-3xl font-medium">{t("title.abilities")}</h4>
            <p className="mt-[49px] text-2xl font-medium text-gray-text max-md:mt-4 max-md:text-lg">
              {t("title.abilities2_descr")}
            </p>
          </div>
          <div className="rounded-full max-md:w-full max-md:h-[76px] bg-[#e9e9e9] text-2xl font-medium w-[110px] flex justify-center items-center border border-purple-main">
            <p className="rotate-270 text-purple-main max-md:rotate-0">
              {t("actions.start_education")}
            </p>
          </div>
        </div>
        <div className="h-[369px] bg-gradient-to-b from-[#C38BFA] via-purple-main to-[#8216EB] rounded-[40px] p-11 shadow-lg flex flex-col justify-between max-md:px-6 max-md:py-8">
          <h2 className="font-semibold text-[64px] text-white flex items-center gap-x-3 max-md:text-[54px]">
            <span>
              <img src="/pro_tariff.png" alt="" className="size-[120px] max-md:size-[96px]" />
            </span>{" "}
            PRO
          </h2>
          <div className="max-md:flex max-md:flex-col max-md:gap-y-2 flex flex-wrap gap-y-2">
            <span className="bg-white rounded-full text-2xl py-5 px-[30px] max-md:px-6 max-md:py-[14px] max-md:text-sm max-md:w-[182px]">
              {t("title.price_490")}
            </span>
            <span className="bg-white rounded-full text-2xl py-5 px-[30px] ml-1 max-md:px-6 max-md:py-[14px] max-md:text-sm max-md:w-[222px]">
              {t("title.unlimited_access")}
            </span>
          </div>
        </div>
        <div className="h-[369px] rounded-[40px] shadow-lg flex max-md:flex-col justify-between p-5 pl-[47px] bg-white max-md:px-6 max-md:py-8">
          <div>
            <h4 className="text-3xl font-medium">{t("title.abilities")}</h4>
            <p className="mt-[49px] text-2xl font-medium text-gray-text max-md:mt-4 max-md:text-lg">
              {t("title.abilities3_descr")}
            </p>
          </div>
          <div className="rounded-full max-md:w-full max-md:h-[76px] bg-gradient-to-r from-[#C38BFA] via-purple-main to-[#8216EB] text-white text-2xl font-medium w-[110px] flex justify-center items-center">
            <p className="rotate-270 max-md:rotate-0">{t("actions.start_education")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTariff;
