import Contacts from "../components/Contacts";
import Header from "../components/header/Header";
import { useTranslation } from "react-i18next";

const ThankYouPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f3f3]">
         <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-6 text-purple-main">
            {t("title.thank-you")}
          </h1>
        </div>
      </main>
      <Contacts />
    </div>
  );
};

export default ThankYouPage; 