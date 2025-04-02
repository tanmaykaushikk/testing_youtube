import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Footer from "../components/Footer";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("Footer Component", () => {
  it("renders all icons", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-home-icon")).toBeTruthy();
    expect(getByTestId("footer-shorts-icon")).toBeTruthy();
    expect(getByTestId("footer-add-icon")).toBeTruthy();
    expect(getByTestId("footer-subscriptions-icon")).toBeTruthy();
    expect(getByTestId("footer-profile-icon")).toBeTruthy();
  });

  it("checks correct icon names", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-home-icon").findByType(MaterialIcons).props.name).toBe("home");
    expect(getByTestId("footer-shorts-icon").findByType(MaterialIcons).props.name).toBe("play-circle-outline");
    expect(getByTestId("footer-subscriptions-icon").findByType(MaterialIcons).props.name).toBe("subscriptions");
    expect(getByTestId("footer-profile-icon").findByType(MaterialIcons).props.name).toBe("person");
  });

  it("clicking buttons triggers correct function calls", () => {
    const mockPress = jest.fn();
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });

    const { getByTestId } = render(<Footer onPress={mockPress} />);

    fireEvent.press(getByTestId("footer-home-btn"));
    fireEvent.press(getByTestId("footer-shorts-btn")); 
    fireEvent.press(getByTestId("footer-add-btn")); 
    fireEvent.press(getByTestId("footer-subscriptions-btn"));
    fireEvent.press(getByTestId("footer-profile-btn"));

    expect(mockPress).toHaveBeenCalledWith("home");
    expect(mockNavigate).toHaveBeenCalledWith("shorts");
    expect(mockPress).toHaveBeenCalledWith("subscriptions");
    expect(mockPress).toHaveBeenCalledWith("profile");
    expect(mockPress).toHaveBeenCalledTimes(4); 
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
