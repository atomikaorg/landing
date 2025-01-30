import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[202px] max-md:mt-[116px]">
      <h2 className="font-semibold text-[76px] text-center max-w-[80%] mx-auto leading-20 max-md:text-[38px] max-md:leading-10 max-md:max-w-full">
        {t("title.how_it_works")}
      </h2>
      <div className="flex flex-col gap-y-[150px] mt-[88px] w-full relative max-md:mt-[48px] max-lg:gap-y-11">
        <div className="flex w-full justify-between items-center max-lg:bg-white max-lg:rounded-[28px] max-lg:px-5 max-lg:py-6 max-lg:flex-col max-lg:items-start  max-lg:z-10">
          <div className="lg:hidden max-lg:flex size-[46px] border border-purple-main bg-purple-light rounded-full justify-center items-center">
            <div className="size-7 bg-purple-main rounded-full"></div>
          </div>
          <h3 className="opacity-50 font-semibold text-[48px] max-lg:text-[32px] max-lg:mb-10">
            {t("title.theory")}
          </h3>
          <p className="text-gray-text font-medium text-2xl opacity-50 max-w-[483px] max-lg:text-base max-lg:opacity-100">
            {t("title.theory_descr")}
          </p>
        </div>
        <div className="flex w-full justify-between items-center max-lg:bg-white max-lg:rounded-[28px] max-lg:px-5 max-lg:py-6 max-lg:flex-col max-lg:items-start  max-lg:z-10">
          <div className="lg:hidden max-lg:flex size-[46px] border border-purple-main bg-purple-main rounded-full justify-center items-center">
            <div className="size-7 bg-purple-light rounded-full"></div>
          </div>
          <h3 className="font-semibold text-[48px] max-lg:text-[32px] max-lg:mb-10">
            {t("title.practice")}
          </h3>
          <p className="text-gray-text font-medium text-2xl max-w-[483px] max-lg:text-base max-lg:opacity-100">
            {t("title.practice_descr")}
          </p>
        </div>
        <div className="flex w-full justify-between items-center max-lg:bg-white max-lg:rounded-[28px] max-lg:px-5 max-lg:py-6 max-lg:flex-col max-lg:items-start  max-lg:z-10">
          <div className="lg:hidden max-lg:flex size-[46px] border border-[#e9e9e9] bg-[#F3F3F3] rounded-full justify-center items-center">
            <div className="size-7 bg-[#C0C0C0] rounded-full"></div>
          </div>
          <h3 className="opacity-50 font-semibold text-[48px] max-lg:text-[32px] max-lg:mb-10">
            {t("title.training")}
          </h3>
          <p className="text-gray-text font-medium text-2xl opacity-50 max-w-[483px] max-lg:text-base max-lg:opacity-100">
            {t("title.training_descr2")}
          </p>
        </div>
        <div className="flex w-full justify-between items-center max-lg:bg-white max-lg:rounded-[28px] max-lg:px-5 max-lg:py-6 max-lg:flex-col max-lg:items-start  max-lg:z-10">
          <div className="lg:hidden max-lg:flex size-[46px] border border-[#e9e9e9] bg-[#F3F3F3] rounded-full justify-center items-center">
            <div className="size-7 bg-[#C0C0C0] rounded-full"></div>
          </div>
          <h3 className="opacity-30 font-semibold text-[48px] max-lg:text-[32px] max-lg:mb-10">
            {t("title.gifts")}
          </h3>
          <p className="text-gray-text font-medium text-2xl opacity-30 max-w-[483px] max-lg:text-base max-lg:opacity-100">
            {t("title.grifts_descr")}
          </p>
        </div>
        <div className="absolute text-center right-[50%] translate-x-[50%] max-lg:right-[90%] max-lg:translate-x-0 max-lg:top-[150px] max-md:right-[80%] max-[432px]:right-[77%]">
          <img src="/steps-img.avif" alt="" className="h-[725px] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
