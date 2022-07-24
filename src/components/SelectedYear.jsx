import { useMemo, useState, useCallback } from "react";
import { observer } from "mobx-react";
import { state } from "../state";
import css from "../pages/styles.module.css";
import EventItem from "./EventItem";

const SelectedYear = observer(() => {
  const { events, selectedYear } = state;
  const [selected, setSelected] = useState();

  const year = useMemo(() => {
    const items = [];
    events.map((item) => {
      if (item.year === selectedYear) {
        items.push(item);
      }
    });
    return items;
  }, [events, selectedYear]);

  //   const handleSelect = useCallback((item) => {
  //     console.log(item);
  //   }, []);

  //   const handleSelect = useCallback(
  //     (e) => {
  //       console.log(e);
  //     },
  //     [selected]
  //   );

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
