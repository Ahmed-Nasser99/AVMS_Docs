// WelcomePage.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1 className="display-4">{t("welcomePage.header.title")}</h1>
        <p className="lead">{t("welcomePage.header.subtitle")}</p>
      </header>

      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <section className="mb-4">
            <h2>{t("welcomePage.sections.introduction.title")}</h2>
            <p>{t("welcomePage.sections.introduction.content")}</p>
          </section>

          <section className="mb-4">
            <h2>{t("welcomePage.sections.gettingStarted.title")}</h2>
            <div className="list-group">
              {t("welcomePage.sections.gettingStarted.subsections", {
                returnObjects: true,
              }).map((subsection, index) => (
                <a
                  key={index}
                  href={`#${subsection}`}
                  className="list-group-item list-group-item-action"
                >
                  {t(`welcomePage.sections.${subsection}.title`)}
                </a>
              ))}
            </div>
          </section>

          <section className="mb-4">
            <h2>{t("welcomePage.sections.features.title")}</h2>
            <p>{t("welcomePage.sections.features.content")}</p>
          </section>

          <section className="mb-4">
            <h2>{t("welcomePage.sections.userRoles.title")}</h2>
            <div className="row">
              {Object.keys(
                t("welcomePage.sections.userRoles.roles", {
                  returnObjects: true,
                })
              ).map((role, index) => (
                <div key={index} className="col-md-4">
                  <h3>
                    {t(`welcomePage.sections.userRoles.roles.${role}.title`)}
                  </h3>
                  <p>
                    {t(`welcomePage.sections.userRoles.roles.${role}.content`)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-4">
            <h2>{t("welcomePage.sections.usingAVMS.title")}</h2>
            <div className="list-group">
              {t("welcomePage.sections.usingAVMS.subsections", {
                returnObjects: true,
              }).map((subsection, index) => (
                <a
                  key={index}
                  href={`#${subsection}`}
                  className="list-group-item list-group-item-action"
                >
                  {t(`welcomePage.sections.${subsection}.title`)}
                </a>
              ))}
            </div>
          </section>

          <section className="mb-4">
            <h2>{t("welcomePage.sections.faqs.title")}</h2>
            <p>{t("welcomePage.sections.faqs.content")}</p>
          </section>

          <section className="mb-4">
            <h2>{t("welcomePage.sections.supportAndContact.title")}</h2>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h3>
                  {t(
                    "welcomePage.sections.supportAndContact.subsections.gettingHelp.title"
                  )}
                </h3>
                <p>
                  {t(
                    "welcomePage.sections.supportAndContact.subsections.gettingHelp.content"
                  )}
                </p>

                <h3>
                  {t(
                    "welcomePage.sections.supportAndContact.subsections.reportingIssues.title"
                  )}
                </h3>
                <p>
                  {t(
                    "welcomePage.sections.supportAndContact.subsections.reportingIssues.content"
                  )}
                </p>

                <h3>
                  {t(
                    "welcomePage.sections.supportAndContact.subsections.contactInformation.title"
                  )}
                </h3>
                <p>
                  {t(
                    "welcomePage.sections.supportAndContact.subsections.contactInformation.content"
                  )}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
