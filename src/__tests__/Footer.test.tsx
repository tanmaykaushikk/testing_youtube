import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  it("renders the home icon", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-home-icon")).toBeTruthy();
  });

  it("renders the shorts icon", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-shorts-icon")).toBeTruthy();
  });

  it("renders the add icon", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-add-icon")).toBeTruthy();
  });

  it("renders the subscriptions icon", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-subscriptions-icon")).toBeTruthy();
  });

  it("renders the profile icon", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-profile-icon")).toBeTruthy();
  });

  it("home icon has correct name", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-home-icon").children[0].props.name).toBe("home");
  });

  it("shorts icon has correct name", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-shorts-icon").children[0].props.name).toBe("play-circle-outline");
  });

  it("subscriptions icon has correct name", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-subscriptions-icon").children[0].props.name).toBe("subscriptions");
  });

  it("profile icon has correct name", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-profile-icon").children[0].props.name).toBe("person");
  });

  it("clicking home button triggers function with 'home'", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(<Footer onPress={mockPress} />);
    
    fireEvent.press(getByTestId("footer-home-btn"));
    expect(mockPress).toHaveBeenCalledWith("home");
  });

  it("clicking shorts button triggers function with 'shorts'", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(<Footer onPress={mockPress} />);
    
    fireEvent.press(getByTestId("footer-shorts-btn"));
    expect(mockPress).toHaveBeenCalledWith("shorts");
  });

  it("clicking subscriptions button triggers function with 'subscriptions'", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(<Footer onPress={mockPress} />);
    
    fireEvent.press(getByTestId("footer-subscriptions-btn"));
    expect(mockPress).toHaveBeenCalledWith("subscriptions");
  });

  it("clicking profile button triggers function with 'profile'", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(<Footer onPress={mockPress} />);
    
    fireEvent.press(getByTestId("footer-profile-btn"));
    expect(mockPress).toHaveBeenCalledWith("profile");
  });

  it("clicking icons triggers function the correct number of times", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(<Footer onPress={mockPress} />);

    fireEvent.press(getByTestId("footer-home-btn"));
    fireEvent.press(getByTestId("footer-shorts-btn"));
    fireEvent.press(getByTestId("footer-subscriptions-btn"));
    fireEvent.press(getByTestId("footer-profile-btn"));

    expect(mockPress).toHaveBeenCalledTimes(4);
  });
});
