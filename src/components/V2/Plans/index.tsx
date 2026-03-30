import { useRef } from "react";
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
}: PlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[32px] bg-white px-6 pb-6 pt-7 shadow-[0px_18px_50px_-16px_rgba(24,39,75,0.18)] md:px-8 md:pb-8 md:pt-8 ${
        highlighted
          ? "border border-[#A855F7] shadow-[0px_20px_60px_-20px_rgba(168,85,247,0.55)]"
          : "border border-[#E8E8EF]"
      }`}
    >
      {badge ? (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] px-4 py-2 text-[12px] font-semibold text-white shadow-[0px_12px_30px_rgba(130,22,235,0.25)]">
          {badge}
        </div>
      ) : null}

      <div className="mb-7">
        <h3 className="text-[28px] font-bold font-gilroy leading-none text-[#1F2138] md:text-[32px]">
          {title}
        </h3>
        <p className="mt-3 text-[14px] leading-5 text-[#8A8FA3] md:text-[16px]">
          {description}
        </p>
      </div>

      <div className="mb-7 flex items-end gap-2 pb-5">
        <span className="bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] bg-clip-text font-delagothic font-normal leading-none text-transparent text-[36px] sm:text-[42px] ">
          {price}
        </span>
        <span className="pb-1 text-[14px] font-medium text-[#6B7280] md:text-[16px]">
          {currency}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-[#30354A] border-b border-[#F3F4F6] last:border-none pb-[11px]">
            <div className="bg-[#E8F8F3] py-[3px] px-[5.5px] rounded-full items-center justify-center">

            <img src="/plancheck.svg" alt="" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
            </div>
            <p className="text-[14px] leading-6 md:text-[15px]  w-full text-[#1A1A2E]">{feature}</p>
          </div>
        ))}

        {unavailableFeatures.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-[#C6CAD7] border-b border-[#F3F4F6] last:border-none pb-[11px]">
            <span className=" flex items-center justify-center  shrink-0  rounded-full border border-[#E5E7EB] text-[12px] leading-none bg-[#F1F1F3] py-[10px] px-2 ">
              <img src="/minus.png" alt="" className="mt-0.5 " />
            </span>
            <p className="text-[14px] leading-6 md:text-[15px] ">{feature}</p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpenModal}
        className="mt-8 cursor-pointer rounded-full border border-[#A855F7] px-6 py-4 text-[15px] font-semibold text-[#A855F7] transition hover:bg-[#A855F7] hover:text-white"
      >
        {buttonText}
      </button>

      {installmentInfo ? (
        <p className="mt-4 text-[12px] leading-5 text-[#9CA3AF] md:text-[13px] ">
          {installmentInfo}
        </p>
      ) : null}
    </article>
  );
}

type PlansProps = {
  onOpenModal?: () => void;
};

export default function Plans({ onOpenModal }: PlansProps) {
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

  const startFeatures = Array.from({ length: 6 }, (_, index) =>
    t(`${pricingRoot}.start_plan.features.${index}`)
  );
  const startUnavailableFeatures = Array.from({ length: 3 }, (_, index) =>
    t(`${pricingRoot}.start_plan.unavailable_features.${index}`)
  );
  const standardFeatures = Array.from({ length: 7 }, (_, index) =>
    t(`${pricingRoot}.standard_plan.features.${index}`)
  );

  return (
    <section
      id="about_platform"
      ref={ref}
      className="overflow-hidden pb-[40px] pt-[40px] md:pb-[120px] md:pt-[40px]"
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute bottom-[-200px] left-[-200px] hidden lg:block">
            <img src="/lope.png" alt="" aria-hidden="true" className="" />
          </div>

          <Button text={`${plansRoot}.plan`} />

          <div className="mx-auto mt-5 max-w-[780px] text-center">
            <h2 className="text-[32px] font-semibold leading-[1.1] text-[#1F2138] md:text-[48px] font-gilroy">
              {t(`${plansRoot}.title`)}
            </h2>
            <p className="mt-4 hidden md:block text-[15px] leading-6 text-[#7B8092] md:text-[22px] md:leading-8">
              {t(`${plansRoot}.description`)}
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[920px] gap-6 md:mt-14 md:grid-cols-2">
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
            />
          </div>
          <p className="mt-4 block md:hidden text-[15px] leading-6 text-[#7B8092] md:text-[22px] md:leading-8">
              {t(`${plansRoot}.description`)}
            </p>
        </motion.div>
      </div>
    </section>
  );
}
