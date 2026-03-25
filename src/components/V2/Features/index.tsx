import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function MobileCard({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Features() {
  const { t } = useTranslation();

  const wrapperRef = useRef(null);
  const wrapperInView = useInView(wrapperRef, { once: true, margin: "-80px" });

  const cardVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      id: "expertTeachers",
      className:
        "relative bg-gradient-to-r from-[#C38BFA] via-purple-main to-[#8216EB] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/original-course-bg.png')] bg-contain bg-right bg-no-repeat max-md:bg-[size:300px] max-md:bg-right-top",
      titleClass:
        "text-white font-semibold text-3xl max-md:text-[32px] max-md:max-w-[70%] z-10",
      descClass: "text-white font-medium text-[22px] z-10",
    },
    {
      id: "smartPractice",
      className:
        "relative bg-gradient-to-r from-[#F8DC71] to-[#F09C38] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/training-card-bg.png')] bg-[length:447px] bg-right-top bg-no-repeat max-md:bg-[size:250px]",
      titleClass:
        "text-white font-semibold text-3xl max-md:text-[32px] max-md:max-w-[70%] z-10",
      descClass: "text-white font-medium text-[22px] z-10",
    },
    {
      id: "progressSystem",
      className:
        "relative bg-gradient-to-r from-[#D2FF73] to-[#C3FB4C] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/gamification-card-bg.png')] bg-[length:203px] bg-right-top bg-no-repeat max-md:bg-[size:150px]",
      titleClass:
        "text-black font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]",
      descClass: "text-gray-text font-medium text-[22px] z-10",
    },
    {
      id: "clearExplanations",
      className:
        "relative bg-gradient-to-r from-[#54A7FF] to-[#1C75D4] h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/lesson-card-bg.png')] bg-[length:362px] bg-right-top bg-no-repeat max-md:bg-[size:250px]",
      titleClass:
        "text-white font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]",
      descClass: "text-white font-medium text-[22px] z-10",
    },
    {
      id: "flexibleLearning",
      className:
        "relative bg-white h-[319.5px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/flexible-card-bg.png')] bg-[length:164px] bg-right-top bg-no-repeat max-md:bg-[size:150px]",
      titleClass:
        "text-black font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]",
      descClass: "text-gray-text font-medium text-[22px] z-10",
    },
  ];

  const renderCardInner = (card) => (
    <>
      <div className={card.bgClass} />
      <h5 className={card.titleClass}>
        {t(`version2.features.cards.${card.id}.title`)}
      </h5>
      <p className={card.descClass}>
        {t(`version2.features.cards.${card.id}.description`)}
      </p>
    </>
  );

  return (
    <div className="container mt-[61px] md:mt-[116px]" id="privileges">
      {/* Header */}
      <div className="flex items-center justify-center">
        <button className="px-7 cursor-pointer text-[#787878] rounded-[14px] bg-white py-5 shadow-[0px_12px_42px_-4px_#18274B1F,0px_8px_18px_-6px_#18274B1F]">
          {t("version2.features.badge")}
        </button>
      </div>

      <h2 className="mt-[13px] md:mt-6 text-left mb-[10px] md:mb-5 font-semibold text-[48px] mx-auto max-md:text-[32px] max-md:leading-10 max-md:w-full">
        {t("version2.features.title")}{" "}
        <span className="text-[40px] md:text-[64px] bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] bg-clip-text text-transparent">
          {t("version2.features.atomika")}
        </span>
        {t("version2.features.title2")}
      </h2>

      <p className="text-[#6B7280] text-[15px] md:text-[24px]">
        {t("version2.features.description")}
      </p>

      {/* ─── KATTA EKRAN (md+): barcha cardlar bitta wrapper animatsiyasida ─── */}
      <motion.div
        ref={wrapperRef}
        initial="hidden"
        animate={wrapperInView ? "visible" : "hidden"}
        className="hidden md:block"
      >
        {/* 2-column row */}
        <div className="grid grid-cols-2 gap-5 mt-10">
          {cards.slice(0, 2).map((card, i) => (
            <motion.div
              key={card.id}
              custom={i}
              variants={cardVariants}
              className={card.className}
            >
              {renderCardInner(card)}
            </motion.div>
          ))}
        </div>

        {/* 3-column row */}
        <div className="grid grid-cols-3 gap-5 mt-5">
          {cards.slice(2).map((card, i) => (
            <motion.div
              key={card.id}
              custom={i + 2}
              variants={cardVariants}
              className={card.className}
            >
              {renderCardInner(card)}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ─── KICHIK EKRAN (md-): har bir card scroll qilganda alohida animatsiya ─── */}
      <div className="md:hidden flex flex-col gap-5 mt-[30px]">
        {cards.map((card) => (
          <MobileCard key={card.id} className={card.className}>
            {renderCardInner(card)}
          </MobileCard>
        ))}
      </div>
    </div>
  );
}