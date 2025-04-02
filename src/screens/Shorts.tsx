import { View, Dimensions, FlatList } from 'react-native';
import React, { Component, createRef } from 'react';
import { Video, ResizeMode } from 'expo-av';

const { height } = Dimensions.get("window");

const videoData = [
  { id: '1', source: require("../assets/videos/videoplayback.mp4") },
  { id: '2', source: require("../assets/videos/Neil Armstrong's Moon landing video  😍🔥 shorts short viral viralvideo thespacezone.mp4") },
  { id: '3', source: require("../assets/videos/videoplayback.mp4") },
];

export class Shorts extends Component {
  videoListRef = createRef<FlatList<any>>();

  renderVideoItem = ({ item }: { item: { id: string; source: any } }) => {
    return (
      <View 
        testID={`video-item-${item.id}`}
        style={{ 
          height, 
          justifyContent: "center", 
          alignItems: "center",
          backgroundColor: 'black'
        }}
      >
        <Video
          testID={`expo-video-${item.id}`}
          source={item.source}
          style={{ 
            width: "100%", 
            height: "100%",
            backgroundColor: 'black'
          }}
          resizeMode={ResizeMode.COVER}
          shouldPlay={true}
          isLooping={true}
          useNativeControls={true}
          accessibilityLabel={`Video ${item.id}`}
        />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        testID="shorts-flatlist"
        data={videoData}
        keyExtractor={(item) => item.id}
        ref={this.videoListRef}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={this.renderVideoItem}
        getItemLayout={(data, index) => ({
          length: height,
          offset: height * index,
          index,
        })}
      />
    );
  }
}

export default Shorts;