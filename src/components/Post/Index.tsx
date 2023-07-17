import { View, Text, Image, useColorScheme } from 'react-native'
import React from 'react'
import usersPost from '../../constants/usersPost'
import styles from './styles'

import Icon from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface itemsProps {
    items: any;
}


const PostComponent = ({ items }) => {
    const theme = useColorScheme();
    return (
        <>
            <View style={styles.container}>
                <Image source={{ uri: items.imageUri }} style={styles.profile} />
                <View style={styles.profileContent}>
                    <View>
                        <Text style={{ color: theme === 'light' ? 'black' : 'white' }}>{items.name}</Text>
                        <Text style={{ color: theme === 'light' ? 'black' : 'white' }}>{items.address}</Text>
                    </View>
                    <View>
                        <Icon name="more-horizontal" size={30} color={theme === 'light' ? 'black' : 'white'} />
                    </View>
                </View>
            </View>
            <View>
                <Image source={{ uri: items.posts[0].image }} style={styles.image} />
                <View style={styles.optionContainer}>
                    <View style={styles.options}>
                        <Icon name="heart" size={30} color={theme === 'light' ? 'black' : 'white'} />
                        <FontAwesome name="comment-o" size={30} color={theme === 'light' ? 'black' : 'white'} />
                        <Icon name="send" size={30} color={theme === 'light' ? 'black' : 'white'} />
                    </View>
                    <View style={styles.dotContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <View>
                        <Icon name="tag" size={30} color={theme === 'light' ? 'black' : 'white'} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, }}>
                    <Image source={{ uri: items.imageUri }} style={styles.pic} />
                    <Text>Liked by Mustapha and {items.posts[0].likes} others</Text>
                </View>
                <Text
                    numberOfLines={3}
                    style={{ paddingHorizontal: 10, }}
                ><Text>Mustapha</Text> {items.posts[0].Comments}</Text>
            </View>

        </>
    )
}

export default PostComponent