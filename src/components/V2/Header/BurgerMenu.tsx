import Bar from "@/assets/svg/bar.svg";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../ui/button";

export default function BurgerMenu(): JSX.Element {
  const { t } = useTranslation();
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const navItems = [
    { href: "#about_course", label: t("version2.header.nav.teachers") },
    { href: "#privileges", label: t("version2.header.nav.reviews") },
    { href: "#about_platform", label: t("version2.header.nav.tariffs") },
    { href: "#nat_cert", label: t("version2.header.nav.certificate") },
    { href: "#contacts", label: t("version2.header.nav.contacts") },
  ];

  const closeMenuAfterNavigate = () => {
    setIsMenuShown(false);
  };

  return (
    <div className="lg:hidden max-lg:order-3 cursor-pointer">
      <Button
        className={clsx(
          "inline-flex p-0 w-[52px] h-[52px] bg-trasparent rounded-full",
          {
            "bg-purple-main hover:bg-purple-main": isMenuShown,
          }
        )}
        onClick={() => setIsMenuShown(!isMenuShown)}
      >
        {isMenuShown ? (
          <XIcon color="white" />
        ) : (
          <img src={Bar} alt="" className="text-[#000000]" />
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
          <ul className="flex flex-col gap-y-3 text-white text-base font-extrabold">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="hover:bg-[#B677F3] rounded-full border border-[#B677F3]"
                onClick={closeMenuAfterNavigate}
              >
                <a
                  href={item.href}
                  className="flex py-4 px-4 w-full h-full bg-transparent hover:bg-transparent justify-center gap-x-3 rounded-none text-white font-semibold text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
