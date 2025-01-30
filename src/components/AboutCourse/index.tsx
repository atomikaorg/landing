import { useTranslation } from "react-i18next";

const AboutCourse = () => {
  const { t } = useTranslation();
  return (
    <section
      className="mt-[154px] container h-[1250px] max-md:h-[1050px]"
      id="about_course"
    >
      <div className="text-center bg-[url('/about-bg.avif')] bg-contain max-md:bg-[size:800px] bg-no-repeat bg-bottom h-full">
        <div className="inline-flex bg-white mx-auto py-5 max-md:py-4 px-7 max-md:px-[26px] shadow-md justify-center items-center rounded-[14px] font-normal text-2xl max-md:text-base">
          {t("title.about_course")}
        </div>
        <div className="w-[80%] max-md:w-full mx-auto font-semibold text-[46px] mt-[34px] max-md:text-[28px]">
          <span>{t("title.about_course_descr1")}</span>{" "}
          <span className="text-gray-text">
            {t("title.about_course_descr2")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
