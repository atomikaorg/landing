import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

type Teacher = {
  name: string;
  image: string;
  field: string;
};

export default function Teachers() {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const teachers: Teacher[] = [
    {
      name: t("version2.teacher_name3"),
      image: "/teacher3.jpg",
      field: t("version2.teacher_field3"),
    },
    {
      name: t("version2.teacher_name1"),
      image: "/teacher2.jpg",
      field: t("version2.teacher_field1"),
    },
    {
      name: t("version2.teacher_name2"),
      image: "/teacher1.jpg",
      field: t("version2.teacher_field2"),
    },
    {
      name: t("version2.teacher_name4"),
      image: "/teacher4.jpg",
      field: t("version2.teacher_field4"),
    },
     {
      name: t("version2.teacher_name5"),
      image: "/teacher5.jpg",
      field: t("version2.teacher_field5"),
    }
  ];

  return (
    <motion.section
    ref={titleRef}
        initial={{ y: 70, opacity: 0 }}
        animate={titleInView ? { y: 0, opacity: 1 } : { y: 70, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      id="about_course"
      className="pt-[60px] overflow-hidden pb-[40px] md:pt-[120px] md:pb-[90px] "
    >
      <div className="container relative" >
                <div className="absolute top-[-100px] left-[-280px] hidden lg:block "><img src="/the.png" alt="" /></div>

        <div className="flex items-center justify-center">
          <button className="rounded-[14px] cursor-pointer bg-white px-7 py-5 text-[#787878] shadow-[0px_12px_42px_-4px_#18274B1F,0px_8px_18px_-6px_#18274B1F]">
            {t("version2.teacher_button")}
          </button>
        </div>

        <div className="mx-auto mt-5">
          <h2 className="text-[32px] font-semibold leading-[1.1] text-[#111827] md:text-[48px] text-left">
            {t("version2.teacher_title")}
          </h2>
          <p className="mt-4 text-[15px] text-[#6B7280] md:text-[22px] text-left">
            {t("version2.teacher_description")}
          </p>
        </div>
      </div>

      <div className="mt-8 overflow-x-visible overflow-y-scroll pb-4 md:mt-12 no-scrollbar ">
        <div
          className="mx-auto flex w-max min-w-full snap-x snap-mandatory justify-start gap-[30px] md:gap-[50px] px-4 md:px-8 lg:justify-center xl:px-0   "
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {teachers.map((teacher, index) => (
            <article
              key={index}
              className="group min-w-[270px] max-w-[270px] snap-start overflow-hidden rounded-[32px]  md:min-w-[280px] md:max-w-[280px]"
            >
              <div className="relative h-[360px] overflow-hidden bg-[#F3F4F6]  ">
                <div className="absolute right-4 top-4 z-10 rounded-full bg-[linear-gradient(182.09deg,_#C38BFA_1.21%,_#A755F7_53.87%,_#8216EB_123.92%)] p-[16px] ">
                  <img src="/play.png" alt="" className="h-5 w-5" />
                </div>

                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_47.12%,_rgba(0,0,0,0.71)_72.23%,_#000000_93.17%)] to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-center text-[17px] font-bold leading-tight text-white">
                    {teacher.name}
                  </h3>
                  <p className="mb-2 text-center bg-[linear-gradient(182.09deg,_#C38BFA_1.21%,_#A755F7_53.87%,_#8216EB_123.92%)] bg-clip-text text-transparent text-sm font-bold">
                    {teacher.field}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
