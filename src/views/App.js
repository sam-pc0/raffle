import React, { lazy, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';

import './App.scss';
const WinnersList = lazy(() => import('../components/Winners/WinnersList'));
const Raffle = lazy(() => import('../components/Raffle/Raffle'));

const App = () => {
  const [winnersListData, setWinnersListData] = useState([]);

  useEffect(() => {
    let ganador1 = {
      workId: '151515',
      name: 'Juan Carlos Bodoque',
      reward: {
        name: 'Nvidia RTX 3090',
        image: 'https://picsum.photos/seed/picsum/300/150',
      },
    };

    let ganador2 = {
      workId: '152425',
      name: 'Tulio Tribiño',
      reward: {
        name: 'Viaje a las Bahamas',
        image: 'https://picsum.photos/300/150',
      },
    };


    setWinnersListData([ganador1, ganador2]);
  }, []);

  return (
    <Grid className="app" stackable  verticalAlign="middle" container centered columns={2}>
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
