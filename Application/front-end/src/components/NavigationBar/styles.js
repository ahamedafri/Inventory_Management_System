import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
  children: {
    padding: "30px",
    backgroundColor: "#F5F5F5",
    height: "1400px",
    width: "100%",
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    textDecoration: "none",
    height: "20px",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(15),
    "&:hover": {
      color: "black",
    },
  },
}));
