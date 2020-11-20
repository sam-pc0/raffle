import React, { lazy, useState, useEffect } from 'react';
import { Card, Divider, Button, Image } from 'semantic-ui-react';

import './Raffle.scss';
const RaffleAnimation = lazy(() => import('./RaffleAnimation'));

const Raffle = () => {
  const [shouldMoveAnimation, setShouldMoveAnimation] = useState(false);
  const [isRaffleRunning, setIsRaffleRunning] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);

  const handleStop = () => {
    if (isRaffleRunning) {
      setShouldMoveAnimation(false);
      alert('Felicidades Bodoque');
      setShouldShowButton(true); //por el momento
    } else {
      setShouldShowButton(true);
    }
  };

  const handleStart = () => {
    setShouldMoveAnimation(true);
    setIsRaffleRunning(true);
    setShouldShowButton(false);
  };

  return (
    <Card className="raffle">
      <Card.Content>
        <Card.Header>Tómbola Regalona</Card.Header>
        <Divider />
        <RaffleAnimation
          onStop={handleStop}
          moveAnimation={shouldMoveAnimation}
        />
        <div className="raffle__elements-container">
          {shouldShowButton && (
            <Button
              disabled={isRaffleRunning}
              className="raffle__button"
              inverted
              onClick={handleStart}
            >
              Comenzar Rifa
            </Button>
          )}
        </div>
        <img
          className="raffle__image"
          src="/images/soy_tigo.png"
          alt="soy tigo"
        ></img>
      </Card.Content>
    </Card>
  );
};

export default Raffle;
