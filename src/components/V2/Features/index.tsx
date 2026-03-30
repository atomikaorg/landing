import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "../Button";

function MobileCard({ children, className }:any) {
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
    visible: (i:any) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      id: "expertTeachers",
      layoutClass: "md:col-span-8",
      className:
        "relative bg-gradient-to-r from-[#C38BFA] via-purple-main to-[#8216EB] min-h-[300px] md:h-[323px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between gap-[56px] max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/original-course-bg.png')] bg-contain bg-right bg-no-repeat max-md:bg-[size:300px] max-md:bg-right-top",
      titleClass:
        "text-white font-semibold text-3xl max-md:text-[32px]  max-md:max-w-[150px] z-10",
      descClass: "text-[#F2F2F2] font-sfpro font-medium text-[22px] z-10",
    },
    {
      id: "flexibleLearning",
      layoutClass: "md:col-span-4",
      className:
        "relative bg-white min-h-[300px] md:h-[323px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between gap-[56px] max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/flexible-card-bg.png')] bg-[length:164px] bg-right-top bg-no-repeat max-md:bg-[size:150px]",
      titleClass:
        "text-black font-semibold text-3xl z-10 max-md:text-[32px] w-[217px] max-md:max-w-[70%]",
      descClass: "text-gray-text font-medium text-[22px] z-10 font-sfpro",
    },
    {
      id: "smartPractice",
      layoutClass: "md:col-span-6",
      className:
        "relative bg-gradient-to-r from-[#F8DC71] to-[#F09C38] min-h-[300px] md:h-[323px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between gap-[56px] max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/training-card-bg.png')] bg-[length:447px] bg-right-top bg-no-repeat max-md:bg-[size:250px]",
      titleClass:
        "text-white font-semibold text-3xl max-md:text-[32px] w-[330px] max-md:max-w-[70%] z-10",
      descClass: "text-white font-medium text-[22px] z-10 font-sfpro",
    },
    {
      id: "progressSystem",
      layoutClass: "md:col-span-4",
      className:
        "relative bg-gradient-to-r from-[#D2FF73] to-[#C3FB4C] min-h-[300px] md:h-[323px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between gap-[56px] max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/gamification-card-bg.png')] bg-[length:203px] bg-right-top bg-no-repeat max-md:bg-[size:150px]",
      titleClass:
        "text-black font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]",
      descClass: "text-gray-text font-medium text-[22px] z-10 font-sfpro",
    },
    {
      id: "clearExplanations",
      layoutClass: "md:col-span-6",
      className:
        "relative bg-gradient-to-r bg-[linear-gradient(37.76deg,_#22BF4D_23.58%,_#7CD488_69.57%)] min-h-[300px] md:h-[323px] rounded-[40px] px-10 py-[38px] flex flex-col justify-between gap-[56px] max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F]",
      bgClass:
        "absolute inset-0 bg-[url('/card4.png'),_url('/card4bg1.png')] bg-[position:right_top,_center] bg-no-repeat bg-[size:auto,_50%]   bg-right-top bg-no-repeat max-md:bg-[size:150px] ",
      titleClass:
        "text-white font-semibold text-3xl z-10 max-md:text-[32px] w-[240px] max-md:max-w-[70%]",
      descClass: "text-white font-medium text-[22px] z-10 font-sfpro",
    },
    {
      id:"fasterLearning",
      layoutClass: "md:col-span-8",
      className:
        "relative bg-white min-h-[300px] md:h-[323px]  rounded-[40px] px-10 py-[38px] flex flex-col justify-between gap-[56px] max-md:py-[30px] max-md:px-[22px] shadow-[0px_14px_64px_-4px_#18274B1F,0px_8px_22px_-6px_#18274B1F] bg-[linear-gradient(117.94deg,_#54A7FF_2.48%,_#1C75D4_94.59%)]",
      bgClass:
        "absolute inset-0 bg-[url('/card6.png'),_url('/card6bg1.png')]  bg-right-top bg-no-repeat bg-[size:164px_auto,_296px_380px] max-md:bg-[size:150px_auto,_180px_230px]",
      titleClass:
        "text-white font-semibold text-3xl z-10 max-md:text-[32px] max-md:max-w-[70%]",
      descClass: "text-[#F2F2F2] font-medium text-[22px] z-10 font-sfpro",
    }
  ];

  const orderedCards = [
    cards[0],
    cards[1],
    cards[2],
    cards[4],
    cards[3],
    cards[5],
  ];

  const renderCardInner = (card:any,i:number) => (
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
    <div className="container ">
      <Button text={"version2.features.badge"}/>

      <h2 className="font-gilroy mt-[13px] md:mt-6 text-left mb-[10px] md:mb-5 font-bold text-[48px] w-[700px]  max-md:text-[32px] max-md:leading-10 max-md:w-full">
        {t("version2.features.title")}{" "}
        <span className="text-[40px] md:text-[64px] bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] bg-clip-text text-transparent">
          {t("version2.features.atomika")}
        </span>
        {t("version2.features.title2")}
      </h2>

      <p className="text-[#6B7280] text-[15px] font-outfit md:text-[24px]">
        {t("version2.features.description")}
      </p>

      <motion.div
        ref={wrapperRef}
        initial="hidden"
        animate={wrapperInView ? "visible" : "hidden"}
        className="hidden md:block"
      >
        <div className="mt-10 grid grid-cols-12 gap-5">
          {orderedCards.map((card, i) => (
            <motion.div
              key={card.id}
              custom={i}
              variants={cardVariants}
              className={`${card.className} ${card.layoutClass} ]`}
            >
              {renderCardInner(card,i)}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ─── KICHIK EKRAN (md-): har bir card scroll qilganda alohida animatsiya ─── */}
      <div className="md:hidden flex flex-col gap-5 mt-[30px]">
        {orderedCards.map((card) => (
          <MobileCard key={card.id} className={card.className}>
            {renderCardInner(card)}
          </MobileCard>
        ))}
      </div>
    </div>
  );
}
