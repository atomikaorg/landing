import { type KeyboardEvent, type MouseEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { RotateCcw, X } from "lucide-react";
import Button from "../Button";

type Teacher = {
  id: number;
  name: string;
  image: string;
  imagePosition?: string;
  imageScale?: number;
  field: string;
  description: string[];
  experience: string;
  teacherVideoUrl?: string;
};

export default function Teachers() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [activeVideoCard, setActiveVideoCard] = useState<number | null>(null);

  const teachers: Teacher[] = [
    {
      id: 1,
      name: t("version2.teacher_name1"),
      image: "/teacher2.jpg",
      imagePosition: "center top",
      field: t("version2.teacher_field1"),
      description: [t("title.teacher_desc1"), t("title.teacher_desc11")],
      experience: t("title.teacher_exp1"),
      teacherVideoUrl:"https://kinescope.io/6Wk9jMPPg6cE92Ej2bVDmQ"
    },
    {
      id: 2,
      name: t("version2.teacher_name2"),
      image: "/teacher1.jpg",
      imagePosition: "center top",
      field: t("version2.teacher_field2"),
      description: [t("title.teacher_desc2"), t("title.teacher_desc22")],
      experience: t("title.teacher_exp2"),
      teacherVideoUrl:"https://kinescope.io/375nKP39cbr1Jj94nHnVYZ"
    },
    {
      id: 3,
      name: t("version2.teacher_name3"),
      image: "/teacher3.jpg",
      imagePosition: "center 48%",
      field: t("version2.teacher_field3"),
      description: [t("title.teacher_desc3"), t("title.teacher_desc33")],
      experience: t("title.teacher_exp3"),
    },
    {
      id: 4,
      name: t("version2.teacher_name4"),
      image: "/teacher4.jpg",
      imagePosition: "center top",
      field: t("version2.teacher_field4"),
      description: [t("title.teacher_desc4"), t("title.teacher_desc44")],
      experience: t("title.teacher_exp4"),
      teacherVideoUrl:"https://kinescope.io/4DK98Dwrvu79pnaNRmot1P"
    },
    {
      id: 5,
      name: t("version2.teacher_name5"),
      image: "/teacher5.jpg",
      imagePosition: "center 50%",
      imageScale: 1.40,
      field: t("version2.teacher_field5"),
      description: [t("title.teacher_desc5"), t("title.teacher_desc55")],
      experience: t("title.teacher_exp5"),
      teacherVideoUrl: "https://kinescope.io/b8rBxc6ZZtLMdD5vKKkBge",
    },
  ];

  const handleFlip = (id: number) => {
    setActiveVideoCard((prev) => (prev === id ? null : prev));
    setFlippedCard((prev) => (prev === id ? null : id));
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, id: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleFlip(id);
    }
  };

  const getEmbedVideoUrl = (videoUrl?: string) => {
    if (!videoUrl) {
      return "";
    }

    return videoUrl.includes("/embed/") ? videoUrl : videoUrl.replace("kinescope.io/", "kinescope.io/embed/");
  };

  const handleOpenTeacherVideo = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const teacherCard = Number(event.currentTarget.dataset.teacherId);

    setActiveVideoCard(teacherCard);
  };

  const handleCloseTeacherVideo = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActiveVideoCard(null);
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
      className="overflow-hidden pt-[30px] md:pt-[50px]"
    >
      <div className="container relative">
        <div className="absolute left-[-280px] top-[-100px] hidden lg:block">
          <img src="/the.png" alt="" />
        </div>
        <Button text={"version2.teacher_button"} />

        <div className="mx-auto mt-[30px] md:mt-[40px]">
          <h2 className="text-left text-[36px] font-semibold font-gilroy leading-[1.1] text-[#111827] md:text-[48px]">
            {t("version2.teacher_title")}
          </h2>
          <p className="mt-[10px] text-left text-[22px] font-gilroy font-medium leading-[150%] text-[#6B7280] md:text-[28px]">
            {t("version2.teacher_description")}
          </p>
        </div>
      </div>

      <div className="content-rail no-scrollbar mt-[30px] overflow-x-auto overflow-y-hidden pb-[60px] md:mt-10 md:pb-[50px]">
        <div
          className="flex w-max min-w-full snap-x snap-mandatory justify-start gap-[30px] pt-5 md:gap-[50px]"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {teachers.map((teacher) => {
            const isFlipped = flippedCard === teacher.id;
            const isVideoOpen = activeVideoCard === teacher.id;

            return (
              <div
                key={teacher.id}
                role="button"
                tabIndex={0}
                onClick={() => handleFlip(teacher.id)}
                onKeyDown={(event) => handleCardKeyDown(event, teacher.id)}
                className="min-w-[270px] max-w-[270px] snap-start text-left outline-none [perspective:1200px] md:min-w-[280px] md:max-w-[280px]"
              >
                <div
                  className={`relative h-[360px] w-full cursor-pointer rounded-[32px] shadow-[0px_18px_50px_-16px_rgba(24,39,75,0.28)] transition-transform duration-700 [transform-style:preserve-3d] ${
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
                      <h3 className="text-center text-[16px] font-bold font-gilroy leading-tight text-white">
                        {teacher.name}
                      </h3>
                      <p className="mb-2 bg-[linear-gradient(182.09deg,_#C38BFA_1.21%,_#A755F7_53.87%,_#8216EB_123.92%)] bg-clip-text text-center text-sm font-bold text-transparent font-gilroy">
                        {teacher.field}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex rounded-[32px] bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)]  text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    {isVideoOpen ? (
                      <div className="relative h-full w-full " onClick={(event) => event.stopPropagation()}>
                        <button
                          type="button"
                          onClick={handleCloseTeacherVideo}
                          className="absolute right-5 top-5 z-10 rounded-full bg-white/95 p-2 text-[#A755F7] shadow-md"
                          aria-label="Close video"
                        >
                          <X className="h-4 w-4 cursor-pointer" />
                        </button>
                        <div className="h-full overflow-hidden rounded-[24px] bg-black">
                          <iframe
                            src={getEmbedVideoUrl(teacher.teacherVideoUrl)}
                            title={`${teacher.name} video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowFullScreen
                            className="h-full w-full border-0"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative flex h-full flex-col justify-end p-4">
                        <img className="absolute right-3 top-0 w-[100px]" src="/teachercard.png" alt="" />
                        <div className="flex flex-col gap-2 text-left">
                          <p className="text-left font-gilroy text-[13px] font-semibold uppercase tracking-[0.18em] text-[#FFFFFF]">
                            {t("title.experience")}
                          </p>
                          <li className="ml-4 text-left font-gilroy text-[16px] font-semibold">
                            {teacher.experience}
                          </li>
                        </div>

                        <div className="mt-2 ">
                          <p className="font-gilroy text-[13px] font-semibold uppercase tracking-[0.18em] text-[#FFFFFF]">
                            {t("title.field")}
                          </p>
                          <ul className="mt-2 ml-4 list-disc space-y-1">
                            {teacher.description.map((item) => (
                              <li key={item} className="font-gilroy text-[15px] leading-6 text-white/90">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          type="button"
                          data-teacher-id={teacher.id}
                          onClick={handleOpenTeacherVideo}
                          disabled={!teacher.teacherVideoUrl}
                          className="mt-5 flex cursor-pointer items-center justify-center gap-[6.5px] rounded-full bg-[#F4EBFE] py-[18px] text-center font-gilroy text-[#A755F7]"
                        >
                          <img src="/teacherplay.svg" alt="" />
                          {t("title.teacherbutton")}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
