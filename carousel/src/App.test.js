import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// Smoke test
it("renders without crashing", () => {
    render(<App />)
  })

// Snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot()
})