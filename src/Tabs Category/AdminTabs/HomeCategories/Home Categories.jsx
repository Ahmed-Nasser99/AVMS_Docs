import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomeCategories({ setDisplayScreen, DisplayScreen }) {
  const { t, i18n } = useTranslation();
  return (
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <button
          onClick={() => {
            setDisplayScreen("sectors");
          }}
          className={
            DisplayScreen === "sectors"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Sectors")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("buildings");
          }}
          className={
            DisplayScreen === "buildings"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Buildings")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("floors");
          }}
          className={
            DisplayScreen === "floors"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Floors")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("units");
          }}
          className={
            DisplayScreen === "units"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Units")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("gates");
          }}
          className={
            DisplayScreen === "gates"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Gates")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("devices");
          }}
          className={
            DisplayScreen === "devices"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Devices")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("companies");
          }}
          className={
            DisplayScreen === "companies"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Companies")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("deviceTypes");
          }}
          className={
            DisplayScreen === "deviceTypes"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("DeviceTypes")}
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setDisplayScreen("blacklist");
          }}
          className={
            DisplayScreen === "blacklist"
              ? "link-dark rounded active"
              : "link-dark rounded"
          }
        >
          {t("Blacklist")}
        </button>
      </li>
    </ul>
  );
}
