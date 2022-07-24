import { useMemo } from "react";
import { observer } from "mobx-react";
import { state } from "../state";
import css from "../pages/styles.module.css";
import EventItem from "./EventItem";

const SelectedYear = observer(() => {
  const { events, selectedYear } = state;

  const year = useMemo(() => {
    const items = [];
    events.map((item) => {
      if (item.name === 0) {
        items.push(item);
      } else if (item.year === selectedYear) {
        items.push(item);
      }
    });
    state.setSelectedItem(items[1]);
    return items;
  }, [events, selectedYear]);

  return (
    <div className={css["years-container"]}>
      <div className={css["year-items-container"]}>
        {year.map((item, index) => {
          return (
            <EventItem key={item.id} year={year} item={item} index={index} />
          );
        })}
      </div>
    </div>
  );
});

export default SelectedYear;
