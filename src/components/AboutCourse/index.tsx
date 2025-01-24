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
          Курс atomika разработан М.С. Машариповым и включает видео-уроки,
          задачи, тесты и тренажеры для подготовки по стандартам DTM и
          национальным сертификатам. Обучение ориентировано на практику и
          тестирование, что делает его идеальным для подготовки студентов к
          поступлению в вузы.
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
