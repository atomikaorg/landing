import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const AboutPlatform = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[150px] max-md:mt-[116px] h-[793px] max-md:h-[950px] flex justify-start items-center max-md:items-start bg-[url('/tablets-bg.avif')] bg-contain bg-no-repeat bg-[position:490px_center] max-md:bg-[position:-50px_bottom]">
      <div className="flex flex-col gap-y-[34px] text-start">
        <div className="inline-flex bg-white mr-auto py-5 px-7 shadow-md justify-center items-center rounded-[14px] font-normal text-2xl max-md:mx-auto">
          {t("title.about_platform")}
        </div>
        <h2 className="font-semibold text-[76px] max-w-[70%] leading-20 max-md:text-[38px] max-md:leading-10 max-md:max-w-full max-md:text-center">
          {t("title.interactive_education")}
        </h2>
        <p className="text-gray-text text-2xl font-medium max-w-[60%] max-md:max-w-full max-md:text-center max-md:text-lg">
          {t("title.about_platform_descr")}
        </p>
        <Button className="bg-gradient-to-b from-[#C38BFA] via-purple-main to-[#8216EB] w-[400px] max-md:w-full max-md:mx-auto h-[92px] rounded-full text-white font-semibold text-[20px]">
          {t("actions.start_now")}
        </Button>
      </div>
    </section>
  );
};

export default AboutPlatform;
