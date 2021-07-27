import React from "react";
import RecentWorkSlide from "./RecentWorkSlide";
import { useTranslation } from "react-i18next";
function RecentWork() {
  const { t } = useTranslation();
  return (
    <section className="p-b-0">
      <div className="container">
        <div className="heading-text heading-section">
          <h2>{t("Arxiv.arxiv")}</h2>
        </div>
      </div>
      <RecentWorkSlide />
    </section>
  );
}
export default RecentWork;
