import IT_PARK from "/itpark-logo.png?url";
import CYBER_PARK from "/cyber.png?url";
import MINISTRY from "/ministry-logo.png?url";
import MINISTRYRU from "/partnerru.png?url";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import Button from "../Button";
import i18n from "@/localization";
import { Link } from "react-router-dom";
// import {Link} from ""

export default function Partners() {
  const {t}=useTranslation()
  const ref =useRef(null)
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={{
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }}
  transition={{ duration: 0.8, delay: 0.1 }}
      className="w-full max-w-[700px] px-[20px] mx-auto py-[30px] md:pt-[50px]"
    >
      <div className="">
      <Button text={"version2.info.partners"}/>

      <div className=" mt-[30px] md:mt-[68px] mb-[79px]">
        <div
          className="
            flex items-center justify-between
          "
        >
          <Link to={"https://cyberpark.uz/residents/194-ooo-atomika-1"} className="flex justify-center flex-shrink-0">
            <img src={CYBER_PARK} className="w-[116px] md:w-[211px]" />
          </Link>
          {i18n.language === "uz" ? (
            <Link to={"https://digital.uz/uz"} className="flex justify-center flex-shrink-0">
              <img src={MINISTRY} className="w-[202px] md:w-[367px]" />
            </Link>
          ) : (
            <Link to={"https://digital.uz/en"} className="flex justify-center flex-shrink-0">
              <img src={MINISTRYRU} className="w-[202px] md:w-[367px]" />
            </Link>
          )}

        </div>
      </div>
      </div>
    </motion.div>
  );
}
