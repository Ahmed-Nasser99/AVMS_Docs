import React from "react";
import { useTranslation } from "react-i18next";

export default function MainDocs({ JsonKey }) {
  const { t } = useTranslation();

  const renderStep = (step, index) => <li key={index}>{step}</li>;

  const renderSection = (sectionKey) => (
    <section className="mb-4 custom-section">
      <h4 className="custom-title">
        <span role="img" aria-label="information">
          &#x1F4D6;
        </span>
        {t(`${sectionKey}.description`)}
      </h4>
      <div className="m-3">
        <h3>{t(`${sectionKey}.stepsTitle`)}</h3>
        <ul>
          {t(`${sectionKey}.steps`, { returnObjects: true }).map(renderStep)}
        </ul>
      </div>
      <div className="m-3">
        <h3>{t(`${sectionKey}.importantNote`)}</h3>
        {typeof t(`${sectionKey}.noteDescription`, { returnObjects: true }) ===
        "object" ? (
          t(`${sectionKey}.noteDescription`, { returnObjects: true }).map(
            renderStep
          )
        ) : (
          <p>{t(`${sectionKey}.noteDescription`)}</p>
        )}
      </div>

      <div className="m-3">
        <h3>{t(`${sectionKey}.helpTitle`)}</h3>
        {typeof t(`${sectionKey}.helpDescription`, { returnObjects: true }) ===
        "object" ? (
          t(`${sectionKey}.helpDescription`, { returnObjects: true }).map(
            renderStep
          )
        ) : (
          <p>{t(`${sectionKey}.helpDescription`)}</p>
        )}
      </div>

      <p>
        <em>{t(`${sectionKey}.closingMessage`)}</em>
      </p>
    </section>
  );

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1 className="">{t(`visitorManagementSystem.${JsonKey}.title`)}</h1>
        <p className="lead">
          {t(`visitorManagementSystem.${JsonKey}.message`)}
        </p>
      </header>
      {renderSection(`visitorManagementSystem.${JsonKey}`)}
    </div>
  );
}
