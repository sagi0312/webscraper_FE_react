import { AppBar, Typography, Link, Box, Toolbar } from "@mui/material";
import React from "react";
import useStyles from "../../styles/styles";

function Header() {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ marginBottom: "70px" }}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
            <Link href="#" underline="none">
              <Typography variant="h5" className={classes.logo}>
                Web Scraper
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
