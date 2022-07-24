import { useMemo, useState, useCallback } from "react";
import { observer } from "mobx-react";
import { state } from "../state";
import css from "../pages/styles.module.css";

const EventItem = observer(({ year, item, index }) => {
  const { selectedItem } = state;

  const handleSelect = useCallback(() => {
    state.setSelectedItem(item);
  }, [item]);

  return (
    <div
      onClick={handleSelect}
      style={
        selectedItem.id === item.id
          ? { backgroundColor: "#008000" }
          : { backgroundColor: "#0076b8" }
      }
      className={
        index === 0
          ? `${css["timeline-slot"]} ${css["slot-first"]} ${css["year-item"]}`
          : index === year.length - 1
          ? `${css["timeline-slot"]} ${css["slot-last"]} ${css["year-item"]}`
          : `${css["timeline-slot"]} ${css["year-item"]}`
      }
    >
      {item.date}
    </div>
  );
});
export default EventItem;
