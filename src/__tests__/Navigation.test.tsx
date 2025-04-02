import React from 'react';
import { render } from '@testing-library/react-native';
import Navigation from '../Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    NavigationContainer: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: jest.fn(() => ({
      Navigator: ({ children }: { children: React.ReactNode }) => children,
      Screen: ({ children }: { children: React.ReactNode }) => children,
    })),
  };
});

describe('Navigation Component', () => {
  it('renders NavigationContainer', () => {
    const { getByTestId } = render(<Navigation />);
    expect(getByTestId('navigation-container')).toBeTruthy();
  });
});
