import { Instagram, Send, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contacts" className="bg-brand-purple-gradient text-white">
      <div className="container py-[56px] md:py-[72px]">
        <div className="grid gap-10 md:grid-cols-[1.8fr_1fr_1fr_1fr] md:gap-8">
          <div className="max-w-[290px]">
            <img src="/logofooter.png" alt="Atomika" />
            <p className="mt-5 text-[13px] leading-6 text-white/50">
              {t("version2.footer.description")}
            </p>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-white">
              {t("version2.footer.platform")}
            </h4>
            <div className="mt-4 space-y-3 text-[13px] text-white/50">
              <a href="#about_course" className="block transition-colors hover:text-white/80">
                {t("version2.footer.links.courses")}
              </a>
              <a href="#" className="block transition-colors hover:text-white/80">
                {t("version2.footer.links.pricing")}
              </a>
              <a href="#" className="block transition-colors hover:text-white/80">
                {t("version2.footer.links.certificate")}
              </a>
              <a href="#" className="block transition-colors hover:text-white/80">
                {t("version2.footer.links.questions")}
              </a>
              <a href="https://admin.atomika.org/media/terms_and_conditions/atomika_Ommaviy_oferta_16_03_2026.pdf" className="block transition-colors hover:text-white/80">
              {t("version2.footer.links.oferta")}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-white">
              {t("version2.footer.contacts")}
            </h4>
            <div className="mt-4 space-y-3 text-[13px] text-white/50">
              <a href="tel:+998555111133" className="block transition-colors hover:text-white/80">
                +998 (55) 511-11-33
              </a>
              <a href="mailto:info@atomika.org" className="block transition-colors hover:text-white/80">
                info@atomika.org
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-white">
              {t("version2.footer.socials")}
            </h4>
            <div className="mt-4 space-y-3 text-[13px] text-white/50">
              <a
                href="https://www.instagram.com/atomika_uz/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white/80"
              >
                <Instagram size={14} strokeWidth={1.8} />
                Instagram
              </a>
              <a
                href="https://www.t.me/atomika_online"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white/80"
              >
                <Send size={14} strokeWidth={1.8} />
                Telegram
              </a>
              <a
                href="https://www.youtube.com/@atomika_online"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white/80"
              >
                <Youtube size={14} strokeWidth={1.8} />
                Youtube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-[12px] text-white/30 md:mt-12">
          © {new Date().getFullYear()} Atomika. {t("version2.footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
