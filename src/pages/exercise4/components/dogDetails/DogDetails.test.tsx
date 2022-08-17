import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DogDetails from "./DogDetails";

describe("DogDetails", () => {
  it("should render the dog name", () => {
    const mockedProps = { name: "Pandora" };

    render(<DogDetails {...mockedProps} />);

    expect(screen.getByText(mockedProps.name)).toBeInTheDocument();
  });

  it("should increase the scold number when click on scold button", () => {
    const mockedProps = { name: "Pandora" };

    render(<DogDetails {...mockedProps} />);

    expect(screen.getByText("Scold: 0")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Scold!"));

    expect(screen.getByText("Scold: 1")).toBeInTheDocument();
  });
});
