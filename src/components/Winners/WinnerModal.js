import React from "react";
import Rodal from "rodal";
import PropTypes from "prop-types";
import "rodal/lib/rodal.css";
import { Header } from "semantic-ui-react";

import "./WinnerModal.scss";

const WinnerModal = ({ open, winnerElement }) => {
  return (
    <>
      {winnerElement.winner && (
        <Rodal
          onClose={() => null}
          duration={500}
          enterAnimation="rotate"
          leaveAnimation="slideLeft"
          showCloseButton={false}
          visible={open}
          width={600}
          height={450}
        >
          <section className="modal">
            <img
              className="modal__image"
              src={winnerElement.reward.imgPath}
              alt="winnerElement"
            />

            <Header as="h2">Felicidades {winnerElement.winner.name}</Header>
            <p className="modal__subtitle">
              {winnerElement.winner.phone} - {winnerElement.winner.area}
            </p>
            <Header className="modal__prize" as="h3">
              Tu premio es: {winnerElement.reward.name}
            </Header>
          </section>
        </Rodal>
      )}
    </>
  );
};
WinnerModal.propTypes = {
  open: PropTypes.bool.isRequired,
  winnerElement: PropTypes.object,
};
export default WinnerModal;
