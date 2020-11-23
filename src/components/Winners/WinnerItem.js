import React, { useState, useEffect } from 'react';
import { Card, Image, Grid, Header } from 'semantic-ui-react';

const WinnerItem = ({ data }) => {
  const [winnerElement, setWinnerElement] = useState(data);

  useEffect(() => {
    if (data !== undefined) {
      setWinnerElement(data);
    }
  }, [data]);

  return (
    <Card fluid>
      <Grid padded={false} style={{ padding: '0.5em' }}>
        <Grid.Column width={7}>
          <img  alt="Premio Ganado" style={{width: '150px', height: '90px'}} src={winnerElement.prize.imgPath} />
        </Grid.Column>
        <Grid.Column width={9}>
          <Header style={{ marginBottom: '0.1em' }} as="h3">
            {winnerElement.participant.name}
          </Header>
          <p style={{ marginBottom: '0.1em', color: 'gray' }}>
            {winnerElement.participant.id } - { winnerElement.participant.area}
          </p>
          <p style={{ marginBottom: '0.1em', color: 'gray' }}>
            {winnerElement.participant.email }
          </p>
          <p style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}> {winnerElement.prize.name} </p>
        </Grid.Column>
      </Grid>
    </Card>
  );
};

export default WinnerItem;
