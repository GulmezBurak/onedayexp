import { makeAutoObservable } from "mobx";

const configStore = makeAutoObservable({
  backgroundColor: "#2311",
  fontSize: 12,
  showBorder: false,
  customStyleActive: false,
});

export default configStore;
