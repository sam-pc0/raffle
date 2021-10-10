import React from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Participant } from "../../helpers/type";
import { Form, Input, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./Participants.scss";

const AddParticipantModal = ({ open, onClose, onAdd }) => {
  const [name, setName] = React.useState("");
  const [area, setArea] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleAdd = () => {
    if (name !== "" && area !== "" && phone !== "") {
      onAdd(new Participant({ name, area, phone, wasWon: false }));
      reset();
    }
  };

  const reset = () => {
    const form = document.getElementById("form");
    form.reset();
    setName("");
    setArea("");
    setPhone("");
  };

  return (
    <Rodal
      onClose={() => {
        reset();
        onClose();
      }}
      duration={500}
      enterAnimation="rotate"
      leaveAnimation="rotate"
      showCloseButton={false}
      visible={open}
      width={600}
      height={480}
    >
      <section className="modal">
        <h2> Agregar Participante </h2>

        <Form id="form" onSubmit={handleAdd} className="form" size="large">
          <Form.Field>
            <label>Nombre</label>
            <Input
              onInput={({ target }) => setName(target.value)}
              placeholder="ej. juan carlos bodoque"
            />
          </Form.Field>
          <Form.Field>
            <label>Área</label>
            <Input
              onInput={({ target }) => setArea(target.value)}
              placeholder="ej. sistemas"
            />
          </Form.Field>
          <Form.Field>
            <label>Teléfono</label>
            <Input
              onInput={({ target }) => setPhone(target.value)}
              placeholder="ej. 55155155"
            />
          </Form.Field>

          <Button className="participants__button" inverted type="submit">
            Agregar
          </Button>
        </Form>
      </section>
    </Rodal>
  );
};

AddParticipantModal.propTypes = {
  open: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AddParticipantModal;
