import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="container">
      <div className="bg-white py-[54px] px-12 rounded-[50px] bg-[url('/banner-bg.avif')] bg-contain bg-no-repeat bg-right shadow-lg">
        <h1 className="max-w-[90%] text-[76px] font-semibold leading-20">
          {t("title.prepare_to_exam")}
        </h1>
        <div className="flex items-center gap-x-5 mt-12 ">
          <img
            src="/masharipov.jpg"
            alt=""
            className="size-[82px] rounded-full"
          />
          <p className="text-2xl text-gray-text max-w-[546px]">{t("title.proydi_course")}</p>
        </div>
        <Button className="rounded-full h-[92px] w-[396px] bg-linear-180 from-[#C38BFA] to-[#8216EB] !text-white text-xl font-semibold mt-[144px]">
          {t("actions.try_free")}
        </Button>
      </div>
      <div className="mt-[60px] grid grid-cols-[2fr_1fr] gap-x-5">
        <Button className="bg-white hover:bg-gray-50 rounded-full h-[114px] font-semibold text-[34px] text-purple-main cursor-pointer shadow-2xl">
          {t("actions.get_20_discrount")}
        </Button>
        <Button className="rounded-full h-[114px] font-semibold !text-white text-[28px] !bg-black cursor-pointer shadow-2xl">
          {t("actions.start_now")}
        </Button>
      </div>
    </section>
  );
};

export default Banner;
