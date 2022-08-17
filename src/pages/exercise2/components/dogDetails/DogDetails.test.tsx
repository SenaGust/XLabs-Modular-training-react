import React from "react";
import { render, screen } from "@testing-library/react";
import DogDetails from "./DogDetails";

describe("DogDetails", () => {
  it("should render the dog name", () => {
    const mockedProps = { name: "Pandora" };

    render(<DogDetails {...mockedProps} />);

    expect(screen.getByText(mockedProps.name)).toBeInTheDocument();
  });
});
