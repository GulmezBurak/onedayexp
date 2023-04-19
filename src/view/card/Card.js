import { observer } from "mobx-react-lite";
import { useStore } from "../options_dialog/store";

const Card = () => {
  const { configStore } = useStore();
  console.log("configStore", configStore);
  const cardStyle = {
    margin: "50px",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: configStore.showBorder ? "2px" : "0",
    color: "black",

    backgroundColor: configStore.backgroundColor,
    width: "300px",
    height: "auto",
    padding: "10px",
    borderRadius: "10px",
    fontSize: configStore.fontSize,
    showBorder: configStore.showBorder,
  };
  if (configStore.showBorder === false) {
    cardStyle.borderWidth = "0";
  } else cardStyle.borderWidth = "2px";
  console.log("");
  return (
    <div style={cardStyle}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rutrum
        diam, sed sodales nisi. Aliquam posuere sodales sapien, ac pretium sem
        ultricies non. Fusce nec lectus at lacus scelerisque mollis ac vitae
        tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
        rutrum diam, sed sodales nisi. Aliquam posuere sodales sapien, ac
        pretium sem ultricies non. Fusce nec lectus at lacus scelerisque mollis
        ac vitae tellus.
      </p>
    </div>
  );
};

export default observer(Card);
