import { useMemo } from "react";
import css from "../pages/styles.module.css";

function ItemDetails({ item }) {
  const date = useMemo(() => {
    if (item.name === 0) {
      return item.date;
    } else {
      return `${item.date} ${item.year}`;
    }
  }, [item]);

  const details = useMemo(() => {
    if (item.details.length < 1) {
      return;
    }
    return (
      <div className={css["event-hover-content-details"]}>
        <p>Détails supplémentaires</p>
        {item.details}
      </div>
    );
  }, [item]);

  const consequences = useMemo(() => {
    if (item.consequences.length < 1) {
      return;
    }
    return (
      <div className={css["event-hover-content-details"]}>
        <p>Conséquences</p>
        {item.consequences}
      </div>
    );
  }, [item]);

  const additional = useMemo(() => {}, [item, details, consequences]);

  return (
    <div className={css["event-hover"]}>
      <div className={`${css["event-hover-title"]} ${css["date"]}`}>{date}</div>
      <div className={css["event-hover-title"]}>{item.title}</div>
      <div className={css["event-hover-content"]}>
        <div className={css["event-hover-content-details"]}>
          {item.description}
        </div>
        {details}
        {consequences}
      </div>
    </div>
  );
}

export default ItemDetails;
