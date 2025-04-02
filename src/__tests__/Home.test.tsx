import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../screens/Home';

jest.mock('../components/Header', () => () => 'Header');
jest.mock('../components/MainBody', () => () => 'MainBody');
jest.mock('../components/Footer', () => () => 'Footer');

describe('Home Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Home />);
    
    expect(getByTestId('home-container')).toBeTruthy();
    expect(getByTestId('header-container')).toBeTruthy();
    expect(getByTestId('mainbody-container')).toBeTruthy();
    expect(getByTestId('footer-container')).toBeTruthy();
  });
});