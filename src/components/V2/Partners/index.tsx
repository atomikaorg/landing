import IT_PARK from "/itpark-logo.png?url";
import CYBER_PARK from "/cyber.png?url";
import MINISTRY from "/ministry-logo.png?url";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}      
         className="mt-[39px]">

        <div className="flex items-center justify-center">
        <button className="text-[#787878] rounded-[14px] bg-[#FFFFFF] py-5 px-[28px] shadow-[0px_12px_42px_-4px_#18274B1F,0px_8px_18px_-6px_#18274B1F] cursor-pointer">Официальные партнеры</button>
        </div>
        <div className="flex items-center justify-between pt-[68px] ">
         <img src={CYBER_PARK} alt="" width={211} />
         <img src={IT_PARK} alt="" width={303} />
         <img src={MINISTRY} alt=""  width={367}/>
        </div>
    </motion.div>
  )
}
