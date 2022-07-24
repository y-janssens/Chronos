import { useCallback, useState, useMemo } from "react";
import { observer } from "mobx-react";
import { state } from "../state";
import css from "../style/styles.module.css";
import ItemDetails from "./ItemDetails";
import ItemHover from "./ItemHover";

const EventItem = observer(({ year, item, index }) => {
  const { selectedItem } = state;
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("#0076b8");

  const selected = useMemo(() => {
    const selection = selectedItem.id === item.id;
    selection ? setColor("#008000") : setColor("#0076b8");
    return selection;
  }, [selectedItem, item]);

  const handleSelect = useCallback(() => {
    state.setSelectedItem(item);
  }, [item]);

  const focusItem = useMemo(() => {
    if (!selected) {
      return null;
    }

    return <ItemDetails item={item} />;
  }, [selectedItem]);

  const popupToggle = useMemo(() => {
    if (!show) {
      return null;
    }

    return <ItemHover item={item} color={color} />;
  }, [show, color]);

  return (
    <>
      <div
        onClick={handleSelect}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ backgroundColor: color }}
        className={
          index === 0
            ? `${css["timeline-slot"]} ${css["slot-first"]} ${css["year-item"]}`
            : index === year.length - 1
            ? `${css["timeline-slot"]} ${css["slot-last"]} ${css["year-item"]}`
            : `${css["timeline-slot"]} ${css["year-item"]}`
        }
      >
        {item.date}
        {popupToggle}
      </div>
      {focusItem}
    </>
  );
});
export default EventItem;
