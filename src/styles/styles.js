import { makeStyles } from "@mui/styles";

const styles = () => {
  return {
    toolBar: {
      height: "10vh",
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor: "white",
    },
    logo: {
      color: "blue",
      cursor: "pointer",
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
