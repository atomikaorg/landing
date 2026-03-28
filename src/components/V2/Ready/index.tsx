import { useTranslation } from "react-i18next"
import {motion, useInView} from "framer-motion"
import { useRef } from "react";
import { Link } from "react-router-dom";
export default function Ready() {
  const {t}=useTranslation()
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });
  return (
    <div className="bg-brand-purple-gradient py-[100px]">
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
        <h2 className="text-[#F9FAFB] text-[32px] md:text-[64px] font-gilroy font-bold">{t("version2.Ready.title")}</h2>
        <p className="text-[#FFFFFF] text-[15px] md:text=[24px]">{t("version2.Ready.description")}</p>
        <Link to={"https://atomika.org/session/signup"} className="font-outfit  cursor-pointer text-[#1A1A2E] bg-[linear-gradient(104.61deg,_#D4A017_0%,_#F5D060_100%)] shadow-[0px_4px_20px_0px_#D4A01766] px-10 py-5 rounded-full font-bold">{t("version2.Ready.button")}</Link>
      </motion.div>
    </div>
  )
}
