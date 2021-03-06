import React from 'react';
import { View, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';


import Styles from './styles';


export default function Player({ navigation, route }) {
    const videoId = route.params.videoId;
    const title = route.params.title;

    const videoURL = `https://www.youtube.com/embed/${videoId}`;

    console.log(videoId);
    return(
        <View style={Styles.body}>
            <View style={Styles.player}>
                <WebView source={{ uri: videoURL }} allowsFullscreenVideo={true} />
            </View>
            <Text style={Styles.title}>{title}</Text>
        </View>
    );
}