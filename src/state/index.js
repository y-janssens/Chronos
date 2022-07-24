import { makeAutoObservable } from "mobx";
import axios from "axios";
class State {
  constructor() {
    this.init();
    this.events = [];
    this.selectedYear = 1164;
    this.availableYears = [];
    this.selectedItem = [];
    makeAutoObservable(this);
  }

  init() {
    axios({
      method: "GET",
      url: "https://www.marbrume.com/api/timeline/",
    }).then((result) => {
      this.setTimeline(result.data);
      this.setAvailableYears(result.data);
    });
  }

  setTimeline(data) {
    this.events = data;
  }

  setAvailableYears(years) {
    this.availableYears = [...new Set(years.map((q) => q.year))].slice(1);
  }

  setSelectedYear(year) {
    this.selectedYear = year;
  }

  setSelectedItem(item) {
    this.selectedItem = item;
  }
}

export const state = new State();
