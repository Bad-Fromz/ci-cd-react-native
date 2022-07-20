import React from "react";
import { render } from "@testing-library/react-native";
import { CTA } from "./CTA";

describe("components/CTA", () => {
  it("displays the passed-in name", () => {
    const { queryByText } = render(<CTA label={"WELCOME!"} />);
    expect(queryByText("WELCOME!")).not.toBeNull();
  });
});
