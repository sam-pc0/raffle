import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Divider, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { RaffleService } from "../../helpers/services/raffle.service";
import * as type from "../../helpers/type";
import _ from "lodash";

import "./Raffle.scss";
import WinnerModal from "../Winners/WinnerModal";
import RaffleAnimation from "./RaffleAnimation";

const Raffle = ({ onWinnerAdd, onStart }) => {
  const history = useHistory();
  const [participants, setParticipants] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [shouldMoveAnimation, setShouldMoveAnimation] = useState(false);
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [currentWinner, setCurrentWinner] = useState({});
  const [shouldShowButton, setShouldShowButton] = useState(false);

  const getWinner = () => {
    const winner = _.sample(
      participants.filter((participant) => !participant.wasWon)
    );

    return {
      winner,
      index: winner
        ? participants.findIndex(
            (_participant) => _participant.name === winner.name
          )
        : undefined,
    };
  };

  const getReward = () => {
    const reward = _.sample(rewards.filter((reward) => !reward.wasWon));
    return {
      reward,
      index: reward
        ? rewards.findIndex((_reward) => _reward.name === reward.name)
        : undefined,
    };
  };

  const addWinner = async (winnerIndex, rewardIndex) => {
    const _participants = [...participants];
    const _rewards = [...rewards];
    _participants[winnerIndex].wasWon = _rewards[rewardIndex].wasWon = true;

    setParticipants(_participants);
    setRewards(_rewards);
    setShouldShowModal(false);
    setShouldMoveAnimation(false);
    setShouldMoveAnimation(true);
  };

  const handleStop = async () => {
    const obtainingReward = getReward();
    const obtainingWinner = getWinner();
    if (!obtainingReward.reward || !obtainingWinner.winner) {
      RaffleService.updateRewards(type.Rewards);
      setShouldShowButton(true);
      return;
    }

    const winner = new type.Winner({
      winner: obtainingWinner.winner,
      reward: obtainingReward.reward,
    });
    setCurrentWinner(winner);
    setShouldShowModal(true);

    setTimeout(() => {
      addWinner(obtainingWinner.index, obtainingReward.index);
      onWinnerAdd(winner);
      setShouldMoveAnimation();
    }, 3000);
  };

  const handleStart = async () => {
    onStart();
    await setData();
    setShouldMoveAnimation(true);
    setShouldShowButton(false);
  };

  const setData = async () => {
    const _rewards = await RaffleService.getRewards();
    const _participants = await RaffleService.getParticipants();
    setRewards(_rewards);
    setParticipants(_participants);
  };

  React.useEffect(() => {
    setData();
  }, []);

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
          {shouldShowButton &&
            (participants.length <= 0 ? (
              <h2 className="raffle__text">
                Aún no has agregado participantes
              </h2>
            ) : (
              <Button className="raffle__button" inverted onClick={handleStart}>
                Comenzar Rifa
              </Button>
            ))}
        </div>
        <section className="raffle__logo">
          <h2>Grupo Norte ⬆️ </h2>
        </section>
      </Card.Content>
    </Card>
  );
};

Raffle.propTypes = {
  onWinnerAdd: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
};

export default Raffle;
