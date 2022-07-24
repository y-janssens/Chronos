import { useMemo } from "react";
import css from "../style/styles.module.css";

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
      return null;
    }
    return (
      <div className={css["event-hover-content-details"]}>
        <div className={css["event-hover-title"]}>Détails supplémentaires</div>
        {item.details}
      </div>
    );
  }, [item]);

  const consequences = useMemo(() => {
    if (item.consequences.length < 1) {
      return null;
    }
    return (
      <div className={css["event-hover-content-details"]}>
        <div className={css["event-hover-title"]}>Conséquences</div>
        {item.consequences}
      </div>
    );
  }, [item]);

  const links = useMemo(() => {
    if (item.links.length < 1) {
      return null;
    }
    return (
      <div className={css["event-hover-content-details"]}>
        <div className={css["event-hover-title"]}>Liens utiles</div>
        <ul>
          {item.links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.text}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }, [item]);

  return (
    <div className={css["event-hover"]}>
      <div className={`${css["event-hover-title"]} ${css["date"]}`}>{date}</div>
      <div className={css["event-hover-title"]}>{`◈ ${item.title} ◈`}</div>
      <div className={css["event-hover-content"]}>
        <div className={css["event-hover-content-details"]}>
          {item.description}
        </div>
        {details}
        {consequences}
        {links}
      </div>
    </div>
  );
}

export default ItemDetails;
