import React from "react";
import { Card, Divider, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { RaffleService } from "../../helpers/services/raffle.service";

import AddParticipantModal from "./AddParticipantModal";

import "./Participants.scss";

const Participants = () => {
  const history = useHistory();
  const [shouldShowModal, setShouldShowModal] = React.useState(false);
  const [participants, setParticipants] = React.useState([]);

  React.useEffect(() => {
    RaffleService.getParticipants()
      .then(setParticipants)
      .catch(() => alert("No se pudo obtener participantes"));
  }, []);

  const handleAdd = (participant) => {
    setParticipants([...participants, participant]);
    RaffleService.updateParticipants(participants)
      .then(setShouldShowModal(false))
      .catch(() => alert("No se pudo obtener participantes"));
  };

  const handleRemove = async (index) => {
    setParticipants(participants.filter((_, i) => index !== i));
    RaffleService.updateParticipants(participants)
      .then()
      .catch(() => alert("No se pudo obtener participantes"));
  };

  return (
    <Card className="participants">
      <AddParticipantModal
        open={shouldShowModal}
        onClose={() => setShouldShowModal(false)}
        onAdd={handleAdd}
      />
      <Card.Content>
        <Card.Header>
          <div className="participants__header">
            Tómbola Regalona
            <Button
              className="participants__button-small"
              inverted
              onClick={() => history.push("/")}
            >
              X
            </Button>
          </div>
        </Card.Header>
        <Divider />
        <section className="participants__logo">
          <Button
            className="participants__button"
            inverted
            onClick={() => setShouldShowModal(true)}
          >
            Agregar Participante
          </Button>
        </section>

        <section className="participants__content">
          {participants.length <= 0 ? (
            <h2> No hay participantes </h2>
          ) : (
            <Card.Group className="participants__grid">
              {participants.map((participant, i) => (
                <Card key={i}>
                  <Card.Content>
                    <Card.Header> {participant.name} </Card.Header>
                    <Card.Meta>{participant.area}</Card.Meta>
                    <Card.Description>{participant.phone}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button onClick={() => handleRemove(i)} basic color="red">
                      Remove
                    </Button>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          )}
        </section>
        <section className="participants__logo">
          <h2>Grupo Norte ⬆️ </h2>
        </section>
      </Card.Content>
    </Card>
  );
};

export default Participants;
