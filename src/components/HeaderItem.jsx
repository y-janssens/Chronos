import React from "react";
import css from "../pages/styles.module.css";

function HeaderItem({ name }) {
  return <div className={css["timeline-slot"]}>{name}</div>;
}

export default HeaderItem;
