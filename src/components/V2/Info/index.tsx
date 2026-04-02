import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type InfoProps = {
  onOpenModal?: () => void;
};

export default function Info({ onOpenModal }: InfoProps) {
  const { t } = useTranslation();

  return (
    <div className="py-[30px] pt-[114px] md:py-[100px] md:pt-[134px]">
      <div className="container">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex min-w-full items-center justify-between lg:min-h-[560px] lg:pr-[540px]"
        >
      <div className="flex max-w-[591px] flex-col">
         <h1 className="font-gilroy text-[40px] md:text-[64px] text-[#1A1A2E] font-bold leading-[110%]">
             {t("version2.info.titlePrefix") && `${t("version2.info.titlePrefix")} `}
             <span className="text-[#A24DF5]">
               {t("version2.info.titleHighlight")}
            </span>{" "}
            {t("version2.info.titleSuffix")}
        </h1>

            <p className="text-[22px] md:text-[28px] font-medium text-[#6B7280] mt-[30px] mb-[50px] md:mt-[50px] font-gilroy leading-[150%] ">
              {t("version2.info.description")}
            </p>

            <div className="flex flex-col gap-5 mb-[50px] ">
              <button
                type="button"
                onClick={onOpenModal}
                className="max-[430px]:px-5  px-10 py-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-full md:w-auto cursor-pointer text-center text-[#FFFFFF] font-gilroy text-[24px] font-bold"
                style={{
                  background:
                    "linear-gradient(182.09deg, #C38BFA 1.21%, #A755F7 53.87%, #8216EB 123.92%)",
                }}
              >
                {t("version2.info.startEducation")}
              </button>

              <a
                href="tel:+998555111133"
                className="rounded-full max-[430px]:px-5  border-[2px] border-[#A755F7] text-center py-[18px] px-10 bg-[#FFFFFF] text-[#A755F7] cursor-pointer hover:bg-transparent w-full md:w-auto font-gilroy text-[24px] font-bold"
              >
                {t("version2.info.tryFree")}
              </a>
            </div>

            <div className="flex items-center justify-between text-center gap-[10px] md:gap-10 ">
              <div >
                <CountUp
                  className="text-[#A755F7] text-[36px] md:text-[48px] font-black font-gilroy leading-[32px]"
                  end={800}
                  duration={3}
                  suffix="+"
                />

              <p className="text-[#6B7280] text-[20px] md:text-[28px] flex flex-col  md:gap-[5px] font-gilroy font-medium leading-[150%]">
                {t("version2.info.students")}
              </p>
              </div>

              <div>
                <CountUp
                  className="text-[#A755F7]  text-[36px] md:text-[48px] font-black font-gilroy leading-[32px]"
                  end={1500}
                  duration={3}
                  suffix="+"
                  useGrouping={false}
                />
              <p className="text-[#6B7280] text-[20px] md:text-[28px] flex flex-col  md:gap-[5px] font-gilroy font-medium leading-[150%]">
                {t("version2.info.languages")}
              </p>
              </div>
             
             <div>
                <CountUp
                  className="text-[#A755F7]  text-[36px] md:text-[48px] font-black font-gilroy leading-[32px]"
                  end={600}
                  duration={3}
                  suffix="+"
                  />
              <p className="text-[#6B7280] text-[20px] md:text-[28px] flex flex-col  md:gap-[5px] font-gilroy font-medium leading-[150%]">
                {t("version2.info.lessons")}
              </p>
             </div>

            </div>
          </div>

          <div className="absolute right-[-260px] top-1/2 hidden -translate-y-1/2 lg:block">
            <img src="/ipad.png" className=" max-w-none" alt="ipad" />
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
