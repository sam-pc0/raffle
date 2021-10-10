import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import "./Main.scss";

import WinnersList from "../Winners/WinnersList";
import Raffle from "../Raffle/Raffle";
import Participants from "../Participants/Participants";

const Main = () => {
  const [winners, setWinners] = useState([]);

  const handleWinnerAdd = (winner) => {
    setWinners((_winners) => [..._winners, winner]);
  };

  const handleStart = async () => {
    setWinners([]);
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
              <Raffle onWinnerAdd={handleWinnerAdd} onStart={handleStart} />
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

export default Main;
