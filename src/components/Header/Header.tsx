import React from "react";
import { observer } from "mobx-react-lite";
import { AppBar, Typography } from "@material-ui/core";

const Header: React.FC = observer(() => {
  // Renders
  return (
    <AppBar position="static" elevation={0} color="default">
      <Typography variant="h2">Header</Typography>
    </AppBar>
  );
});

export default Header;
