import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../Button";

type PlanCardProps = {
  title: string;
  description: string;
  price: string;
  currency: string;
  buttonText: string;
  onOpenModal?: () => void;
  features: string[];
  unavailableFeatures?: string[];
  badge?: string;
  installmentInfo?: string;
  highlighted?: boolean;
  className?: string;
};

function PlanCard({
  title,
  description,
  price,
  currency,
  buttonText,
  onOpenModal,
  features,
  unavailableFeatures = [],
  badge,
  installmentInfo,
  highlighted = false,
  className,
}: PlanCardProps) {
  return (
    <article
      className={`${className ?? ""} relative flex h-full flex-col rounded-[32px] bg-white px-6 pb-6 pt-7 shadow-[0px_18px_50px_-16px_rgba(24,39,75,0.18)] md:px-8 md:pb-8 md:pt-8 ${
        highlighted
          ? "border-[4px] border-[#A855F7] shadow-[0px_20px_60px_-20px_rgba(168,85,247,0.55)]"
          : "border border-[#E8E8EF]"
      }`}
    >
      {badge ? (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 leading-[150%] whitespace-nowrap  rounded-full bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] px-[30px] py-[10px] text-[24px] font-medium font-gilroy text-white shadow-[0px_12px_30px_rgba(130,22,235,0.25)]">
          {badge}
        </div>
      ) : null}

      <div className="mb-5">
        <h3 className="font-gilroy font-semibold leading-[150%] text-[#1F2138] text-[36px]">
          {title}
        </h3>
        <p className="mt-[3px]  leading-[150%] font-medium text-[#8A8FA3] text-[24px]">
          {description}
        </p>
      </div>

      <div className=" flex items-end gap-[5px] mb-[10px]">
        <span className="bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] bg-clip-text font-gilroy font-semibold leading-[120%] text-transparent text-[55px] ">
          {price}
        </span>
        <span className="pb-1 text-[16px] font-medium text-[#6B7280] font-gilroy l">
          {currency}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-[#30354A] border-b border-[#F3F4F6] last:border-none pb-[11px]">
            <div className="bg-[#E8F8F3] py-[3px] px-[5.5px] rounded-full items-center justify-center">
              <img src="/plancheck.svg" alt="" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
            </div>
            <p className="text-[16px] leading-[150%] font-gilroy font-medium  w-full text-[#1A1A2E]">{feature}</p>
          </div>
        ))}

        {unavailableFeatures.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-[#C6CAD7] border-b border-[#F3F4F6] last:border-none pb-[11px]">
            <span className=" flex items-center justify-center  shrink-0  rounded-full border border-[#E5E7EB] text-[12px] leading-none bg-[#F1F1F3] py-[10px] px-2 ">
              <img src="/minus.png" alt="" className="mt-0.5 " />
            </span>
            <p className="text-[16px] leading-[150%] font-gilroy font-medium text-[#6B7280]">{feature}</p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpenModal}
        className={`group relative mt-8 cursor-pointer overflow-hidden rounded-full border px-6 py-4 text-[15px] font-semibold transition-all duration-300 ease-in-out ${
          highlighted
            ? "border-[#A855F7] bg-white text-[#A855F7]"
            : "border-[#A855F7] bg-transparent text-[#A855F7] hover:bg-[#A855F7] hover:text-white"
        }`}
      >
        {highlighted ? (
          <>
            <span className="absolute inset-0 bg-brand-purple-gradient transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
            <span className="text-white relative z-10 bg-brand-purple-gradient bg-clip-text  transition-all duration-300 ease-in-out group-hover:bg-none group-hover:text-[#A855F7]">
              {buttonText}
            </span>
          </>
        ) : (
          buttonText
        )}
      </button>

     <div className="flex items-center justify-center w-full"> <p className="mt-4 text-center text-[16px] leading-[150%] text-[#9CA3AF] font-gilroy font-medium max-w-[220px]">
        {installmentInfo}
      </p></div>
    </article>
  );
}

type PlansProps = {
  onOpenModal?: () => void;
  onAutoOpen?: () => void;
};

export default function Plans({ onOpenModal, onAutoOpen }: PlansProps) {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const currentLanguage = i18n.resolvedLanguage || i18n.language;
  const existsInCurrentLanguage = (key: string) =>
    i18n.exists(key, { lng: currentLanguage, fallbackLng: false });

  const plansRoot = "version2.plans";
  const pricingRoot = existsInCurrentLanguage("version2.pricing.currency")
    ? "version2.pricing"
    : `${plansRoot}.pricing`;

  const startFeatures = Array.from({ length: 7 }, (_, index) =>
    t(`${pricingRoot}.start_plan.features.${index}`)
  );
  const startUnavailableFeatures = Array.from({ length: 2 }, (_, index) =>
    t(`${pricingRoot}.start_plan.unavailable_features.${index}`)
  );
  const standardFeatures = Array.from({ length: 7 }, (_, index) =>
    t(`${pricingRoot}.standard_plan.features.${index}`)
  );

  useEffect(() => {
    if (isInView) {
      onAutoOpen?.();
    }
  }, [isInView, onAutoOpen]);

  return (
    <section
      id="about_platform"
      ref={ref}
      className="overflow-hidden pb-[30px] pt-[60px] md:pb-[50px] md:pt-[100px]"
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-[-50px] left-[-200px] hidden lg:block">
            <img src="/lope.png" alt="" aria-hidden="true" className="" />
          </div>

          <Button text={`${plansRoot}.plan`} />

          <div className="mx-auto mt-[30px] md:mt-10 text-center">
            <h2 className="text-[36px] font-semibold leading-[120%] text-[#1F2138] md:text-[48px] font-gilroy">
              {t(`${plansRoot}.title`)}
            </h2>
            <p className="mt-[10px] md:mt-4  text-[22px]  text-[#7B8092] md:text-[28px] leading-[150%] font-medium font-gilroy">
              {t(`${plansRoot}.description`)}
            </p>
          </div>

          <div className="mx-auto mt-[30px] grid max-w-[920px] gap-10 md:gap-6 md:mt-10 md:grid-cols-2">
            <PlanCard
              title={t(`${pricingRoot}.start_plan.title`)}
              description={t(`${pricingRoot}.start_plan.description`)}
              price={t(`${pricingRoot}.start_plan.price`)}
              currency={t(`${pricingRoot}.currency`)}
              buttonText={t(`${pricingRoot}.start_plan.button_text`)}
              onOpenModal={onOpenModal}
              features={startFeatures}
              unavailableFeatures={startUnavailableFeatures}
              installmentInfo={t(`${pricingRoot}.standard_plan.installment_info`)}
              className="order-2 md:order-1"
            />

            <PlanCard
              title={t(`${pricingRoot}.standard_plan.title`)}
              description={t(`${pricingRoot}.standard_plan.description`)}
              price={t(`${pricingRoot}.standard_plan.price`)}
              currency={t(`${pricingRoot}.currency`)}
              buttonText={t(`${pricingRoot}.standard_plan.button_text`)}
              onOpenModal={onOpenModal}
              badge={t(`${pricingRoot}.standard_plan.badge`)}
              features={standardFeatures}
              installmentInfo={t(`${pricingRoot}.standard_plan.installment_info`)}
              highlighted
              className="order-1 md:order-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
