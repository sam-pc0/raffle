import React, { lazy, useState } from "react";
import { Card, Divider, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { RaffleService } from "../../helpers/services/raffle.service";

import "./Raffle.scss";
import WinnerModal from "../Winners/WinnerModal";
const RaffleAnimation = lazy(() => import("./RaffleAnimation"));

const Raffle = ({ onWinnerAdd }) => {
  const history = useHistory();
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
        <Card.Header>
          <div className="raffle__header">
            Tómbola Regalona
            {shouldShowButton && (
              <Button
                className="raffle__button-small"
                inverted
                onClick={() => history.push("/participants")}
              >
                Participantes
              </Button>
            )}
          </div>
        </Card.Header>
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
        <section className="raffle__logo">
          <h2>Grupo Norte ⬆️ </h2>
        </section>
      </Card.Content>
    </Card>
  );
};

export default Raffle;
