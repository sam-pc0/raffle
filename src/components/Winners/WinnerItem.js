import React, { useState, useEffect } from "react";
import { Card, Grid, Header } from "semantic-ui-react";

const WinnerItem = ({ data }) => {
  const [winnerElement, setWinnerElement] = useState(data);

  useEffect(() => {
    if (data !== undefined) {
      setWinnerElement(data);
    }
  }, [data]);

  return (
    <div
      style={{
        width: "100% !important",
        display: "flex",
        padding: "1em",
        margin: "0.5em",
        border: "1px solid rgba(12, 12, 12, 0.2)",
      }}
    >
      <div style={{ width: "50%", padding: "0.1em" }}>
        <img
          alt="Premio Ganado"
          style={{ width: "150px", height: "90px" }}
          src={winnerElement.reward.imgPath}
        />
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "0.5em",
        }}
      >
        <Header style={{ marginBottom: "0.1em" }} as="h3">
          {winnerElement.winner.name}
        </Header>
        <p style={{ marginBottom: "0.1em", color: "gray" }}>
          {winnerElement.winner.phone} - {winnerElement.winner.area}
        </p>
        <p style={{ marginBottom: "0.1em", color: "gray" }}>
          {winnerElement.winner.email}
        </p>
        <p
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {winnerElement.reward.name}
        </p>
      </div>
    </div>
  );
};

export default WinnerItem;
