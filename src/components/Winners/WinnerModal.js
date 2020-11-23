import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { Grid, Header, Image } from 'semantic-ui-react';

import './WinnerModal.scss';

const WinnerModal = ({ open, winnerElement }) => {
  return (
    <>
      {winnerElement.participant && (
        <Rodal
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
              src={winnerElement.prize.imgPath}
              alt="winnerElement"
            />

            <Header as="h2">
              Felicidades {winnerElement.participant.name}
            </Header>
            <p className="modal__subtitle">
              {winnerElement.participant.id} - {winnerElement.participant.area}
            </p>
            <Header className="modal__prize" as="h3">
              Tu premio es: {winnerElement.prize.name}
            </Header>
          </section>
        </Rodal>
      )}
    </>
  );
};

export default WinnerModal;
