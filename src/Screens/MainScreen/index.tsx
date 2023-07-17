import { View, Text, SafeAreaView, useColorScheme } from 'react-native'
import React from 'react'
import styles from './style'

import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Path, Svg } from 'react-native-svg';
import { instagram } from '../../constants/svgData';
import Status from '../../components/Status';
import { FlatList } from 'react-native-gesture-handler';
import stories from '../../constants/stories';


const MainScreen = () => {

    const theme = useColorScheme();
    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <View>
                    <Icon name="camera-outline" size={30} color={theme === 'light' ? 'black' : 'white'} />
                </View>
                <View>
                    <Svg title="http://www.w3.org/2000/svg" width="100" height="49" viewBox="0 0 200 49" fill="none">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d={instagram} fill={theme === 'light' ? '#262626' : 'white'} />
                    </Svg>
                </View>
                <View style={styles.headerRight}>
                    <Entypo name="video-camera" size={30} color={theme === 'light' ? 'black' : 'white'} />
                    <Feather name="send" size={30} color={theme === 'light' ? 'black' : 'white'} />
                </View>
            </View>
            {/* Status component */}
            <View style={styles.story}>
              <FlatList data={stories} 
              renderItem={({item})=><Status data = {item}/>}
              horizontal
              showsHorizontalScrollIndicator={false}/>
            </View>
        </View>
    )
}

export default MainScreen