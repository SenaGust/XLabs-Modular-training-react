import React from "react";

interface Props {
  name: string;
}

const DogDetails = ({ name }: Props) => {
  return (
    <div>
      <h2>{name}</h2>
      <button>Bark!</button>
    </div>
  );
};

export default DogDetails;
