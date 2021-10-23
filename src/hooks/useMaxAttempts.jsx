import React from "react";

const useMaxAttempts = (maxAttempts) => {
  const [attempts, setAttempts] = React.useState(0);
  const [hasFinishedAttempts, setHasFinishedAttempts] = React.useState(false);

  React.useEffect(() => {
    if (attempts >= maxAttempts) {
      setHasFinishedAttempts(true);
      return;
    }
  }, [attempts, maxAttempts]);

  const makeAttempt = () => {
    setAttempts(attempts + 1);
  };

  return { hasFinishedAttempts, makeAttempt };
};

export default useMaxAttempts;
