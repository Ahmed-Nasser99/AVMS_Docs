import React from "react";
import { useTranslation } from "react-i18next";

export default function MainDocs({ JsonKey }) {
  const { t } = useTranslation();

  const renderStep = (step, index) => <li key={index}>{step}</li>;

  const renderSection = (sectionKey) => (
    <section className="mb-4 custom-section">
      <h2 className="custom-title">
        <span role="img" aria-label="information">
          &#x1F4D6;
        </span>{" "}
        {/* Information Emoji */}
        {t(`${sectionKey}.title`)}
      </h2>
      <p>{t(`${sectionKey}.message`)}</p>
      <p>{t(`${sectionKey}.description`)}</p>
      <h3>{t(`${sectionKey}.stepsTitle`)}</h3>
      <ul>
        {t(`${sectionKey}.steps`, { returnObjects: true }).map(renderStep)}
      </ul>
      <strong>{t(`${sectionKey}.importantNote`)}</strong>
      <p>{t(`${sectionKey}.noteDescription`)}</p>
      <h4>{t(`${sectionKey}.helpTitle`)}</h4>
      <p>{t(`${sectionKey}.helpDescription`)}</p>
      <p>
        <em>{t(`${sectionKey}.closingMessage`)}</em>
      </p>
    </section>
  );

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1 className="display-4">
          {t("visitorManagementSystem.companyName")}
        </h1>
        <p className="lead">
          {t("visitorManagementSystem.welcomePage.message")}
        </p>
      </header>
      {renderSection(`visitorManagementSystem.${JsonKey}`)}
    </div>
  );
}
