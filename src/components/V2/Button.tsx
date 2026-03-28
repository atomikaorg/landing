import { useTranslation } from "react-i18next"

export default function Button({text}:any) {
    const {t}=useTranslation()
  return (
    <div className="flex items-center justify-center">
          <button className="font-gilroy rounded-[14px] cursor-pointer bg-white px-7 py-5 text-[#787878] shadow-[0px_12px_42px_-4px_#18274B1F,0px_8px_18px_-6px_#18274B1F]">
            {t(text)}
          </button>
     </div>
  )
}
