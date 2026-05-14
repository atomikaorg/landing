import i18n from "@/localization"
import { useTranslation } from "react-i18next"
import {motion, useInView} from "framer-motion"
import { useRef } from "react";
import Button from "../Button";

type Props = {
  iscert?: boolean;
};
export default function StudentsResult({iscert=false}:Props) {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });
    const {t}=useTranslation()
    const links=[
        {src:"/certificateA2.png"},
        {src:"/cert5.png"},
        {src:"/certificateA.jpg"},
        {src:"/cert7.png"},
        {src:"/cert2.png"},
        {src:"/certificateb.jpg"},
        {src:"/cert1.png"},
        {src:"/certificatecp.jpg"},
        {src:"/certificatecpp.jpg"},
        {src:"/cert3.png"},
        {src:"/cert4.png"},
    ]
  return (
    <section className={`w-full overflow-x-clip pt-[50px]  pb-[50px] ${iscert&&"bg-[#FDF8E8]"}`}>
        <motion.div
          ref={cardRef}
          initial="hidden"
          animate={isCardInView ? "visible" : "hidden"}
          variants={{
           hidden: { y: 50, opacity: 0 },
           visible: { 
           y: 0, 
           opacity: 1,
           transition: { duration: 0.6, delay: 0.1 }
          }}}>

        <div className="container relative">
          <Button text={"version2.results.button"} type={iscert} />
          {! iscert &&<img src="/cubok.png" className="absolute left-[-200px] top-0 hidden md:block" alt="" />}
          <div className="flex items-center justify-center">
            <h2 className="text-[#1A1A2E] text-center  font-gilroy max-w-[800px] text-[36px] leading-[120%] md:text-[42px] lg:text-[46px]  font-semibold mb-[10px] md:mb-5  mt-[30px] md:mt-[50px]">{t("version2.results.title")}</h2>
          </div>
              <p className="text-[#6B7280] text-center text-[22px] font-medium leading-[150%]  md:text-[28px] mb-[30px] md:mb-10 font-gilroy">
                {i18n.language === "ru" ? (  <>
                      {t("version2.results.description")}{" "}
                     <span className="font-bold">{t("version2.results.atomika")}</span>
                      </>) : (
                   <>
                     <span className="font-bold">{t("version2.results.atomika")}</span>{" "}
                     {t("version2.results.description")}
                   </> )}
              </p>      
         </div>
            <div className="content-rail flex w-full max-w-full items-center gap-[30px] overflow-x-auto overflow-y-hidden px-4 no-scrollbar md:gap-[50px]">
             {links.map((link, index) => (
             <div
               key={link.src}
               className="h-[520px] w-[350px] min-w-[350px] shrink-0 overflow-hidden rounded-[30px] md:h-[650px] md:w-[480px] md:min-w-[480px] lg:h-[550px] lg:w-[380px] lg:min-w-[380px]"
             >
               <img
                 className="h-full w-full object-cover object-top"
                 src={link.src}
                 alt={`Natija ${index + 1}`}
               />
             </div>
           ))}
         </div>
        </motion.div>
         </section>
    )
}

