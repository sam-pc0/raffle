import React, { lazy, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';

import { RaffleService } from '../helpers/services/raffle.service';

import './App.scss';
const WinnersList = lazy(() => import('../components/Winners/WinnersList'));
const Raffle = lazy(() => import('../components/Raffle/Raffle'));

const App = () => {
  const [winnersListData, setWinnersListData] = useState([]);

  useEffect(() => {
    RaffleService.getWinnersList()
      .then(setWinnersListData)
      .catch((error) => alert(error));
  }, []);

  return (
    <Grid
      className="app"
      stackable
      verticalAlign="middle"
      container
      centered
      columns={2}
    >
      <Grid.Column className="app__column" width={6}>
        <WinnersList data={winnersListData} />
      </Grid.Column>
      <Grid.Column className="app__column" width={10}>
        <Raffle />
      </Grid.Column>
    </Grid>
  );
};

export default App;
