import { useTranslation } from "react-i18next"
import Button from "../Button"
export default function Plans() {
    const {t}=useTranslation()
  return (
    <div className="container">
        <Button text={"version2.plans.plan"}/>
        <h2>{t("version2.plans.title")}</h2>
        <p>{t("version2.plans.description")}</p>

        <div>

        </div>
      <img src="/lope.png" alt="" />
    </div>
  )
}
