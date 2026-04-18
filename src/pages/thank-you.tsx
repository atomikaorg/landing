import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

const SIGNUP_URL = "https://atomika.org/session/signup";
const REDIRECT_DELAY_MS = 5000;

const ThankYouPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const redirectTarget = searchParams.get("redirect") || SIGNUP_URL;
    const timeoutId = window.setTimeout(() => {
      window.location.href = redirectTarget;
    }, REDIRECT_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [searchParams]);

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