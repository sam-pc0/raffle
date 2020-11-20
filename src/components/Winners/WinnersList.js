import React, { lazy, useState, useEffect } from 'react';
import { Card, Divider } from 'semantic-ui-react';

const WinnerItem = lazy(() => import('./WinnerItem'));

const WinnersList = ({ data }) => {
  const [winnersList, setWinnersList] = useState(data);

  useEffect(() => {
    if (data !== undefined) {
      setWinnersList(data);
    }
  }, [data]);

  return (
    <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Card.Content>
        <Card.Header>Lista de Ganadores</Card.Header>
        <Divider/> 
        {winnersList.length > 0 ? (
          <Card.Group>
            {winnersList.map((winner) => (
              <WinnerItem key={winner.workId} data={winner} />
            ))}
          </Card.Group>
        ) : (
          <span> Aún No hay ganadores </span>
        )}
      </Card.Content>
    </Card>
  );
};

export default WinnersList;
