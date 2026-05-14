import { useTranslation } from "react-i18next"

const Teacher1 =()=>{

    const {t}=useTranslation()
    const features = t("national-certificate.teacher1", { returnObjects: true }) || [];

    return (
        <div  className="bg-[linear-gradient(111.38deg,_#1A1205_0%,_#2D1F08_50%,_#1A1408_100%)] relative overflow-x-clip">
            <div className="container py-[100px]">

            <div className="max-w-[655px] relative z-[199]">
                <h2 className="font-gilroy text-[#FFFFFF] text-[44px] md:text-[64px] font-bold leading-[110%] mb-[50px]">{t("version2.teacher_name5")}</h2>
                <p className="text-[#FFFFFF99] text-[22px] md:text-[28px] leading-[150%] font-gilroy font-medium">{t("national-certificate.teacher1_desc")}</p>
          <div className="flex flex-col gap-4 my-[50px] ">
                  {Array.isArray(features) && features.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 text-[#FFFFFFCC] text-[16px]">
                      <img src="/check.svg" className="w-5 h-5" alt="check" />
                      <p className="font-gilroy text-[#FFFFFFCC] font-semibold text-[16px]  md:text-[20px]">{item}</p>
                   </div>
                 ))}
              </div>
           <div className="flex flex-col  gap-3  w-full">
                 <button
                   className="w-full whitespace-nowrap cursor-pointer text-center text-[24px] font-gilroy  text-[#1A1A2E] bg-[linear-gradient(104.61deg,_#D4A017_0%,_#F5D060_100%)] shadow-[0px_4px_20px_0px_#D4A01766] px-10 py-5 rounded-full font-bold"
                 >
                   {t("national-certificate.teacher_lesson")}
                 </button>
  
                 <button
                   type="button"
                   className="w-full md:w-auto max-[430px]:px-3 cursor-pointer border  text-[24px] font-gilroy border-[#D4A01780] text-[#F5D060] px-10 py-[18px] rounded-full"
                 >
                   {t("national-certificate.teacher_about")}
                 </button>
               </div>
            </div>
            
            </div>
                 <img className="absolute right-0 bottom-0 max-w-[1318px] max-h-[1200px] object-contain" src="/husniddin.png" alt="" />
            
        
        </div>
    )
}

export default Teacher1