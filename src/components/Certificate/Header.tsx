import { RuIcon, UzIcon } from "@/assets/svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import BurgerMenu from "../header/BurgerMenu";
import { Link } from "react-router-dom";

const langsFlags: Record<string, ReactNode> = {
  ru: <RuIcon className="w-full" />,
  uz: <UzIcon className="w-full" />,
};

interface HeaderProps {
  onOpenModal?: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const { i18n, t } = useTranslation();
  const activeLang = i18n.language in langsFlags ? i18n.language : "uz";

  const langs: Record<string, string> = {
    ru: t("version2.header.languages.ru"),
    uz: t("version2.header.languages.uz"),
  };

  const navItems = [
    {
      href: "#about_course",
      label: t("national-certificate.header.nav.teachers"),
    },
    {
      href: "#about_platform",
      label: t("national-certificate.header.nav.tariffs"),
    },
    {
      href: "/",
      label: t("national-certificate.header.nav.course"),
      className:
        "rounded-full font-gilroy text-[16px] font-black leading-[150%] bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] bg-clip-text text-transparent",
    },
    {
      href: "#about_platform",
      label: t("national-certificate.header.nav.reviews"),
    },
    {
      href: "#contacts",
      label: t("national-certificate.header.nav.contacts"),
    },
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
    <header className="fixed left-0 right-0 z-999 w-full px-4 max-md:px-0 bg-[#FDF8E8] py-4 backdrop-blur-lg supports-[backdrop-filter]:bg-[#FFFEF7]/70 lg:py-[17px]">
      <div className="mx-auto w-full ">
        <div className="flex container w-full items-center justify-between gap-4">
          <a href="/" aria-label="Atomika home" className="shrink-0">
            <img
              src="/atomikalogoCert.png"
              alt="Atomika Logo"
              className="w-[132px] md:w-[170px] xl:w-[198px]"
            />
          </a>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-3 xl:gap-5">
        <div className="flex items-center gap-2">
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex h-[44px] w-[44px] items-center justify-center transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFEF7] md:h-[52px] md:w-[52px]"
          aria-label={t("version2.header.changeLanguage")}
        >
          <span className="w-[24px] md:w-[27px]">
            {langsFlags[activeLang]}
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mt-5 w-[220px] rounded-3xl border-none bg-white p-2 shadow-xl"
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
      <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:flex xl:gap-6 2xl:gap-8">
      {navItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className={
          item.className ??
          "whitespace-nowrap font-gilroy text-[14px] font-medium leading-[150%] text-[#1A1A2E] xl:text-[14px]"
        }
      >
        {item.label}
      </a>
    ))}
      </nav>
        </div>

         <div className="flex shrink-0 items-center gap-2 md:gap-3 xl:gap-4">
    <Link
      to="https://atomika.org/session/signin"
      className="gold-gradient-btn whitespace-nowrap rounded-full px-5 py-[10px] font-gilroy text-[15px] font-bold text-white shadow-[0px_4px_16px_0px_#7C3AED4D] md:px-[30px] md:text-[18px] xl:bg-none xl:text-[#1A1A2E] lg:shadow-none xl:text-[20px]"
    >
      {t("version2.header.login")}
    </Link>

    <button
      onClick={onOpenModal}
      className="gold-gradient-btn hidden cursor-pointer whitespace-nowrap rounded-full px-6 py-4 font-gilroy text-[18px] font-bold text-white xl:block xl:px-[30px] xl:py-5 xl:text-[20px]"
      style={{
        boxShadow: "0px 4px 16px 0px #7C3AED4D",
      }}
    >
      {t("version2.header.startEducation")}
    </button>

    <BurgerMenu type={true} />
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}