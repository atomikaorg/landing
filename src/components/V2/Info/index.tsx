import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Partners from "../Partners";

export default function Info() {
  return (
    <div className="bg-[#F9FAFB] py-[100px]">
      <div className="container">
        <div className="flex items-center gap-10">

          <motion.div
           initial={{ y: 100, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
            className="flex flex-col gap-[37px] max-w-[611px]"
          >
            <h1 className="text-[40px] text-[#1A1A2E] font-bold leading-[110%]">
             Подготовьтесь к экзаменам по <span className="text-[#A24DF5]">Химии и Биологии
                </span>  ОНЛАЙН и без репетитора
            </h1>

            <p className="text-[20px] text-[#6B7280]">
             Учитесь в своём темпе, без расписания, с поддержкой
            ментора и куратора. Пересматривайте уроки сколько нужно.
            </p>

            <div className="flex items-center gap-4">
              <Button
                className="px-10 py-5 rounded-full"
                style={{
                  background:
                    "linear-gradient(182.09deg, #C38BFA 1.21%, #A755F7 53.87%, #8216EB 123.92%)",
                }}
              >
                Начать обучение
              </Button>

              <Button className="rounded-full border-[2px] border-[#A755F7] text-[#A755F7] bg-[#F9FAFB] hover:bg-transparent">
                Попробовать бесплатно
              </Button>
            </div>

            <div className="flex items-center gap-10">
              <p className="text-[#6B7280] text-[20px] flex items-center gap-[5px]">
                <CountUp
                  className="text-[#A755F7] text-[40px] font-extrabold"
                  end={800}
                  duration={3}
                  suffix="+"
                />{" "}
                учеников
              </p>

              <p className="text-[#6B7280] text-[20px] flex items-center gap-[5px]">
                <CountUp
                  className="text-[#A755F7] text-[40px] font-extrabold"
                  end={600}
                  duration={3}
                  suffix="+"
                />
                уроков
              </p>

              <p className="text-[#6B7280] text-[20px] flex items-center gap-[5px]">
                <CountUp
                  className="text-[#A755F7] text-[40px] font-extrabold"
                  end={2}
                  duration={3}
                />
                языках
              </p>
            </div>
          </motion.div>

          <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="hidden lg:block"
          >
            <img src="/ipad.svg" alt="ipad" />
          </motion.div>

        </div>
        <Partners/>
      </div>
    </div>
  );
}