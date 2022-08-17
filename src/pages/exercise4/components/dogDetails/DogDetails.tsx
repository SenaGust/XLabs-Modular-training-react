import React, { useState } from "react";

interface Props {
  name: string;
}

const DogDetails = ({ name }: Props) => {
  const [scold, setScold] = useState<number>(0);
  return (
    <div>
      <h2>{name}</h2>
      <button>Bark!</button>
      <h4>Scold: {scold}</h4>
      <button onClick={() => setScold(scold + 1)}>Scold!</button>
    </div>
  );
};

export default DogDetails;
