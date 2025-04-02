import React from "react";
import { render } from "@testing-library/react-native";
import MainBody from "../components/MainBody";

describe("MainBody Component", () => {
  it("renders ScrollView", () => {
    const { getByTestId } = render(<MainBody />);
    expect(getByTestId("scrollview")).toBeTruthy();
  });

  it("renders exactly 5 image containers", () => {
    const { getAllByTestId } = render(<MainBody />);
    expect(getAllByTestId(/^imageContainer-/).length).toBe(5);
  });

  it("renders exactly 5 main images", () => {
    const { getAllByTestId } = render(<MainBody />);
    expect(getAllByTestId(/^mainImage-/).length).toBe(5);
  });

  it("renders exactly 5 description texts", () => {
    const { getAllByTestId } = render(<MainBody />);
    expect(getAllByTestId(/^descriptionText-/).length).toBe(5);
  });

  it("checks that description text content is correct", () => {
    const { getAllByTestId } = render(<MainBody />);
    // Changed to match the first description in your component
    expect(getAllByTestId(/^descriptionText-/)[0].props.children).toBe("Beautiful mountain view");
  });

  it("renders exactly 5 icon images", () => {
    const { getAllByTestId } = render(<MainBody />);
    expect(getAllByTestId(/^iconImage-/).length).toBe(5);
  });


  for (let i = 0; i < 5; i++) {
    it(`renders image container ${i + 1}`, () => {
      const { getByTestId } = render(<MainBody />);
      expect(getByTestId(`imageContainer-${i}`)).toBeTruthy();
    });
  }

  for (let i = 0; i < 5; i++) {
    it(`renders main image ${i + 1}`, () => {
      const { getByTestId } = render(<MainBody />);
      expect(getByTestId(`mainImage-${i}`)).toBeTruthy();
    });
  }
});
