import { useTranslation } from "react-i18next"
import Button from "../Button"
import {motion, useInView} from "framer-motion"
import { useRef } from "react";
export default function Feedbacks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const {t}=useTranslation()
    const links=[
        {
          src:"https://www.youtube.com/embed/Mqzw_NY6G7A"
        },
          {
          src:"https://www.youtube.com/embed/IcCoCf42s98"
        },
          {
          src:"https://www.youtube.com/embed/GCXMOW2ECxk"
        },
          {
          src:"https://www.youtube.com/embed/kZv0O3OJytg"
        },
          {
          src:"https://www.youtube.com/embed/il7AWXvf-4w"
        },
          {
          src:"https://www.youtube.com/embed/PyY7QTY2SL8"
        },
    ]

  return (
    <div id="privileges" className="md:pt-[150px]">
        <div className="container relative">
            <div className="hidden lg:block absolute right-[-200px] top-[-80px]"><img src="/message.png" alt="" /></div>
            <Button text={"version2.feedbacks.button"}/>
            <h2 className="text-[#1A1A2E] text-[32px] md:text-[48px] font-medium mt-10 mb-5 text-center">{t("version2.feedbacks.title")}</h2>
            <p className="text-[#6B7280] text-[15px] md:text-[24px] text-center ">{t("version2.feedbacks.description")}</p>

        </div>
      <div className="flex items-center gap-5">

        {/* <div className="p-7 bg-[#FFFFFF] rounded-[40px]">
            <img src="/stars.png" alt="" />
            <p>«Дочка готовится к поступлению в медвуз. Раньше ходила к репетитору за 1.5 млн, теперь учится на Atomika. Результаты даже лучше стали!»</p>

            <p>Нилуфар Р.</p>
            <p>Мама ученицы</p>
        </div> */}
      
       </div>
        
        <motion.div 
        
             ref={ref}
       initial="hidden"
       animate={isInView ? "visible" : "hidden"}
       variants={{
       hidden: { y: 100, opacity: 0 },
       visible: { y: 0, opacity: 1 }
       }}
       transition={{ duration: 0.8, delay: 0.1 }}>

        <div className="container mt-[40px]">
            <h2 className="text-[#1A1A2E] text-[32px] mb-[10px] md:mb-5 text-center">🎥{t("version2.feedbacks.videofeedback")}</h2>
            <p className="text-[#6B7280] text-[24px] text-center">{t("version2.feedbacks.description")}</p>
        </div>
            <div className="flex items-center gap-[30px] md:gap-[50px] justify-between px-4 md:px-20 overflow-scroll no-scrollbar mt-[30px] md:mt-[40px] ">
                {links.map(({src})=>{
                  return ( 
                    <iframe
                    key={src}
                      src={src}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-[30px] w-[300px] md:w-[400px] h-[500px] md:h-[650px]">
                    </iframe>
                )})}
            </div>
        </motion.div>
    </div>
  )
}
