import { useTranslation } from "react-i18next";

const AboutAuthor = () => {
  const { t } = useTranslation();

  return (
    <section className="contianer">
      <div className="text-center bg-[url('/about-author-bg.avif')] bg-contain bg-no-repeat bg-center">
        <div className="inline-flex bg-white mx-auto py-5 px-7 shadow-md justify-center items-center rounded-[14px] font-normal text-2xl">
          {t("title.about_author")}
        </div>
        <h2 className="mt-[34px] font-semibold text-[76px] max-w-[70%] mx-auto leading-20">
          {t("title.your_professor")}
        </h2>
        <p className="mt-[34px] font-medium text-[34px] text-gray-text max-w-[70%] mx-auto">
          {t("title.author_descr")}
        </p>
        <div className="flex flex-col items-center gap-y-8 mt-[78px]">
          <img
            src="/masharipov.jpg"
            alt=""
            className="size-[200px] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
