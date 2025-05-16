import { useTranslation } from "react-i18next";
import teacher1 from "../../../public/teacher1.jpg"
import teacher2 from "../../../public/teacher2.jpg"
import teacher3 from "../../../public/teacher3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

const AboutTeachers = () => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const teachers = [
        {
            name: t("title.teacher_name1"),
            image: teacher2,
            description: t("title.teacher_desc1"),
            experience: t("title.teacher_exp1"),
            field: t("title.teacher_field1")
        },
        {
            name: t("title.teacher_name2"),
            image: teacher1,
            description: t("title.teacher_desc2"),
            experience: t("title.teacher_exp2"),
            field: t("title.teacher_field2")
        },
        {
            name: t("title.teacher_name3"),
            image: teacher3,
            description: t("title.teacher_desc3"),
            experience: t("title.teacher_exp3"),
            field: t("title.teacher_field3")
        }
    ]

    const TeacherCard = ({ teacher }: { teacher: typeof teachers[0] }) => (
        <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
            <div className="relative">
                <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-[300px] object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{teacher.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{teacher.description}</p>
                <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 italic"><strong>{t("title.experience")}</strong> {teacher.experience}</p>
                    <p className="text-gray-600 italic"><strong>{t("title.field")}</strong> {teacher.field}</p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="about-teachers py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-center font-semibold text-[76px] max-md:text-[38px] mb-16">
                    {t("title.about_teachers")}
                </h2>
                
                {isMobile ? (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className="w-full"
                    >
                        {teachers.map((teacher, index) => (
                            <SwiperSlide key={index}>
                                <TeacherCard teacher={teacher} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {teachers.map((teacher, index) => (
                            <div className="col-span-1" key={index}>
                                <TeacherCard teacher={teacher} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default AboutTeachers;