import { observer } from "mobx-react";
import Header from "../components/Header";
import css from "./styles.module.css";
import SelectedYear from "../components/SelectedYear";

const Timeline = observer(() => {
  //   console.log(events);
  return (
    <div className={css["timeline-container"]}>
      <div className={css["timeline-header"]}>Chronologie Générale</div>
      <Header />
      <SelectedYear />
    </div>
  );
});
export default Timeline;
