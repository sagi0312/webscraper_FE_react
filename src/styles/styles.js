import { makeStyles } from "@mui/styles";
import Img from "./fcc_Woodstock.jpg"; // Import using relative path
const styles = () => {
  return {
    toolBar: {
      height: "10vh",
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundImage: `url(${Img})`,
    },
    logo: {
      color: "black",
      cursor: "pointer",
      position: "absolute",
      left: "33%",
      top: "80%",
      transform: "translate(-50%, -50%)",
      fontWeight: "600",
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
