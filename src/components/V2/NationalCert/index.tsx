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
        <img className="absolute right-0 bottom-0 hidden lg:block" src="/flag.png" alt="" />
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
        className="container flex items-center justify-between py-[100px]">
            <div className="max-w-[655px]">
                <p className="text-[#F5D060] text-[14px] bg-[#3F2E09] border border-[#D4A0174D] py-2 px-[18px] rounded-[50px] w-fit mb-6">{t("version2.NationalCert.nattitle")}</p>
               <h2 className="font-gilroy text-[#FFFFFF] text-[32px] md:text-[48px] font-bold leading-[1.2] mb-6">
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
               </h2>                <p className="text-[#FFFFFF99] text-[20px]">{t("version2.NationalCert.description")}</p>
               <div className="flex flex-col gap-4 mt-6 mb-8">
            {Array.isArray(features) && features.map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-[#FFFFFFCC] text-[16px]">
                <img src="/check.svg" className="w-5 h-5" alt="check" />
                <p className="font-outfit text-[#FFFFFFCC] text-[15px]">{item}</p>
              </div>
            ))}
          </div>
                <div className="flex flex-col md:flex-row items-center gap-3 mt-6 w-full md:w-fit">
                 <button
                   type="button"
                   onClick={onOpenModal}
                   className="w-full md:w-auto cursor-pointer text-[#1A1A2E] bg-[linear-gradient(104.61deg,_#D4A017_0%,_#F5D060_100%)] shadow-[0px_4px_20px_0px_#D4A01766] px-10 py-5 rounded-full font-bold"
                 >
                   {t("version2.NationalCert.button1")}
                 </button>
  
                 <button
                   type="button"
                   onClick={onOpenModal}
                   className="w-full md:w-auto cursor-pointer border border-[#D4A01780] text-[#F5D060] px-10 py-[18px] rounded-full"
                 >
                   {t("version2.NationalCert.button2")}
                 </button>
               </div>
            </div>
            <div className="relative z-10 hidden lg:block">
                <div className="flex flex-col gap-5">
                {Array.isArray(cards) && cards.map((card, index) => (
                  <div 
                    key={card.id || index} 
                    className="flex items-center gap-4 bg-[#322712] border p-[25px] border-[#D4A01726] rounded-[30px]"
                  >
                    <div className="rounded-[14px] w-fit p-[14px] bg-[#473613] flex-shrink-0">
                      <img src={card.icon} alt={card.title} className="w-6 h-6" />
                    </div>
          
                    <div>
                      <p className="text-[#FFFFFF]  text-[18px] font-outfit font-bold">
                        {card.title}
                      </p>
                      <p className="text-[#FFFFFF80] text-[13px] mt-1 font-outfit">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
                <div className="mt-4 border border-[#D4A01740] bg-[#D4A01714] py-5 px-10 rounded-[30px]">
                    <h3 className="bg-[linear-gradient(96.5deg,_#D4A017_0%,_#F5D060_100%)] bg-clip-text text-transparent text-[28px] font-delagothic">{t("version2.NationalCert.price")}</h3>
                   <p className="text-[#FFFFFF80] text-[15px]">{t("version2.NationalCert.pricetitle")}</p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
