import React from "react";
import RecentWorkSlide from "./RecentWorkSlide";
import { useTranslation } from "react-i18next";
function RecentWork(props) {
  const { t } = useTranslation();
  return (
    <section className="p-b-0 background-grey m-t-4">
      <div className="container">
       <div className="row">
           {/*<div className="heading-text heading-section">*/}
               <h2 className="arxivText">{t("Arxiv.arxiv")}</h2>
           {/*</div>*/}
       </div>
      </div>
      {/*<div className="container">*/}
      {/*    <div className="row">*/}
              <RecentWorkSlide his={props.histor}/>
          {/*</div>*/}
      {/*</div>*/}
    </section>
  );
}
export default RecentWork;
