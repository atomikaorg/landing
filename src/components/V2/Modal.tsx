import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { toast } from "@/components/ui/use-toast";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  openMode?: "button" | "scroll";
};

const GOOGLE_SHEETS_URL =
  "https://docs.google.com/spreadsheets/d/105ETzpRK0h3of9mWc8vqZbHa724ycklIuxvppx9aNxM/edit?gid=0#gid=0r";

const formatDisplayPhoneNumber = (value: string, isDeleting = false) => {
  let normalized = value.replace(/^\+998\+99/, "+998").replace(/^\+99\+99/, "+99");

  if (!normalized.startsWith("+998")) {
    normalized = "+998" + normalized.replace(/^\+99/, "");
  }

  

  if (normalized === "+998") {
    return normalized;
  }

  if (isDeleting) {
    if (normalized.length <= 4) {
      return "+998";
    }

    return normalized.replace(/\(\)|-+/g, "");
  }

  const digits = normalized.slice(4).replace(/\D/g, "").slice(0, 9);

  if (!digits.length) {
    return "+998";
  }

  let formatted = "+998";

  if (digits.length >= 1) {
    formatted += `(${digits.slice(0, 2)}`;
  }

  if (digits.length >= 2) {
    formatted += ")";
  }

  if (digits.length > 2) {
    formatted += digits.slice(2, 5);
  }

  if (digits.length > 5) {
    formatted += `-${digits.slice(5, 7)}`;
  }

  if (digits.length > 7) {
    formatted += `-${digits.slice(7, 9)}`;
  }

  return formatted;
};

const extractPhoneDigits = (phone: string) =>
  phone.replace(/^\+998/, "").replace(/\D/g, "").slice(0, 9);

export default function Modal({
  isOpen,
  onClose,
  source = "unknown",
  openMode = "button",
}: ModalProps) {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const overlayTransition =
    openMode === "button"
      ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
      : { duration: 0.3, ease: "easeOut" };

  const panelVariants =
    openMode === "button"
      ? {
          initial: { opacity: 0, scale: 0.9, y: 28 },
          animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          },
          exit: {
            opacity: 0,
            scale: 0.96,
            y: 16,
            transition: { duration: 0.25, ease: "easeInOut" },
          },
        }
      : {
          initial: { opacity: 0, scale: 0.97, y: 14 },
          animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.38, ease: "easeOut" },
          },
          exit: {
            opacity: 0,
            scale: 0.985,
            y: 8,
            transition: { duration: 0.2, ease: "easeInOut" },
          },
        };

  const handleSubmit = async () => {
    const phoneDigits = extractPhoneDigits(phone);

    if (phoneDigits.length !== 9) {
      toast({
        description: t("version2.modal.validation"),
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const params = new URLSearchParams(window.location.search);
      const formData = new URLSearchParams();

      formData.append("name", `Landing modal (${source})`);
      formData.append("phone", phoneDigits);
      formData.append("utm_source", params.get("utm_source") || "");
      formData.append("utm_medium", params.get("utm_medium") || "");
      formData.append("utm_campaign", params.get("utm_campaign") || "");
      formData.append("utm_content", params.get("utm_content") || "");
      formData.append("utm_referrer", document.referrer || "");

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
        mode: "cors",
        credentials: "omit",
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast({
        description: t("version2.modal.success"),
      });
      onClose();
    } catch (error) {
      console.error(error);
      toast({
        description: t("version2.modal.error"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#14091F]/70 px-4 py-6 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}
        >
          <motion.div
            className="relative w-full overflow-hidden rounded-[34px] bg-[linear-gradient(182.09deg,_#C38BFA_1.21%,_#A755F7_53.87%,_#8216EB_123.92%)] shadow-[24px_56px_82.2px_0px_#9484A3CC] md:max-w-[1400px] md:rounded-[50px]"
            onClick={(event) => event.stopPropagation()}
            initial={panelVariants.initial}
            animate={panelVariants.animate}
            exit={panelVariants.exit}
          >
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute cursor-pointer right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#FFFFFF]/20 text-white md:right-[30px] md:top-[30px]"
        >
          <X size={20} />
        </button>

        <div className="grid items-center gap-0 md:gap-8 md:grid-cols-[0.92fr_1.08fr] pb-[34px] ">
          <div className="relative hidden h-full  left-0 items-center md:flex">
            <img
              src="/modal.png"
              alt="Gift"
              className="relative z-10 w-auto object-contain drop-shadow-[0px_24px_48px_rgba(45,0,84,0.5)]"
            />
          </div>
          <div className="relative h-full md:hidden">

          <img 
              className="absolute right-6 top-0 z-10 "
            src="/modalmobile.png" alt="" />
          </div>
            

          <div className="relative z-10 px-4  pt-22 md:px-10 md:pb-10 md:pr-14 md:pt-12">
            <div className="max-w-[560px]">
              <h2 className=" font-gilroy text-[48px] font-semibold leading-[110%] text-white md:max-w-[470px] md:text-[64px]">
                {t("version2.modal.title")} <span className="bg-[linear-gradient(111.21deg,_#F8DC71_-4.37%,_#F09C38_68.59%)] bg-clip-text text-transparent">{t("version2.modal.titlefree")}</span>{t("version2.modal.title2")}
              </h2>
              <p className="font-sfpro mt-3  text-[16px] leading-5 text-white/85 md:mt-4 md:max-w-[470px] md:text-[24px] md:leading-6">
                {t("version2.modal.description")}
              </p>

              <div className="mt-4 flex flex-col md:flex-wrap  gap-x-3 gap-y-2 text-white/80 md:mt-8 leading-[150%] md:gap-5">
              {t("version2.modal.features",{returnObjects:true}).map((feature) => (
                <div
                  key={feature}
                  className="rounded-full flex items-center gap-1 text-[16px] font-gilroy font-medium leading-[150%] whitespace-nowrap md:gap-3 "
                >
                <img src="/check.svg" alt="" className="w-4 md:w-auto" />  {feature}
                </div>
              ))}

              </div>

              <div className="mt-[36px] space-y-3 md:mt-8 md:space-y-4">
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => {
                    const isDeleting = event.target.value.length < phone.length;
                    setPhone(formatDisplayPhoneNumber(event.target.value, isDeleting));
                  }}
                  placeholder={t("version2.modal.phonePlaceholder")}
                  className=" w-full rounded-full border border-white/70 bg-white/8 px-5 py-5 text-[24px] font-gilroy text-white outline-none placeholder:text-white/55 focus:border-white/70"
                />

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-white py-5 font-gilroy text-[24px] font-bold disabled:cursor-not-allowed disabled:opacity-70 "
                >
                  <span className="bg-[linear-gradient(182.09deg,#C38BFA_1.21%,#A755F7_53.87%,#8216EB_123.92%)] bg-clip-text text-transparent">
                    {isSubmitting ? "..." : t("version2.modal.submit")}
                  </span>
                </button>

                <div className="text-center text-[20px] font-sfpro font-medium text-[#F2F2F2] md:text-[24px]">{t("version2.modal.or")}</div>

                <a
                  href="tel:+998555111133"
                  className="flex  w-full items-center justify-center rounded-full border border-white/70 py-5 text-center font-gilroy text-[24px] font-bold text-white  md:border-white/40"
                >
                  {t("version2.modal.secondary")}
                </a>
              </div>
            </div>
          </div>
        </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
