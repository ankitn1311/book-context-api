import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import NewBook from "./components/NewBook";
import BookContextProvider from "./contexts/BookContext";

import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(20),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="sm" className={classes.margin}>
        <BookContextProvider>
          <CssBaseline />
          <Paper elevation={3}>
            <Grid container justify="center" spacing={5}>
              <Grid item sm={12} align="center">
                <Navbar />
                <BookList />
                <NewBook />
              </Grid>
            </Grid>
          </Paper>
        </BookContextProvider>
      </Container>
    </div>
  );
};

export default App;
