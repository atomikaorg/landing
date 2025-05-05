import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="container">
      <div className="bg-white py-[54px] max-lg:py-[38px] px-12 max-md:px-7 rounded-[50px] bg-[url('/banner-bg.avif')] max-md:bg-[url('/banner-bg-sm.avif')] bg-contain max-md:bg-contain bg-no-repeat bg-right max-md:bg-bottom max-lg:bg-cover shadow-lg">
        <h1 className="max-w-[90%] max-md:max-w-full text-[76px] max-lg:text-[48px] max-md:text-3xl max-md:leading-8 font-semibold leading-20 max-lg:leading-16">
          {t("title.prepare_to_exam")}
        </h1>
        <div className="flex items-center gap-x-5 max-md:gap-x-4 mt-12 ">
          <div className="bg-[#8216EB] rounded-full p-4">
            <img
              src="/logo_white.png"
            alt=""
            className="size-[32px] max-md:size-[18px]"
            />
          </div>
          <p className="text-2xl max-md:text-sm text-gray-text max-w-[546px]">
            {t("title.proydi_course")}
          </p>
        </div>
        <Button 
          onClick={() => window.open('https://atomika.org/', '_blank', 'noopener,noreferrer')}
          className="rounded-full h-[92px] w-[396px] max-md:w-full bg-linear-180 from-[#C38BFA] to-[#8216EB] !text-white text-xl font-semibold mt-[144px]"
        >
          {t("actions.try_free")}
        </Button>
      </div>
      <div className="mt-[60px] grid grid-cols-[2fr_1fr] gap-x-5 gap-y-3 max-lg:grid-cols-1 fixed bottom-4 z-30 left-[50%] translate-x-[-50%] container ">
        <a href="#form" className="inline-flex justify-center items-center bg-white hover:bg-gray-50 rounded-full h-[114px] font-semibold text-[34px] max-md:text-2xl max-md:text-wrap max-md:rounded-full text-center text-purple-main cursor-pointer shadow-2xl">
          {t("actions.get_20_discrount")}
        </a>
        <a href="#form" className="inline-flex justify-center items-center rounded-full h-[114px] font-semibold !text-white text-[28px] max-md:text-2xl !bg-black cursor-pointer shadow-2xl text-center">
          {t("actions.start_now")}
        </a>
      </div>
    </section>
  );
};

export default Banner;
