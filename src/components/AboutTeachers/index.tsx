import { useTranslation } from "react-i18next";
import teacher1 from "../../../public/teacher1.jpg"
import teacher2 from "../../../public/teacher2.jpg"
import teacher3 from "../../../public/teacher3.jpg"
import teacher4 from "../../../public/teacher4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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

    useEffect(() => {
        // Add custom styles for Swiper navigation buttons
        const style = document.createElement('style');
        style.textContent = `
            .swiper-button-next,
            .swiper-button-prev {
                color: #6B46C1 !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
            // }
            // .swiper-button-next:before,
            // .swiper-button-prev:before {
            //     content: "";
            //     background-color: #f2f2f2;
            //     width: 60px;
            //     height: 60px;
            //     border-radius: 50%;
            //     position: absolute;;
            //     z-index: -10;
            // }
            // .swiper-button-next:after,
            // .swiper-button-prev:after {
            //     font-size: 28px;
            // }
            // .swiper-button-next {
            //     right: 40px !important;
            // }
            // .swiper-button-prev {
            //     left: 40px !important;
            // }
            .swiper-button-next:hover,
            .swiper-button-prev:hover {
                color: #805AD5 !important;
            }
            .swiper-pagination-bullet-active {
                background: #6B46C1 !important;
            }
            @media (max-width: 768px) {
                .swiper-button-next {
                    right: 10px !important;
                }
                .swiper-button-prev {
                    left: 10px !important;
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const teachers = [
        {
            name: t("title.teacher_name3"),
            image: teacher3,
            description: t("title.teacher_desc3"),
            experience: t("title.teacher_exp3"),
            field: t("title.teacher_field3")
        },
        {
            name: t("title.teacher_name1"),
            image: teacher2,
            description: t("title.teacher_desc1"),
            experience: t("title.teacher_exp1"),
            field: t("title.teacher_field1"),
            major: t("title.biology")
        },
        {
            name: t("title.teacher_name2"),
            image: teacher1,
            description: t("title.teacher_desc2"),
            experience: t("title.teacher_exp2"),
            field: t("title.teacher_field2"),
            major: t("title.biology")
        },
        {
            name: t("title.teacher_name4"),
            image: teacher4,
            description: t("title.teacher_desc4"),
            experience: t("title.teacher_exp4"),
            field: t("title.teacher_field4"),
            major: t("title.chemistry")
        }
    ]

    const TeacherCard = ({ teacher }: { teacher: typeof teachers[0] }) => (
        <div className="w-full h-[600px] bg-white rounded-xl overflow-hidden duration-300 transform hover:-translate-y-1 flex flex-col">
            <div className="relative h-[300px]">
                <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{teacher.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{teacher.description}</p>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                    {teacher.major && (
                        <p className="text-gray-600"><strong>{t("title.major")}</strong> {teacher.major}</p>
                    )}
                    <p className="text-gray-600"><strong>{t("title.experience")}</strong> {teacher.experience}</p>
                    <p className="text-gray-600 h-[50px]"><strong>{t("title.field")}</strong> {teacher.field}</p>
                    {!teacher.major && (
                        <p className="invisible" style={{height: '20px'}}>-</p>
                    )}
                </div>
            </div>
        </div>
    );

    const swiperConfig = {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 20,
        slidesPerView: isMobile ? 1 : 3,
        navigation: true,
        pagination: { clickable: true },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        className: "relative px-12"
    };

    return (
        <section className="about-teachers py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-center font-semibold text-[76px] max-md:text-[38px] mb-16">
                    {t("title.about_teachers")}
                </h2>
                
                <Swiper {...swiperConfig} className="w-full">
                    {teachers.map((teacher, index) => (
                        <SwiperSlide key={index}>
                            <TeacherCard teacher={teacher} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default AboutTeachers;