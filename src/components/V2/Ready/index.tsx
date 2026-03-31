import { useTranslation } from "react-i18next"
import {motion, useInView} from "framer-motion"
import { useEffect, useRef } from "react";

type ReadyProps = {
  onOpenModal?: () => void;
  onAutoOpen?: () => void;
};

export default function Ready({ onOpenModal, onAutoOpen }: ReadyProps) {
  const {t}=useTranslation()
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isCardInView) {
      onAutoOpen?.();
    }
  }, [isCardInView, onAutoOpen]);

  return (
    <div className="bg-brand-purple-gradient py-[30px] md:py-[100px]">
      <motion.div
        ref={cardRef}
          initial="hidden"
          animate={isCardInView ? "visible" : "hidden"}
          variants={{
          hidden: { y: 50, opacity: 0 },
          visible: { 
          y: 0, 
          opacity: 1,
          transition: { duration: 0.8, delay:0.1 }}}}
          className="container flex flex-col items-center justify-center text-center gap-[15px]">
        <h2 className="text-[#F9FAFB] text-[32px] md:text-[64px] font-gilroy font-semibold md:font-bold leading-[110%]">{t("version2.Ready.title")}</h2>
        <p className="text-[#FFFFFF] text-[22px] md:text-[28px] leading-[150%] font-gilroy font-medium">{t("version2.Ready.description")}</p>
        <button
          type="button"
          onClick={onOpenModal}
          className="animate-button-breathe-gradient font-gilroy text-[24px] cursor-pointer text-[#1A1A2E] bg-gold-gradient bg-[length:200%_200%] px-10 py-[30px] rounded-full font-bold will-change-transform"
        >
          {t("version2.Ready.button")}
        </button>
      </motion.div>
    </div>
  )
}
