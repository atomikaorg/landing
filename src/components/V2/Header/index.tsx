import { RuIcon, UzIcon } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

const langsFlags: Record<string, ReactNode> = {
  ru: <RuIcon className="w-full" />,
  uz: <UzIcon className="w-full" />,
};
interface HeaderProps {
  onOpenModal?: () => void;
} 

export default function Header({onOpenModal}: HeaderProps) {
  const { i18n, t } = useTranslation();
  const activeLang = i18n.language in langsFlags ? i18n.language : "uz";

  const langs: Record<string, string> = {
    ru: t("version2.header.languages.ru"),
    uz: t("version2.header.languages.uz"),
  };

  const navItems = [
    { href: "#about_course", label: t("version2.header.nav.teachers") },
    { href: "#privileges", label: t("version2.header.nav.reviews") },
    { href: "#about_platform", label: t("version2.header.nav.tariffs") },
    {
      href: "#nat_cert",
      label: t("version2.header.nav.certificate"),
      className:
        "bg-[#FFF7CA] rounded-full font-gilroy font-black text-[#1A1A2E] hidden lg:block bg-[linear-gradient(104.61deg,#D4A017_0%,#F5D060_100%)] bg-clip-text text-transparent"
    },
    { href: "#contacts", label: t("version2.header.nav.contacts") },
  ];

  const changeLang = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
      location.reload();
    },
    [i18n]
  );

  return (
    <header className="fixed left-0 right-0 z-999 w-full  bg-[#FFFEF7] py-4 backdrop-blur-lg supports-[backdrop-filter]:bg-[#FFFEF7]/70 lg:py-[17px]" >
      <div className="container">
        <div className="flex items-center justify-between gap-0 ">
          <a href="/" aria-label="Atomika home">
            <img
              src="/Atomika_logo.png"
              alt="Atomika Logo"
              className="max-w-[198.54px] max-md:max-w-[132px]"
            />
          </a>

          <div className="flex items-center gap-2 lg:gap-3">
            <div className="flex items-center justify-between gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex h-[52px] w-[52px] items-center justify-center transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFEF7]"
                    aria-label={t("version2.header.changeLanguage")}
                  >
                    <span className="w-[27px]">{langsFlags[activeLang]}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[220px] rounded-3xl border-none bg-white p-2 shadow-xl mt-5"
                >
                  <div className="grid gap-1">
                    {Object.entries(langs).map(([lang, label]) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => changeLang(lang)}
                        className={clsx(
                          "flex items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm text-black transition hover:bg-[#F7F1FF]",
                          {
                            "bg-[#F4EBFE]": lang === activeLang,
                          }
                        )}
                      >
                        <span className="flex h-7 w-7 items-center">
                          {langsFlags[lang]}
                        </span>
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="hidden lg:flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    style={item.style}
                    className={
                      item.className ??
                      "text-[#1A1A2E] font-medium text-[16px] font-gilroy leading-[150%] hidden lg:block "
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <Link to={"https://atomika.org/session/signin"} className="px-[30px] py-[5px] md:py-5 font-bold font-gilroy text-[16px] md:text-[20px] rounded-full text-white bg-gradient-to-b from-[#C38BFA] via-[#A755F7] to-[#8216EB] lg:bg-none lg:text-[#1A1A2E] hover:bg-transparent">
              {t("version2.header.login")}
            </Link>
            <button onClick={onOpenModal}
              className="rounded-full px-[30px] py-5 font-bold text-[20px] font-gilroy cursor-pointer whitespace-nowrap hidden lg:block text-white"
              style={{
                background:
                  "linear-gradient(182.09deg, #C38BFA 1.21%, #A755F7 53.87%, #8216EB 123.92%)",
              }}
            >
              {t("version2.header.startEducation")}
            </button>
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
