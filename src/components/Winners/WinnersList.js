import React from "react";
import PropTypes from "prop-types";
import Anime, { anime } from "react-anime";
import { Card, Divider } from "semantic-ui-react";

import "./WinnersList.scss";
import WinnerItem from "./WinnerItem";

const WinnersList = ({ data }) => {
  return (
    <Card
      className="list"
      style={{
        overflowX: "hidden",
        overflowY: "scroll",
        width: "100%",
        height: "100%",
      }}
    >
      <Card.Content>
        <Card.Header>Lista de Ganadores</Card.Header>
        <Divider />
        {data.length > 0 ? (
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            {data.map((winnerElement, index) =>
              index === 0 ? (
                <Anime
                  key={winnerElement.reward.name}
                  easing="easeInBack"
                  delay={anime.stagger(200)}
                  duration={500}
                  translateX={[400, 0]}
                >
                  <WinnerItem data={winnerElement} />
                </Anime>
              ) : (
                <Anime
                  key={winnerElement.reward.name}
                  delay={200}
                  duration={500}
                  translateY={[0, 15]}
                >
                  <WinnerItem data={winnerElement} />
                </Anime>
              )
            )}
          </div>
        ) : (
          <span> Aún No hay ganadores </span>
        )}
      </Card.Content>
    </Card>
  );
};

WinnersList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default WinnersList;
