import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../Button";

type FeedbackItem = {
  id?: number | string;
  userName?: string;
  username?: string;
  feedback?: string;
};

export default function Feedbacks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardref = useRef(null);
  const cardisInView = useInView(cardref, { once: true });
  const { t } = useTranslation();

  const videoLinks = [
    { src: "https://www.youtube.com/embed/Mqzw_NY6G7A" },
    { src: "https://www.youtube.com/embed/IcCoCf42s98" },
    { src: "https://www.youtube.com/embed/GCXMOW2ECxk" },
    { src: "https://www.youtube.com/embed/kZv0O3OJytg" },
    { src: "https://www.youtube.com/embed/il7AWXvf-4w" },
    { src: "https://www.youtube.com/embed/PyY7QTY2SL8" },
  ];

  const feedbacks =
    (t("version2.feedbacks.userfeedbacks", {
      returnObjects: true,
    }) as FeedbackItem[]) || [];

  return (
    <section id="privileges" className="md:pt-[150px] pt-0">
      <div className="container relative">
        <div className="absolute right-[-200px] top-[-80px] hidden lg:block">
          <img src="/message.png" alt="" />
        </div>

        <Button text={"version2.feedbacks.button"} />
        <h2 className="mt-10 mb-5 text-center text-[32px] font-bold font-gilroy text-[#1A1A2E] md:text-[48px]">
          {t("version2.feedbacks.title")}
        </h2>
        <p className="text-center text-[15px] text-[#6B7280] md:text-[24px]">
          {t("version2.feedbacks.description")}
        </p>

      </div>
       <motion.div
        ref={cardref}
        initial="hidden"
        animate={cardisInView ? "visible" : "hidden"}
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.8, delay: 0.1 }}
      
       className="feedbacks-rail mt-[30px] flex items-stretch overflow-x-scroll no-scrollbar gap-[30px] md:gap-[50px]  md:mt-[50px] pb-[40px] md:pb-[80px]">
     {feedbacks.map((item, index) => (
    <div
      key={item.id ?? index}
      className="flex  flex-col rounded-[32px] bg-white p-7 shadow-[0px_4px_24px_0px_#7C3AED14] max-v-[300px] min-w-[300px] md:min-w-[400px] md:max-w-[400px]"
    >
      <img src="/stars.png" alt="stars" className="mb-5 h-4 w-[100px]" />
      
      <p className="flex-1 text-[15px] leading-7 text-[#4B5563] md:text-[17px]">
        {item.feedback}
      </p>
      
      <div className="mt-6 border-t border-[#EEEAF8] pt-5">
        <p className="text-[17px] font-semibold text-[#1A1A2E]">
          {item.userName || item.username}
        </p>
      </div>
    </div>
  ))}
</motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="container">
          <h2 className="mb-[10px] text-center text-[36px] md:text-[48px] font-bold text-[#1A1A2E] md:mb-5 font-gilroy">
            {`🎥 ${t("version2.feedbacks.videofeedback")}`}
          </h2>
          <p className="text-center text-[15px] text-[#6B7280] md:text-[24px]">
            {t("version2.feedbacks.description")}
          </p>
        </div>

        <div className="content-rail mt-[30px] flex items-center gap-[30px] overflow-x-scroll no-scrollbar md:mt-[40px] md:gap-[50px]">
          {videoLinks.map(({ src }) => (
            <iframe
              key={src}
              src={src}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-[500px] w-[300px] shrink-0 rounded-[30px] md:h-[650px] md:w-[400px]"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
