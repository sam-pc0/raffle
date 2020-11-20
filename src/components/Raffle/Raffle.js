import React, { lazy, useState, useEffect } from 'react';
import { Card, Divider, Button, Image } from 'semantic-ui-react';

import { RaffleService } from '../../helpers/services/raffle.service';

import './Raffle.scss';
const RaffleAnimation = lazy(() => import('./RaffleAnimation'));

const Raffle = () => {
  const [shouldMoveAnimation, setShouldMoveAnimation] = useState(false);
  const [restantWinners, setRestantWinners] = useState(0);
  const [shouldShowButton, setShouldShowButton] = useState(false);

  const handleStop = async () => {
    if (restantWinners > 0) {
      setRestantWinners(restantWinners - 1);
      const winner = await RaffleService.getAWinner();
      await alert(`Felicidades ${winner.name} has ganado un ${winner.reward.name}`);
      setShouldMoveAnimation(false);
      setShouldMoveAnimation(true);
    } else {
      setShouldShowButton(true);
      setShouldMoveAnimation(false);
    }
  };

  const handleStart = async () => {
    setRestantWinners(await RaffleService.getTotalWinners());
    setShouldMoveAnimation(true);
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
