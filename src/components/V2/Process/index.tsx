import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
      className="relative overflow-hidden rounded-[28px] bg-white p-[30px] md:p-10 shadow-[0px_18px_50px_-16px_rgba(24,39,75,0.28)]"
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

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="md:max-w-[190px] max-w-full text-[24px] md:text-[28px] font-semibold leading-[1.15] text-[#1F2138] mb-[19px] md:mb-[70px]">
          {t(`version2.process.cards.${card.id}.title`)}
        </h3>
        <p className="text-[15px] md:text-[22px] font-medium leading-6 text-[#7B8092]">
          {t(`version2.process.cards.${card.id}.description`)}
        </p>
      </div>
    </motion.article>
  );
};

export default function Process() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden pb-[56px] pt-[30px] md:pt-[146px] md:py-[92px]">
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

            <h2 className="mx-auto mt-5 text-left text-[32px] font-semibold leading-[1.15] text-[#1F2138] md:text-[48px]">
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

      <div className="mt-8 px-4 md:px-10 grid gap-5 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <ProcessCard key={card.id} card={card} index={index} t={t} />
        ))}
      </div>
    </section>
  );
}