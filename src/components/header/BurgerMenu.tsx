import { LayoutGridIcon, XIcon } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

export default function BurgerMenu(): JSX.Element {
  const { t } = useTranslation();

  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const closeMenuAfterNavigate = () => {
    setIsMenuShown(false);
  };

  return (
    <div className="lg:hidden max-lg:order-3">
      <Button
        className={clsx(
          "inline-flex p-0 w-[52px] h-[52px] bg-white hover:bg-white rounded-full",
          {
            "bg-purple-main hover:bg-purple-main": isMenuShown,
          }
        )}
        onClick={() => setIsMenuShown(!isMenuShown)}
      >
        {isMenuShown ? (
          <XIcon color="white" />
        ) : (
          <LayoutGridIcon color="#c0c0c0" />
        )}
      </Button>
      <div
        className={`absolute w-full transition-all top-[112px] left-0 z-10 h-screen px-3 ${
          isMenuShown ? "translate-y-0" : "translate-y-[-1200px]"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuShown(false);
        }}
      >
        <div
          className="w-full bg-purple-main z-20 rounded-[28px] px-7 py-8"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="">
            <ul className="flex flex-col gap-y-3 text-white text-base font-extrabold">
              <li
                className="hover:bg-[#B677F3] rounded-full border border-[#B677F3]"
                onClick={closeMenuAfterNavigate}
              >
                <a
                  href="#about_course"
                  className="flex py-4 px-4 w-full h-full bg-transparent hover:bg-transparent justify-center gap-x-3 rounded-none text-white font-semibold text-sm"
                >
                  {t("title.about_course")}
                </a>
              </li>
              <li
                className="hover:bg-[#B677F3] rounded-full border border-[#B677F3]"
                onClick={closeMenuAfterNavigate}
              >
                <a
                  href="#privileges"
                  className="flex py-4 px-4 w-full h-full bg-transparent hover:bg-transparent justify-center gap-x-3 rounded-none text-white font-semibold text-sm"
                >
                  {t("title.privileges")}
                </a>
              </li>
              <li
                className="hover:bg-[#B677F3] rounded-full border border-[#B677F3]"
                onClick={closeMenuAfterNavigate}
              >
                <a
                  href="#feedbacks"
                  className="flex py-4 px-4 w-full h-full bg-transparent hover:bg-transparent justify-center gap-x-3 rounded-none text-white font-semibold text-sm"
                >
                  {t("title.feedbacks")}
                </a>
              </li>
              <li
                className="hover:bg-[#B677F3] rounded-full border border-[#B677F3]"
                onClick={closeMenuAfterNavigate}
              >
                <a
                  href="#pricing"
                  className="flex py-4 px-4 w-full h-full bg-transparent hover:bg-transparent justify-center gap-x-3 rounded-none text-white font-semibold text-sm"
                >
                  {t("title.pricing")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
