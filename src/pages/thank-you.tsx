import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SIGNUP_URL = "https://atomika.org/session/signup";
const REDIRECT_DELAY_MS = 5000;
const THANK_YOU_REDIRECT_KEY = "thank-you-redirect";

const ThankYouPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const redirectTarget =
      window.sessionStorage.getItem(THANK_YOU_REDIRECT_KEY) || SIGNUP_URL;

    const timeoutId = window.setTimeout(() => {
      window.sessionStorage.removeItem(THANK_YOU_REDIRECT_KEY);
      window.location.href = redirectTarget;
    }, REDIRECT_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f3f3]">
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-purple-main">
            {t("title.thank-you")}
          </h1>
          <p className="text-lg text-gray-600">
            {t("actions.redirecting", "Redirecting...")}
          </p>
        </div>
      </main>
    </div>
  );
};

export default ThankYouPage;