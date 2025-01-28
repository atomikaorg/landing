import { useTranslation } from "react-i18next";

const TrainingInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[200px]">
      <h2 className="font-semibold text-[76px] text-center">
        {t("title.training_heading")}
      </h2>
      <p className="font-medium text-[28px] text-gray-text text-center mt-5">
        {t("title.training_descr")}
      </p>
      <div className="grid grid-cols-[1fr_1fr] gap-5 mt-[68px] h-[612px]">
        <div className="px-10 py-[46px] rounded-[50px] bg-white row-span-2 grid content-between bg-[url('/books-group.avif')] bg-contain bg-no-repeat bg-right">
          <h3 className="font-semibold text-[58px]">
            {t("title.subjects_test")}
          </h3>
          <p className="text-gray-text font-normal text-[28px]">
            {t("title.subjects_test_descr")}
          </p>
        </div>
        <div className="px-[30px] py-9 rounded-[50px] bg-white grid content-between bg-[url('/uzbekistan-flag.avif')] bg-contain bg-no-repeat bg-right">
          <h3 className="font-semibold text-[42px]">
            {t("title.national_sertificate")}
          </h3>
          <p className="text-gray-text font-normal text-xl">
            {t("title.national_sertificate_descr")}
          </p>
        </div>
        <div className="px-[30px] py-9 rounded-[50px] bg-white grid content-between bg-[url('/magister-hat.avif')] bg-contain bg-no-repeat bg-right">
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
