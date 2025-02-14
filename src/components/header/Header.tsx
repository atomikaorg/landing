import { RuIcon, UzIcon } from "@/assets/svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Button } from "../ui/button";
import BurgerMenu from "./BurgerMenu";

const langsFlags: Record<string, ReactNode> = {
  ru: <RuIcon className="w-full" />,
  uz: <UzIcon className="w-full" />,
};

const langs: Record<string, string> = {
  ru: "Русский",
  uz: "O'zbek tili",
};

const langsList = ["ru", "uz"];

const Header = () => {
  const { i18n, t } = useTranslation();

  const changeLang = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
      location.reload();
    },
    [i18n]
  );

  return (
    <header className="py-[30px] container flex items-center justify-between">
      <div className="max-lg:bg-white max-lg:px-[66px] max-lg:rounded-full max-lg:order-2 max-md:px-[30px] max-md:py-1">
        <img src="/Atomika_logo.png" alt="" className="max-w-[198.54px] max-md:max-w-[132px]" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="max-lg:order-1">
          <div className="bg-white h-[52px] w-[52px] flex items-center justify-center rounded-full">
            <span className="w-[27px]">{langsFlags[i18n.language]}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="!bg-white w-[200px] border-none">
          <div className="grid grid-cols-1">
            {langsList.map((lang) => (
              <div
                key={lang}
                className={clsx(
                  "bg-white text-black flex items-center gap-x-[14px] py-2 px-3 cursor-pointer",
                  {
                    "border-purple-main !bg-[#F4EBFE]": lang === i18n.language,
                  }
                )}
                onClick={() => changeLang(lang)}
              >
                <span className="w-7 h-7 flex items-center">
                  {langsFlags[lang]}
                </span>
                <p className="text-sm">{langs[lang]}</p>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="py-6 px-[38px] bg-white rounded-full text-gray-text font-semibold flex items-center gap-x-5 max-lg:hidden">
        <a href="#about_course">{t("title.about_course")}</a>
        <a href="#privileges">{t("title.privileges")}</a>
        <a href="#about_platform">{t("title.about_platform")}</a>
        <a href="#feedbacks">{t("title.feedbacks")}</a>
        <a href="#pricing">{t("title.pricing")}</a>
      </div>
      <div className="flex gap-x-[10px] max-lg:hidden">
        <a href="#contacts" className="inline-flex items-center justify-center text-purple-main bg-purple-light hover:bg-purple-light cursor-pointer rounded-full h-16 px-[38px]">
          {t("title.contacts")}
        </a>
        <a href="#form" className="inline-flex items-center justify-center text-white bg-purple-main hover:bg-purple-main cursor-pointer rounded-full h-16 px-[38px]">
          {t("actions.start_education")}
        </a>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
