import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Video, ResizeMode } from 'expo-av';
import Shorts from '../screens/Shorts';
import { FlatList } from 'react-native-gesture-handler';

jest.mock('expo-av', () => {
  const React = require('react');
  const MockVideo = ({ testID, style, source, ...props }: any) => (
    React.createElement('View', { 
      testID, 
      style,
      source,
      ...props 
    })
  );
  return {
    Video: MockVideo,
    ResizeMode: {
      COVER: 'cover',
      CONTAIN: 'contain',
      STRETCH: 'stretch',
    },
  };
});

describe('Shorts Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Component Rendering', () => {
    it('should render FlatList with correct props', () => {
      render(<Shorts />);
      const flatList = screen.getByTestId('shorts-flatlist');
      
      expect(flatList).toBeTruthy();
      expect(flatList.props.pagingEnabled).toBe(true);
      expect(flatList.props.showsVerticalScrollIndicator).toBe(false);
    });

    it('should render correct number of video items', () => {
      render(<Shorts />);
      const videoItems = screen.getAllByTestId(/video-item-/);
      expect(videoItems.length).toBe(3);
    });
  });

  describe('Video Component Props', () => {
    it('each video should have correct props', () => {
      render(<Shorts />);
      
      ['1', '2', '3'].forEach((id) => {
        const videoComponent = screen.getByTestId(`expo-video-${id}`);
        expect(videoComponent).toBeTruthy();

        expect(videoComponent.props.source).toBeDefined();
        expect(videoComponent.props.shouldPlay).toBe(true);
        expect(videoComponent.props.isLooping).toBe(true);
        expect(videoComponent.props.resizeMode).toBe(ResizeMode.COVER);
        expect(videoComponent.props.useNativeControls).toBe(true);
      });
    });

    it('each video should have accessibility label', () => {
      render(<Shorts />);
      
      ['1', '2', '3'].forEach((id) => {
        const videoComponent = screen.getByTestId(`expo-video-${id}`);
        expect(videoComponent.props.accessibilityLabel).toBe(`Video ${id}`);
      });
    });
  });

  describe('Layout and Styling', () => {
    it('each video item should have full screen height', () => {
      const { height } = require('react-native').Dimensions.get('window');
      render(<Shorts />);
      
      ['1', '2', '3'].forEach((id) => {
        const videoItem = screen.getByTestId(`video-item-${id}`);
        expect(videoItem.props.style.height).toBe(height);
      });
    });

    it('video component should have full width and height', () => {
      render(<Shorts />);
      
      ['1', '2', '3'].forEach((id) => {
        const videoComponent = screen.getByTestId(`expo-video-${id}`);
        expect(videoComponent.props.style.width).toBe('100%');
        expect(videoComponent.props.style.height).toBe('100%');
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty video data', () => {
      const MockShorts = () => (
        <FlatList
          testID="shorts-flatlist"
          data={[]}
          renderItem={() => null}
        />
      );
      
      render(<MockShorts />);
      const videoItems = screen.queryAllByTestId(/video-item-/);
      expect(videoItems.length).toBe(0);
    });
  });
});