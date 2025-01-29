import { useTranslation } from "react-i18next";

const PaymentTariff = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[208px]">
      <h2 className="font-semibold text-[76px] text-center leading-20 max-w-[70%] mx-auto">
        {t("title.choose_tariff")}
      </h2>
      <div className="grid grid-cols-2 gap-x-5 gap-y-[30px] mt-20">
        <div className="h-[369px] bg-white rounded-[40px] p-11 shadow-lg flex flex-col justify-between">
          <h2 className="font-semibold text-[64px] flex items-center gap-x-3">
            <span>
              <img src="/free_tariff.png" alt="" className="size-[120px]" />
            </span>{" "}
            Free
          </h2>
          <div>
            <span className="bg-[#f2f2f2] text-gray-text rounded-full text-2xl py-5 px-[30px]">
              {t("title.price_0")}
            </span>
            <span className="bg-[#f2f2f2] text-gray-text rounded-full text-2xl py-5 px-[30px] ml-1">
              {t("title.lesson_per_day")}
            </span>
          </div>
        </div>
        <div className="h-[369px] bg-white rounded-[40px] shadow-lg flex justify-between p-5 pl-[47px]">
          <div>
            <h4 className="text-3xl font-medium">{t("title.abilities")}</h4>
            <p className="mt-[49px] text-2xl font-medium text-gray-text">
              {t("title.abilities_descr")}
            </p>
          </div>
          <div className="rounded-full bg-[#e9e9e9] text-2xl font-medium w-[110px] flex justify-center items-center">
            <p className="rotate-270">{t("actions.start_education")}</p>
          </div>
        </div>
        <div className="h-[369px] bg-white rounded-[40px] p-11 shadow-lg flex flex-col justify-between">
          <h2 className="font-semibold text-[64px] text-purple-main flex items-center gap-x-3">
            <span>
              <img src="/standart_tariff.png" alt="" className="size-[120px]" />
            </span>{" "}
            Standard
          </h2>
          <div>
            <span className="bg-[#f2f2f2] rounded-full text-2xl py-5 px-[30px]">
              {t("title.price_390")}
            </span>
            <span className="bg-[#f2f2f2] rounded-full text-2xl py-5 px-[30px] ml-1">
              {t("title.two_lesson_per_day")}
            </span>
          </div>
        </div>
        <div className="h-[369px] bg-white rounded-[40px] shadow-lg flex justify-between p-5 pl-[47px]">
          <div>
            <h4 className="text-3xl font-medium">{t("title.abilities")}</h4>
            <p className="mt-[49px] text-2xl font-medium text-gray-text">
              {t("title.abilities2_descr")}
            </p>
          </div>
          <div className="rounded-full bg-[#e9e9e9] text-2xl font-medium w-[110px] flex justify-center items-center border border-purple-main">
            <p className="rotate-270 text-purple-main">
              {t("actions.start_education")}
            </p>
          </div>
        </div>
        <div className="h-[369px] bg-gradient-to-b from-[#C38BFA] via-purple-main to-[#8216EB] rounded-[40px] p-11 shadow-lg flex flex-col justify-between">
          <h2 className="font-semibold text-[64px] text-white flex items-center gap-x-3">
            <span>
              <img src="/pro_tariff.png" alt="" className="size-[120px]" />
            </span>{" "}
            PRO
          </h2>
          <div>
            <span className="bg-white rounded-full text-2xl py-5 px-[30px]">
              {t("title.price_490")}
            </span>
            <span className="bg-white rounded-full text-2xl py-5 px-[30px] ml-1">
              {t("title.unlimited_access")}
            </span>
          </div>
        </div>
        <div className="h-[369px] rounded-[40px] shadow-lg flex justify-between p-5 pl-[47px] bg-white">
          <div>
            <h4 className="text-3xl font-medium">{t("title.abilities")}</h4>
            <p className="mt-[49px] text-2xl font-medium text-gray-text">
              {t("title.abilities3_descr")}
            </p>
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#C38BFA] via-purple-main to-[#8216EB] text-white text-2xl font-medium w-[110px] flex justify-center items-center">
            <p className="rotate-270">{t("actions.start_education")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTariff;
