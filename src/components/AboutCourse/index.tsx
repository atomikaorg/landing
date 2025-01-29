import { useTranslation } from "react-i18next";

const AboutCourse = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[154px] container h-[1250px]">
      <div className="text-center bg-[url('/about-bg.avif')] bg-contain bg-no-repeat bg-bottom h-full">
        <div className="inline-flex bg-white mx-auto py-5 px-7 shadow-md justify-center items-center rounded-[14px] font-normal text-2xl">
          {t("title.about_course")}
        </div>
        <div className="w-[80%] mx-auto font-semibold text-[46px] mt-[34px]">
         <span>{t("title.about_course_descr1")}</span>{" "}
         <span className="text-gray-text">{t("title.about_course_descr2")}</span>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
