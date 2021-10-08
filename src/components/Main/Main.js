import React, { lazy, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import { RaffleService } from "../../helpers/services/raffle.service";

import "./Main.scss";

const WinnersList = lazy(() => import("../Winners/WinnersList"));
const Raffle = lazy(() => import("../Raffle/Raffle"));
const Participants = lazy(() => import("../Participants/Participants"));

const App = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    RaffleService.getWinners()
      .then(setWinners)
      .catch((error) => alert(error));
  }, []);

  const handleWinnerAdd = (winnerElement) => {
    setWinners((prevItems) => [...prevItems, winnerElement]);
  };

  return (
    <main className="app">
      <Grid
        className="app__grid"
        stackable
        verticalAlign="middle"
        container
        centered
        columns={2}
      >
        <Grid.Column className="app__column" width={6}>
          <WinnersList data={winners} />
        </Grid.Column>
        <Grid.Column className="app__column" width={10}>
          <Switch>
            <Route exact path="/">
              <Raffle onWinnerAdd={handleWinnerAdd} />
            </Route>
            <Route exact path="/participants">
              <Participants />
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
    </main>
  );
};

export default App;
