import React from "react";
import { render } from "@testing-library/react-native";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders the header logo", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header-logo")).toBeTruthy();
  });

  it("renders the search icon", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header-search")).toBeTruthy();
  });

  it("renders the notification icon", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header-notification")).toBeTruthy();
  });

  it("renders the cast icon", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header-cast")).toBeTruthy();
  });

  const scrollItems = ["All", "Music", "Gaming", "News", "Sports", "Live", "Podcasts", "Thrillers", "Mixed", "IPL", "Programming"];

  scrollItems.forEach(item => {
    it(`renders the scroll item: ${item}`, () => {
      const { getByText } = render(<Header />);
      expect(getByText(item)).toBeTruthy();
    });
  });
});
