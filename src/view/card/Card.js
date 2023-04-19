export default function Card({
  options,
  fontSize,
  backgroundColor,
  showBorder,
}) {
  const cardStyle = {
    margin: "50px",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: showBorder ? "2px" : "0",
    color: "black",

    backgroundColor: options.backgroundColor,
    width: "300px",
    height: "auto",
    padding: "10px",
    borderRadius: "10px",
    fontSize: options.fontSize,
    showBorder: options.showBorder,
  };
  if (options.showBorder === false) {
    cardStyle.borderWidth = "0";
  } else cardStyle.borderWidth = "2px";

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
}
