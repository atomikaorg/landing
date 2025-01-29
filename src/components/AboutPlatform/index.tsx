import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const AboutPlatform = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[150px] h-[793px] flex justify-start items-center bg-[url('/tablets-bg.avif')] bg-contain bg-no-repeat bg-[position:490px_center]">
      <div className="flex flex-col gap-y-[34px] text-start">
        <div className="inline-flex bg-white mr-auto py-5 px-7 shadow-md justify-center items-center rounded-[14px] font-normal text-2xl">
          {t("title.about_platform")}
        </div>
        <h2 className="font-semibold text-[76px] max-w-[70%] leading-20">
          {t("title.interactive_education")}
        </h2>
        <p className="text-gray-text text-2xl font-medium max-w-[60%]">
          {t("title.about_platform_descr")}
        </p>
        <Button className="bg-gradient-to-b from-[#C38BFA] via-purple-main to-[#8216EB] w-[400px] h-[92px] rounded-full text-white font-semibold text-[20px]">
          {t("actions.start_now")}
        </Button>
      </div>
    </section>
  );
};

export default AboutPlatform;
