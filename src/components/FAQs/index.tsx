import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQs = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-[208px] max-md:mt-[116px]">
      <h2 className="font-semibold text-[76px] text-center max-md:leading-10 max-md:max-w-full max-md:text-[38px]">
        {t("title.faqs")}
      </h2>
      <Accordion type="single" collapsible className="mt-20">
        <AccordionItem value="item-1" className="bg-white rounded-[30px]">
          <AccordionTrigger className="py-10 px-[30px] max-md:py-7 max-md:text-[28px] text-start cursor-pointer font-semibold text-[34px] hover:no-underline">
            {t("title.how_works_subscription")}
          </AccordionTrigger>
          <AccordionContent className="mt-8 text-2xl text-gray-text font-medium px-[30px] pb-10 max-md:pb-7 max-md:text-lg max-md:mt-5">
            {t("title.how_works_subscription_content")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="bg-white rounded-[30px] mt-5">
          <AccordionTrigger className="py-10 px-[30px] max-md:py-7 max-md:text-[28px] text-start cursor-pointer font-semibold text-[34px] hover:no-underline">
            {t("title.can_freeze_sub")}
          </AccordionTrigger>
          <AccordionContent className="mt-8 text-2xl text-gray-text font-medium px-[30px] pb-10 max-md:pb-7 max-md:text-lg max-md:mt-5">
            {t("title.can_freeze_sub_content")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="bg-white rounded-[30px] mt-5">
          <AccordionTrigger className="py-10 px-[30px] max-md:py-7 max-md:text-[28px] text-start cursor-pointer font-semibold text-[34px] hover:no-underline">
            {t("title.how_get_atoms")}
          </AccordionTrigger>
          <AccordionContent className="mt-8 text-2xl text-gray-text font-medium px-[30px] pb-10 max-md:pb-7 max-md:text-lg max-md:mt-5">
            {t("title.how_get_atoms_descr")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="bg-white rounded-[30px] mt-5">
          <AccordionTrigger className="py-10 px-[30px] max-md:py-7 max-md:text-[28px] text-start cursor-pointer font-semibold text-[34px] hover:no-underline">
            {t("title.third_person")}
          </AccordionTrigger>
          <AccordionContent className="mt-8 text-2xl text-gray-text font-medium px-[30px] pb-10 max-md:pb-7 max-md:text-lg max-md:mt-5">
            {t("title.third_person_descr")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQs;
