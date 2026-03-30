import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type InfoProps = {
  onOpenModal?: () => void;
};

export default function Info({ onOpenModal }: InfoProps) {
  const { t } = useTranslation();

  return (
    <div className="py-[30px] pt-[114px] md:py-[100px] md:pt-[184px]">
      <div className="container">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex min-w-full items-center justify-between lg:min-h-[560px] lg:pr-[540px]"
        >
          <div className="flex max-w-[580px] flex-col gap-[37px]">
         <h1 className="font-gilroy text-[40px] md:text-[64px] text-[#1A1A2E] font-bold leading-[110%]">
             {t("version2.info.titlePrefix") && `${t("version2.info.titlePrefix")} `}
             <span className="text-[#A24DF5]">
               {t("version2.info.titleHighlight")}
            </span>{" "}
            {t("version2.info.titleSuffix")}
        </h1>

            <p className="text-[15px] md:text-[20px] text-[#6B7280]">
              {t("version2.info.description")}
            </p>

            <div className="flex flex-wrap md:flex items-center gap-4 ">
              <button
                type="button"
                onClick={onOpenModal}
                className="px-10 py-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-full md:w-auto cursor-pointer text-center text-[#FFFFFF]"
                style={{
                  background:
                    "linear-gradient(182.09deg, #C38BFA 1.21%, #A755F7 53.87%, #8216EB 123.92%)",
                }}
              >
                {t("version2.info.startEducation")}
              </button>

              <button
                type="button"
                onClick={onOpenModal}
                className="rounded-full border-[2px] border-[#A755F7] text-center py-[18px] px-10 bg-[#FFFFFF] text-[#A755F7] cursor-pointer hover:bg-transparent w-full md:w-auto"
              >
                {t("version2.info.tryFree")}
              </button>
            </div>

            <div className="flex items-center gap-[10px] md:gap-10 ">
              <p className="text-[#6B7280] text-[14px] md:text-[20px] flex items-center gap-1 md:gap-[5px] font-gilroy">
                <CountUp
                  className="text-[#A755F7] text-[22px] md:text-[40px] font-extrabold"
                  end={800}
                  duration={3}
                  suffix="+"
                />{" "}
                {t("version2.info.students")}
              </p>

              <p className="text-[#6B7280] text-[14px] md:text-[20px] flex items-center gap-1 md:gap-[5px] font-gilroy">
                <CountUp
                  className="text-[#A755F7]  text-[22px] md:text-[40px] font-extrabold "
                  end={600}
                  duration={3}
                  suffix="+"
                />
                {t("version2.info.lessons")}
              </p>

              <p className="text-[#6B7280] text-[14px] md:text-[20px] flex items-center gap-1 md:gap-[5px] font-gilroy">
                <CountUp
                  className="text-[#A755F7]  text-[22px] md:text-[40px] font-extrabold "
                  end={2}
                  duration={3}
                />
                {t("version2.info.languages")}
              </p>
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
