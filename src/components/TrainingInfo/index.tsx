import { useTranslation } from "react-i18next";

const TrainingInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[200px] max-md:mt-[116px]">
      <h2 className="font-semibold text-[76px] text-center leading-20 max-w-[90%] mx-auto max-md:text-[38px] max-md:leading-10 max-md:max-w-full">
        {t("title.training_heading")}
      </h2>
      <p className="font-medium text-[28px] text-gray-text text-center mt-5 max-w-[70%] mx-auto max-md:text-lg max-md:max-w-full">
        {t("title.training_descr")}
      </p>
      <div className="grid grid-cols-[1fr_1fr] gap-5 mt-[68px] h-[612px] max-md:h-auto max-md:grid-cols-1">
        <div className="px-10 py-[46px] max-md:h-[296px] rounded-[50px] bg-white row-span-2 grid content-between bg-[url('/books-group.avif')] bg-contain bg-no-repeat bg-right">
          <h3 className="font-semibold text-[58px] max-md:text-[32px]">
            {t("title.subjects_test")}
          </h3>
          <p className="text-gray-text font-normal text-[28px] max-md:text-xl">
            {t("title.subjects_test_descr")}
          </p>
        </div>
        <div className="px-[30px] max-md:h-[296px] py-9 rounded-[50px] bg-white grid content-between bg-[url('/uzbekistan-flag.avif')] bg-contain bg-no-repeat bg-right max-md:bg-[position:100px_-20px]">
          <h3 className="font-semibold text-[42px] max-w-[60%]">
            {t("title.national_sertificate")}
          </h3>
          <p className="text-gray-text font-normal text-xl">
            {t("title.national_sertificate_descr")}
          </p>
        </div>
        <div className="px-[30px] max-md:h-[296px] py-9 rounded-[50px] bg-white grid content-between bg-[url('/magister-hat.avif')] bg-contain bg-no-repeat bg-right max-md:bg-[position:100px_-20px]">
          <h3 className="font-semibold text-[42px]">{t("title.dtm_test")}</h3>
          <p className="text-gray-text font-normal text-xl">
            {t("title.dtm_test_descr")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingInfo;
