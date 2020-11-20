import React, { useState, useEffect } from 'react';
import { Card, Image, Grid, Header } from 'semantic-ui-react';

const WinnerItem = ({ data }) => {
  const [winner, setWinner] = useState(data);

  useEffect(() => {
    if (data !== undefined) {
      setWinner(data);
    }
  }, [data]);

  return (
    <Card fluid>
      <Grid padded={false} style={{ padding: '0.5em' }}>
        <Grid.Column width={7}>
          <Image size="small" src={winner.reward.image} />
        </Grid.Column>
        <Grid.Column width={9}>
          <Header style={{ marginBottom: '0.1em' }} as="h3">
            {winner.name}
          </Header>
          <p style={{ marginBottom: '0.1em', color: 'gray' }}>
            {winner.workId}
          </p>
          <p> {winner.reward.name} </p>
        </Grid.Column>
      </Grid>
    </Card>
  );
};

export default WinnerItem;
