import { useTranslation } from "react-i18next";
import team1 from "../../../public/team1.jpg"
import team2 from "../../../public/team2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

const Team = () => {
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

    const team = [
        {
            name: t("title.team_name1"),
            image: team1,
            description: t("title.team_desc1")
        },
        {
            name: t("title.team_name2"),
            image: team2,
            description: t("title.team_desc2")
        }
    ];

    const TeamCard = ({ member }: { member: typeof team[0] }) => (
        <div className="w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="relative">
                <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-[400px] object-cover object-[0_30%]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </div>
        </div>
    );
    
    return (
        <div className="px-4 md:px-8 py-12 bg-gray-50">
            <h2 className="text-center font-semibold text-[76px] max-md:text-[38px] mb-16">
                {t("title.team")}
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
                    {team.map((member, index) => (
                        <SwiperSlide key={index}>
                            <TeamCard member={member} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="grid grid-cols-2 gap-10 max-w-7xl mx-auto">
                    {team.map((member, index) => (
                        <div className="col-span-1" key={index}>
                            <TeamCard member={member} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Team;