import { useTranslation } from "react-i18next";
import Button from "../Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const courseCards = [
  {
    id: "biology",
    titleKey: "version2.ourcourses.biology",
    itemsKey: "version2.ourcourses.itemsbiology",
    className: "bg-[linear-gradient(37.76deg,#22BF4D_23.58%,#7CD488_69.57%)]",
    icon: "/Vector.png",
    iconClass: "right-0 top-0",
    textClass: "text-[#F1F8F3]",
    itemClass: "bg-[#F1F8F3] text-[#0B0B0B]",
  },
  {
    id: "chemistry",
    titleKey: "version2.ourcourses.chemistry",
    itemsKey: "version2.ourcourses.itemschemistry",
    className: "bg-[linear-gradient(180deg,#A755F7_0%,#8216EB_100%)]",
    icon: "/flask.png",
    iconClass: "right-0 top-0",
    textClass: "text-[#F9F5FF]",
    itemClass: "bg-[#F4ECFF] text-[#230F38]",
  },
];

// Har bir card uchun alohida komponent
const CourseCard = ({ card, index }:any) => {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });
  const items = Object.values(
    t(card.itemsKey, { returnObjects: true }) as Record<string, string>
  );

  return (
    <motion.article
      ref={cardRef}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
      variants={{
        hidden: { y: 80, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ 
        duration: 0.6, 
        delay: window.innerWidth > 768 ? index * 0.2 : 0.1 
      }}
      className={`min-h-[766px] relative overflow-hidden rounded-[36px] px-6 py-7 shadow-[0px_16px_54px_-18px_rgba(24,39,75,0.28)] md:px-10 md:py-[34px] flex flex-col justify-between ${card.className}`}
    >
      <img
        src={card.icon}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute ${card.iconClass}`}
      />

      <div className="relative z-10">
        <h3 className={`mb-6 text-[34px] font-semibold md:mb-8 md:text-[54px] font-sfpro ${card.textClass}`}>
          {t(card.titleKey)}
        </h3>
      </div>

      <div className="relative z-10 flex flex-col gap-3 mt-auto mb-4 md:mb-6">
        {items.map((item, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={isCardInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: (index * 0.2) + (idx * 0.1) }}
            className={`max-w-[354px] w-full rounded-full px-5 py-3 text-[16px] font-medium md:px-[30px] md:py-[15px] md:text-[24px] font-sfpro shadow-sm ${card.itemClass}`}
          >
            {item}
          </motion.p>
        ))}
      </div>
    </motion.article>
  );
};

export default function OurCourses() {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="py-[56px] md:py-[90px] overflow-hidden">
      <div className="container relative">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute right-0 top-[-24px] hidden lg:block">
            <img src="/book.png" alt="" aria-hidden="true" />
          </div>

          <Button text="version2.ourcourses.button" />

          <h2 className="mt-[30px] text-left text-[32px] font-bold font-gilroy text-[#1A1A2E] md:mt-10 md:text-[48px]">
            {t("version2.ourcourses.title")}
          </h2>

          <p className="mb-[30px] mt-[10px] max-w-[840px] text-left text-[15px] text-[#6B7280] md:mb-10 md:text-[24px]">
            {t("version2.ourcourses.description")}
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {courseCards.map((card, index) => (
            <CourseCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}