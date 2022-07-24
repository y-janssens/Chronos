import { useState, useCallback } from "react";
import { observer } from "mobx-react";
import { state } from "../state";
import css from "../style/styles.module.css";

const YearSelector = observer(() => {
  const { availableYears } = state;
  const [selected, setSelected] = useState(1164);

  const handleSelect = useCallback(
    (item) => {
      setSelected(item);
      state.setSelectedYear(item);
      state.setSelectedItem([]);
    },
    [selected]
  );

  return (
    <div className={css["slots-container"]}>
      {availableYears.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleSelect(item)}
            style={
              selected === item
                ? { backgroundColor: "#008000" }
                : { backgroundColor: "#0076b8" }
            }
            className={
              index === 0
                ? `${css["timeline-slot"]} ${css["slot-first"]}`
                : index === availableYears.length - 1
                ? `${css["timeline-slot"]} ${css["slot-last"]}`
                : css["timeline-slot"]
            }
          >
            {item}
          </div>
        );
      })}
    </div>
  );
});
export default YearSelector;
