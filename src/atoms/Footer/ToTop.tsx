import ScrollToTop from "react-scroll-to-top";

function ToTop() {
  return (
    <ScrollToTop
      style={{
        borderRadius: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       padding:"11px",
       backgroundColor:"#6f2eb7"
      }}
      color="white"
      smooth={true}
      className="z-50"
    />
  );
}

export default ToTop;
