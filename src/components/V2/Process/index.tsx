import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "../Button";

const cards = [
  { id: "watchLesson", image: "/cardbg1.png", imagemobile: "/cardbg1mobile.png", imageClass: "right-0 md:right-0 top-2 md:top-6 opacity-80" },
  { id: "takeTests", image: "/cardbg2.png", imagemobile: "/cardbg2mobile.png", imageClass: "right-0 top-2 md:top-[26px] opacity-80" },
  { id: "reviewMistakes", image: "/cardbg3.png", imagemobile: "/cardbg3mobile.png", imageClass: "right-0 top-2 md:top-[10px] opacity-80" },
  { id: "mockExams", image: "/cardbg4.png", imagemobile: "/cardbg4mobile.png", imageClass: "right-0 top-2 md:top-[12px] opacity-80" },
];

const ProcessCard = ({ card, index, t }:any) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={cardRef}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { duration: 0.6, delay: index * 0.1 }
        }
      }}
      className="relative h-[250px] overflow-hidden  rounded-[28px] bg-white p-[30px] shadow-[0px_18px_50px_-16px_rgba(24,39,75,0.28)] md:h-[320px] md:p-10"
    >
      <img
        src={card.image}
        alt=""
        aria-hidden="true"
        className={`hidden md:block pointer-events-none absolute ${card.imageClass}`}
      />
      <img
        src={card.imagemobile}
        alt=""
        aria-hidden="true"
        className={`block md:hidden pointer-events-none absolute ${card.imageClass}`}
      />

      <div className="relative z-10 flex h-full flex-col justify-between gap-4 md:gap-6">
        <h3 className="max-w-full font-gilroy text-[24px] font-semibold leading-[1.15] text-[#1F2138] md:max-w-[190px] md:text-[28px]">
          {t(`version2.process.cards.${card.id}.title`)}
        </h3>
        <p className="text-[15px] font-sfpro md:text-[22px] font-medium leading-6 text-[#7B8092]">
          {t(`version2.process.cards.${card.id}.description`)}
        </p>
      </div>
    </motion.article>
  );
};

export default function Process({ onAutoOpen }: { onAutoOpen?: () => void }) {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  useEffect(() => {
        if (isSectionInView) {
            onAutoOpen?.();
        }
    }, [isSectionInView, onAutoOpen]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-[30px]  md:pt-[146px]">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/microscope.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-[-170px] left-[-280px] hidden drop-shadow-[0_28px_55px_rgba(127,86,217,0.25)] md:block"
          />

          <div className="mx-auto">
            <Button text={"version2.process.badge"}/>

            <h2 className="font-gilroy mx-auto mt-5 text-left text-[32px] font-bold leading-[1.15] text-[#1F2138] md:text-[48px]">
              {t("version2.process.titlePrefix")}{" "}
              <span className="bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] bg-clip-text text-transparent">
                {t("version2.process.titleHighlight")}
              </span>
              {t("version2.process.titleSuffix")}
            </h2>

            <p className="mx-auto mt-3 text-left text-[15px] leading-6 text-[#7B8092] md:text-[22px] md:leading-8">
              {t("version2.process.description")} <span className="font-medium md:font-bold">{t("version2.process.description2")}</span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container mt-8 flex flex-col gap-5 pb-12 md:hidden">
        {cards.map((card, index) => (
          <div key={card.id} className="w-full">
            <ProcessCard card={card} index={index} t={t} />
          </div>
        ))}
      </div>

      <div className="content-rail hidden gap-5 overflow-x-auto pb-20 no-scrollbar md:mt-10 md:flex md:gap-6">
        {cards.map((card, index) => (
          <div key={card.id} className="shrink-0 md:min-w-[380px] md:max-w-[380px] xl:min-w-[420px] xl:max-w-[420px]">
            <ProcessCard card={card} index={index} t={t} />
          </div>
        ))}
      </div>
    </section>
  );
}
