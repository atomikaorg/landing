import * as Accordion from "@radix-ui/react-accordion";
import { Plus, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import {motion, useInView} from "framer-motion"
import { useRef } from "react";
const faqKeys = [
  "howSubscriptionWorks",
  "isInstallmentAvailable",
  "differenceBetweenPlans",
  "dailyLessonCount",
  "lessonLanguage",
  "differenceFromMainCourse",
] as const;

type Faqprop={
  iscert?:Boolean
}

export default function FAQ({iscert}:Faqprop) {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });
  return (
    <section className={`pb-[30px] md:pb-[50px] pt-[50px] ${iscert &&"bg-[#FDF8E8]" } `}>
      <div className="container">
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
        className="mx-auto max-w-[700px]">
          <div className="mb-[30px] flex flex-col items-center justify-center gap-[30px] md:gap-[40px] md:mb-10">
          
            <button className={`font-gilroy rounded-[14px] text-[22px] md:text-[28px] leading-[150%] cursor-pointer bg-white px-[30px] md:px-10 py-[15px] md:py-5 ${iscert?"bg-[linear-gradient(104.61deg,#D4A017_0%,#F5D060_100%)] bg-clip-text text-transparent":" text-[#787878] "} shadow-[0px_4px_16px_0px_#7C3AED4D]`}>
              FAQ
            </button>
            <h2 className="font-gilroy text-center text-[36px] leading-[120%] font-semibold text-[#1A1A2E] md:text-[48px]">
              {t("version2.Faq.title")}
            </h2>
          </div>

          <Accordion.Root
            type="single"
            collapsible
            className={`rounded-[28px] ${iscert ? "bg-[#FDF8E8]":"bg-[#F9FAFB]"}`}
            
          >
            {faqKeys.map((key) => (
              <Accordion.Item
                key={key}
                value={key}
                className="border-b border-[#E9E7F2]"
              >
                <Accordion.Header>
                 <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left md:py-8">
                     <span className="font-gilroy text-[20px] font-semibold leading-[120%] text-[#1A1A2E] md:text-[36px]">
                       {t(`version2.Faq.items.${key}.question`)}
                     </span>

                     <span
                       className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 md:h-12 md:w-12 ${
                         iscert
                           ? "bg-[#D0C7B0]  group-data-[state=open]:bg-[linear-gradient(111.38deg,_#1A1205_0%,_#2D1F08_50%,_#1A1408_100%)]  text-white"
                           : "bg-[#F3ECFF] text-[#8B3DFF] group-data-[state=open]:bg-brand-purple-gradient group-data-[state=open]:text-white"
                       }`}
                     >
                       <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                       <X className="hidden h-5 w-5 group-data-[state=open]:block" />
                     </span>
                   </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-[98%] pb-6 pr-0 text-[16px] leading-[150%] text-[#6B7280] md:pb-[21px] md:pr-20 md:text-[24px] font-gilroy font-medium">
                    {t(`version2.Faq.items.${key}.answer`)}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
