import React, { lazy } from 'react';
import Anime, {anime} from 'react-anime';
import { Card, Divider } from 'semantic-ui-react';

const WinnerItem = lazy(() => import('./WinnerItem'));

const WinnersList = ({ data }) => {
  return (
    <Card
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
    >
      <Card.Content>
        <Card.Header>Lista de Ganadores</Card.Header>
        <Divider />
        {data.length > 0 ? (
          <Card.Group>
            {data.map((winnerElement, index) =>
              index === 0 ? (
                <Anime easing="easeInBack" delay={anime.stagger(200)} duration={500} translateX={[400, 0]}>
                  <WinnerItem key={index} data={winnerElement} />
                </Anime>
              ) : (
                <Anime delay={200} duration={500} translateY={[0, 10]}>
                  <WinnerItem key={index} data={winnerElement} />
                </Anime>
              )
            )}
          </Card.Group>
        ) : (
          <span> Aún No hay ganadores </span>
        )}
      </Card.Content>
    </Card>
  );
};

export default WinnersList;
