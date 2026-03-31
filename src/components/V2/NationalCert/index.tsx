import { useTranslation } from "react-i18next"
import {motion, useInView} from "framer-motion"
import { useRef } from "react";
import i18n from "@/localization";

type NationalCertProps = {
    onOpenModal?: () => void;
};

export default function NationalCert({ onOpenModal }: NationalCertProps) {
    const {t}=useTranslation()
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });
    const features = t("version2.NationalCert.features", { returnObjects: true }) || [];
    const cards = t("version2.NationalCert.cards", { returnObjects: true }) || [];
  return (
    <div id="nat_cert" className="bg-[linear-gradient(111.38deg,_#1A1205_0%,_#2D1F08_50%,_#1A1408_100%)] relative ">
        <img className="absolute right-0" src="/before.png" alt="" />
        <img className="absolute left-0 bottom-0" src="/after.png" alt="" />
        <motion.div 
          ref={cardRef}
          initial="hidden"
          animate={isCardInView ? "visible" : "hidden"}
          variants={{
          hidden: { y: 50, opacity: 0 },
          visible: { 
          y: 0, 
          opacity: 1,
          transition: { duration: 0.8, delay:0.1 }
        }
      }}
        className="container flex items-center justify-between py-[30px] md:py-[100px] relative">
            <div className="max-w-[655px]">
               <h2 className="font-gilroy text-[#FFFFFF] text-[44px] md:text-[64px] font-bold leading-[110%] mb-[50px]">
                 {i18n.language === 'uz' ? (
                   <>
                     <span className="bg-[linear-gradient(104.61deg,_#D4A017_0%,_#F5D060_100%)] bg-clip-text text-transparent">
                       {t("version2.NationalCert.title_gold")}
                     </span>
                     {" "}{t("version2.NationalCert.title")}
                   </>
                 ) : (
                   <>
                     {t("version2.NationalCert.title")}{" "}
                     <span className="bg-[linear-gradient(104.61deg,_#D4A017_0%,_#F5D060_100%)] bg-clip-text text-transparent">
                       {t("version2.NationalCert.title_gold")}
                     </span>
                   </>
                 )}
               </h2>                
               <p className="text-[#FFFFFF99] text-[22px] md:text-[28px] leading-[150%] font-gilroy font-medium">{t("version2.NationalCert.description")}</p>
               <div className="flex flex-col gap-4 mt-[50px] ">
                  {Array.isArray(features) && features.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 text-[#FFFFFFCC] text-[16px]">
                      <img src="/check.svg" className="w-5 h-5" alt="check" />
                      <p className="font-gilroy text-[#FFFFFFCC] font-semibold text-[16px]  md:text-[20px]">{item}</p>
                   </div>
                 ))}
              </div>
                <div className="flex flex-col  gap-3 mt-6 w-full">
                 <button
                   type="button"
                   onClick={onOpenModal}
                   className="w-full whitespace-nowrap cursor-pointer text-[24px] font-gilroy  text-[#1A1A2E] bg-[linear-gradient(104.61deg,_#D4A017_0%,_#F5D060_100%)] shadow-[0px_4px_20px_0px_#D4A01766] px-10 py-5 rounded-full font-bold"
                 >
                   {t("version2.NationalCert.button1")}
                 </button>
  
                 <button
                   type="button"
                   onClick={onOpenModal}
                   className="w-full md:w-auto cursor-pointer border  text-[24px] font-gilroy border-[#D4A01780] text-[#F5D060] px-10 py-[18px] rounded-full"
                 >
                   {t("version2.NationalCert.button2")}
                 </button>
               </div>
            </div>
            <div className="absolute right-[-260px] top-1/2 hidden -translate-y-1/2 lg:block">

                <img src="/certificate.png" className=" object-contain" alt="" />
            </div>
        </motion.div>
    </div>
  )
}
