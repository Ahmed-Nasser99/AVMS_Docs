import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomeCategories({ setDisplayScreen }) {
  const { t, i18n } = useTranslation();
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <button
          onClick={() => {
            setDisplayScreen("sectors");
          }}
          className="link-dark rounded"
        >
          {t("Sectors")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("buildings");
          }}
          className="link-dark rounded"
        >
          {t("Buildings")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("floors");
          }}
          className="link-dark rounded"
        >
          {t("Floors")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("units");
          }}
          className="link-dark rounded"
        >
          {t("Units")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("gates");
          }}
          className="link-dark rounded"
        >
          {t("Gates")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("devices");
          }}
          className="link-dark rounded"
        >
          {t("Devices")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("companies");
          }}
          className="link-dark rounded"
        >
          {t("Companies")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("deviceTypes");
          }}
          className="link-dark rounded"
        >
          {t("DeviceTypes")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("blacklist");
          }}
          className="link-dark rounded"
        >
          {t("Blacklist")}
        </button>
      </li>
    </ul>
  );
}
