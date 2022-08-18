import { useQuery } from "@tanstack/react-query";
import React from "react";
import getAllBreeds from "../../services/dogs/getAllBreeds";
import DogDetails from "../exercise2/components/dogDetails/DogDetails";

interface DogObject {
  [key: string]: Array<string>;
}

export default function Exercise9() {
  const { isLoading, error, data: breeds } = useQuery([], getAllBreeds);

  if (isLoading) return <div>...isLoading</div>;

  if (!error) {
    return (
      <div>
        {Object.keys(breeds as DogObject).map((breed) => (
          <DogDetails name={breed} key={breed} />
        ))}
      </div>
    );
  }

  return <div>error</div>;
}
