import React, { lazy, useState } from 'react';
import { Card, Divider, Button } from 'semantic-ui-react';

import { RaffleService } from '../../helpers/services/raffle.service';

import './Raffle.scss';
import WinnerModal from '../Winners/WinnerModal';
const RaffleAnimation = lazy(() => import('./RaffleAnimation'));

const Raffle = ({ onWinnerAdd }) => {
  const [shouldMoveAnimation, setShouldMoveAnimation] = useState(false);
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [currentWinners, setCurrentWinners] = useState(false);
  const [currentWinner, setCurrentWinner] = useState({});
  const [winnerIndex, setWinnerIndex] = useState(0);
  const [shouldShowButton, setShouldShowButton] = useState(false);

  const handleStop = async () => {
    if (currentWinners.length > winnerIndex) {
      setCurrentWinner(currentWinners[winnerIndex]);
      setShouldShowModal(true);
      setShouldMoveAnimation(false);
      setTimeout(() => {
        setShouldShowModal(false);
        setWinnerIndex(winnerIndex + 1);
        setShouldMoveAnimation(true);
        onWinnerAdd(currentWinners[winnerIndex]);
      }, 3000);
    } else {
      setShouldShowButton(true);
      setShouldMoveAnimation(false);
    }
  };

  const handleStart = async () => {
    setCurrentWinners(await RaffleService.getCurrentRaffleWinners());
    setWinnerIndex(0);
    setShouldMoveAnimation(true);
    setShouldShowButton(false);
  };

  return (
    <Card className="raffle">
      <WinnerModal open={shouldShowModal} winnerElement={currentWinner} />
      <Card.Content>
        <Card.Header>Tómbola Regalona</Card.Header>
        <Divider />
        <RaffleAnimation
          onStop={handleStop}
          moveAnimation={shouldMoveAnimation}
        />
        <div className="raffle__elements-container">
          {shouldShowButton && (
            <Button className="raffle__button" inverted onClick={handleStart}>
              Comenzar Rifa
            </Button>
          )}
        </div>
        <img
          className="raffle__tigo"
          src="/images/soy_tigo.png"
          alt="soy tigo"
        ></img>
        <img
          className="raffle__logo"
          src="/images/profiling.png"
          alt="Profiling Logo"
        ></img>
      </Card.Content>
    </Card>
  );
};

export default Raffle;
