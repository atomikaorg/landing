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
      <img src="/Atomika_logo.png" alt="" className="max-w-[198.54px]" />
      <DropdownMenu>
        <DropdownMenuTrigger>
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
      <div className="py-6 px-[38px] bg-white rounded-full text-gray-text font-semibold flex items-center gap-x-5">
        <a href="#">{t("title.about_course")}</a>
        <a href="#">{t("title.privileges")}</a>
        <a href="#">{t("title.feedbacks")}</a>
        <a href="#">{t("title.pricing")}</a>
      </div>
      <div className="flex gap-x-[10px]">
        <Button className="text-purple-main bg-purple-light rounded-full h-16 px-[38px]">
          {t("title.contacts")}
        </Button>
        <Button className="text-white bg-purple-main rounded-full h-16 px-[38px]">
          {t("actions.start_education")}
        </Button>
      </div>
    </header>
  );
};

export default Header;
