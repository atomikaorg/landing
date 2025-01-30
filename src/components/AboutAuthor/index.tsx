import { useTranslation } from "react-i18next";

const AboutAuthor = () => {
  const { t } = useTranslation();

  return (
    <section className="contianer">
      <div className="text-center bg-[url('/about-author-bg.avif')] bg-contain bg-no-repeat bg-center max-md:bg-bottom">
        <div className="inline-flex bg-white mx-auto py-5 max-md:py-4 px-7 max-md:px-[26px] shadow-md justify-center items-center rounded-[14px] font-normal text-2xl max-md:text-base">
          {t("title.about_author")}
        </div>
        <h2 className="mt-[34px] font-semibold text-[76px] max-w-[70%] mx-auto leading-20 max-md:max-w-full max-md:text-[38px] max-md:leading-10">
          {t("title.your_professor")}
        </h2>
        <p className="mt-[34px] max-md:mt-[14px] font-medium text-[34px] max-md:text-[20px] text-gray-text max-w-[70%] max-md:max-w-full mx-auto">
          {t("title.author_descr")}
        </p>
        <div className="flex flex-col items-center gap-y-8 max-md:gap-y-[26px] mt-[78px] max-md:mt-16">
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
