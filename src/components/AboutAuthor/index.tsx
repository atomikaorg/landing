import { useTranslation } from "react-i18next";
import Mortarboard from "/public/mortarboard.svg";
import Microscope from "/public/microscope.svg";
const AboutAuthor = () => {
  const { t } = useTranslation();

  return (
    <section className="contianer">
      <div className="text-center">
        <div className="inline-flex bg-white mx-auto py-5 max-md:py-4 px-7 max-md:px-[26px] shadow-md justify-center items-center rounded-[14px] font-normal text-2xl max-md:text-base">
          {t("title.about_author")}
        </div>
        <h2 className="mt-[34px] font-semibold text-[76px] mx-auto leading-20 max-md:max-w-full max-md:text-[38px] max-md:leading-10 relative max-w-[934px]">
          {t("title.your_professor")}
          <img src={Mortarboard} alt="mortarboard"  className="absolute top-[-100px] left-[-300px] max-lg:hidden"/>
        </h2>
        <p className="mt-[34px] max-md:mt-[14px] font-medium text-[34px] max-md:text-[20px] text-gray-text max-md:max-w-full mx-auto max-w-[934px]">
          {t("title.author_descr")}
        </p>
        <div className="flex flex-col items-center gap-y-8 max-md:gap-y-[26px] mt-[78px] max-md:mt-16 relative">
        <img src={Microscope} alt="microscope"  className="absolute bottom-[-100px] right-0 max-lg:hidden"/>
          <img
            src="/masharipov.jpg"
            alt=""
            className="size-[200px] max-md:size-[158px] rounded-full"
          />
          <p className="font-medium text-[34px] max-md:text-2xl">М.С.Машарипов</p>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
