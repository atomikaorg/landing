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

export default function FAQ() {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });
  return (
    <section className="pb-[30px] md:pb-[50px] pt-[30px]">
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
            <button className="font-gilroy rounded-[14px] text-[22px] md:text-[28px] leading-[150%] cursor-pointer bg-white px-[30px] md:px-10 py-[15px] md:py-5 text-[#787878] shadow-[0px_12px_42px_-4px_#18274B1F,0px_8px_18px_-6px_#18274B1F]">
              FAQ
            </button>
            <h2 className="font-gilroy text-center text-[36px] leading-[120%] font-semibold text-[#1A1A2E] md:text-[48px]">
              {t("version2.Faq.title")}
            </h2>
          </div>

          <Accordion.Root
            type="single"
            collapsible
            className="rounded-[28px] bg-[#F9FAFB]"
          >
            {faqKeys.map((key) => (
              <Accordion.Item
                key={key}
                value={key}
                className="border-b border-[#E9E7F2]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left md:py-8">
                    <span className="text-[20px] md:text-[36px] font-semibold text-[#1A1A2E] font-gilroy leading-[120%] ">
                      {t(`version2.Faq.items.${key}.question`)}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3ECFF] text-[#8B3DFF] transition-colors duration-200 group-data-[state=open]:bg-[#8B3DFF] group-data-[state=open]:text-white md:h-12 md:w-12">
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
