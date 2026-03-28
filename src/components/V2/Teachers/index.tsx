import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { RotateCcw } from "lucide-react";
import Button from "../Button";

type Teacher = {
  id: number;
  name: string;
  image: string;
  imagePosition?: string;
  imageScale?: number;
  field: string;
  description: string;
  experience: string;
};

export default function Teachers() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const teachers: Teacher[] = [
    {
      id: 1,
      name: t("version2.teacher_name1"),
      image: "/teacher2.jpg",
      imagePosition: "center top",
      field: t("version2.teacher_field1"),
      description: t("title.teacher_desc1"),
      experience: t("title.teacher_exp1"),
    },
    {
      id: 2,
      name: t("version2.teacher_name2"),
      image: "/teacher1.jpg",
      imagePosition: "center top",
      field: t("version2.teacher_field2"),
      description: t("title.teacher_desc2"),
      experience: t("title.teacher_exp2"),
    },
    {
      id: 3,
      name: t("version2.teacher_name3"),
      image: "/teacher3.jpg",
      imagePosition: "center 48%",
      field: t("version2.teacher_field3"),
      description: t("title.teacher_desc3"),
      experience: t("title.teacher_exp3"),
    },
    {
      id: 4,
      name: t("version2.teacher_name4"),
      image: "/teacher4.jpg",
      imagePosition: "center top",
      field: t("version2.teacher_field4"),
      description: t("title.teacher_desc4"),
      experience: t("title.teacher_exp4"),
    },
    {
      id: 5,
      name: t("version2.teacher_name5"),
      image: "/teacher5.jpg",
      imagePosition: "center 50%",
      imageScale: 1.40,
      field: t("version2.teacher_field5"),
      description: t("title.teacher_desc5"),
      experience: t("title.teacher_exp5"),
    },
  ];

  const handleFlip = (id: number) => {
    setFlippedCard((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 0.8, delay: 0.1 }}
      id="about_course"
      className="overflow-hidden pt-[60px] md:pt-[120px]"
    >
      <div className="container relative">
        <div className="absolute left-[-280px] top-[-100px] hidden lg:block">
          <img src="/the.png" alt="" />
        </div>
        <Button text={"version2.teacher_button"} />

        <div className="mx-auto mt-5">
          <h2 className="text-left text-[32px] font-semibold leading-[1.1] text-[#111827] md:text-[48px]">
            {t("version2.teacher_title")}
          </h2>
          <p className="mt-4 text-left text-[15px] text-[#6B7280] md:text-[22px]">
            {t("version2.teacher_description")}
          </p>
        </div>
      </div>

      <div className="content-rail no-scrollbar mt-8 overflow-x-auto overflow-y-hidden pb-20 md:mt-12 md:pb-[50px]">
        <div
          className="flex w-max min-w-full snap-x snap-mandatory justify-start gap-[30px] pt-5 md:gap-[50px]"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {teachers.map((teacher) => {
            const isFlipped = flippedCard === teacher.id;

            return (
              <button
                key={teacher.id}
                type="button"
                onClick={() => handleFlip(teacher.id)}
                className="min-w-[270px] max-w-[270px] snap-start text-left outline-none [perspective:1200px] md:min-w-[280px] md:max-w-[280px]"
              >
                <div
                  className={`relative h-[360px] w-full rounded-[32px] shadow-[0px_18px_50px_-16px_rgba(24,39,75,0.28)] transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[32px] bg-[#F3F4F6] [backface-visibility:hidden]">
                    <div className="absolute right-4 top-4 z-10 rounded-full bg-[linear-gradient(182.09deg,_#C38BFA_1.21%,_#A755F7_53.87%,_#8216EB_123.92%)] p-[14px] text-white">
                      <RotateCcw className="h-5 w-5" />
                    </div>

                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500"
                      style={{
                        objectPosition: teacher.imagePosition ?? "center top",
                        transform: `scale(${teacher.imageScale ?? 1})`,
                      }}
                    />

                    <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_47.12%,_rgba(0,0,0,0.71)_72.23%,_#000000_93.17%)] to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-center text-[17px] font-bold leading-tight text-white">
                        {teacher.name}
                      </h3>
                      <p className="mb-2 bg-[linear-gradient(182.09deg,_#C38BFA_1.21%,_#A755F7_53.87%,_#8216EB_123.92%)] bg-clip-text text-center text-sm font-bold text-transparent">
                        {teacher.field}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex rounded-[32px] bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] p-4 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="flex h-full flex-col">
                      <div className="mb-5 flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[20px] font-bold leading-tight">
                            {teacher.name}
                          </h3>
                          <p className="mt-1 text-sm font-semibold text-white/80">
                            {teacher.field}
                          </p>
                        </div>
                        <span className="rounded-full bg-white/15 p-3">
                          <RotateCcw className="h-4 w-4" />
                        </span>
                      </div>

                      <div className="flex items-center gap-2 rounded-[24px] bg-white/10 p-4 backdrop-blur-sm">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/70">
                          {t("title.experience")}
                        </p>
                        <p className="text-[16px] font-semibold">
                          {teacher.experience}
                        </p>
                      </div>

                      <div className="mt-2 flex-1 rounded-[24px] bg-white/10 p-4 backdrop-blur-sm">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/70">
                          {t("title.field")}
                        </p>
                        <p className="mt-2 text-[15px] leading-6 text-white/90">
                          {teacher.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
