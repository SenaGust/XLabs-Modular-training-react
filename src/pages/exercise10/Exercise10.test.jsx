import { useQuery } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import React from "react";
import getAllBreeds from "../../services/dogs/getAllBreeds";
import DogDetails from "../exercise2/components/dogDetails/DogDetails";
// TODO: Fix this mock
import Exercise10 from "./Exercise10";

jest.mock("@tanstack/react-query", () => ({ useQuery: jest.fn() }));

jest.mock("../../services/dogs/getAllBreeds");

describe("Exercise 10", () => {
  afterEach(() => {
    expect(useQuery).toHaveBeenCalledTimes(1);
    expect(useQuery).toHaveBeenCalledWith([], getAllBreeds);
  });

  it("should render the list of dogs", () => {
    useQuery.mockReturnValue({
      data: { a: [] },
    });

    render(<Exercise10 />);

    expect(screen.getByText("a")).toBeInTheDocument();
  });

  it("should render isLoading", () => {
    useQuery.mockReturnValue({ isLoading: true });

    render(<Exercise10 />);

    expect(screen.getByText("...isLoading")).toBeInTheDocument();
  });

  it("should render error", () => {
    useQuery.mockReturnValue({ error: true });

    render(<Exercise10 />);

    expect(screen.getByText("error")).toBeInTheDocument();
  });
});
