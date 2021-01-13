import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Container, makeStyles, Theme } from "@material-ui/core";
import { observer } from "mobx-react-lite";

import Loader from "../components/UI/Loader";
import { useStores } from "../hooks";

const MainScreen: React.FC = observer(() => {
  const classes = useStyles();

  // Effects
  //   useEffect(() => {
  //     store.cleareNewsList();
  //     store.getNewsItems("page=1&limit=7");
  //   }, [store]);

  return (
    <Box pt={6} pb={10}>
      <Container maxWidth="xl">
        <Box mb={{ lg: 10 }}>MAIN SCREEN</Box>
      </Container>
    </Box>
  );
});

const useStyles = makeStyles((theme: Theme) => ({}));

export default MainScreen;
