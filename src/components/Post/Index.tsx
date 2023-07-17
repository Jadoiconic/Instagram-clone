import { View, Text, Image, useColorScheme } from 'react-native'
import React from 'react'
import usersPost from '../../constants/usersPost'
import styles from './styles'

import Icon from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'




const PostComponent = () => {
    const theme = useColorScheme();
    return (
        <>
            <View style={styles.container}>
                <Image source={{ uri: usersPost[0].imageUri }} style={styles.profile} />
                <View style={styles.profileContent}>
                    <View>
                        <Text style={{ color: theme === 'light' ? 'black' : 'white' }}>{usersPost[0].name}</Text>
                        <Text style={{ color: theme === 'light' ? 'black' : 'white' }}>{usersPost[0].address}</Text>
                    </View>
                    <View>
                        <Icon name="more-horizontal" size={30} color={theme === 'light' ? 'black' : 'white'} />
                    </View>
                </View>
            </View>
            <View>
                <Image source={{ uri: usersPost[0].posts[0].image }} style={styles.image} />
                <View style={styles.optionContainer}>
                    <View style={styles.options}>
                        <Icon name="heart" size={30} color={theme === 'light' ? 'black' : 'white'} />
                        <FontAwesome name="comment-o" size={30} color={theme === 'light' ? 'black' : 'white'} />
                        <Icon name="send" size={30} color={theme === 'light' ? 'black' : 'white'} />
                    </View>
                    <View style={styles.dotContainer}>
                        <View style={styles.dot}/>
                        <View style={styles.dot}/>
                        <View style={styles.dot}/>
                    </View>
                    <View>
                        <Icon name="tag" size={30} color={theme === 'light' ? 'black' : 'white'} />
                    </View>
                </View>
            </View>
                
        </>
    )
}

export default PostComponent