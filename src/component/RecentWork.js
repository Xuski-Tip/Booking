import React from "react";
import RecentWorkSlide from "./RecentWorkSlide";
import { useTranslation } from "react-i18next";
function RecentWork() {
  const { t } = useTranslation();
  return (
    <section className="p-b-0">
      <div className="container">
        <div className="heading-text heading-section">
          <h2>{t("Recent Work.work")}</h2>
          <span className="lead">
            Lorem ipsum dolor sit amet, coper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.
          </span>
        </div>
      </div>
      <RecentWorkSlide />
    </section>
  );
}
export default RecentWork;
