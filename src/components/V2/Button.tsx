import { useTranslation } from "react-i18next"
type props={
  text :string
  type?:boolean
}
export default function Button({text ,type}:props) {
    const {t}=useTranslation()
  return (
    <div className="flex items-center justify-center">
          <button className={`font-gilroy rounded-[20px] text-[22px] md:text-[28px] leading-[150%] cursor-pointer bg-white px-[30px] md:px-10 py-[15px] md:py-5 ${type?"  bg-[linear-gradient(104.61deg,#D4A017_0%,#F5D060_100%)] bg-clip-text text-transparent":"text-[#787878]"}  shadow-[0px_12px_42px_-4px_#18274B1F,0px_8px_18px_-6px_#18274B1F]`}>
            {t(text)}
          </button>
     </div>
  )
}
