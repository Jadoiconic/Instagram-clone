import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface dataProps {
    data:any;
}

const Status = ({data}:dataProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: data.user.imageUri }} style={styles.image} />
            <Text>{data.user.name}</Text>
        </View>
    )
}

export default Status;

const styles = StyleSheet.create({
    image: {
        width: 56,
        height: 56,
        borderRadius: 50,
        resizeMode:'cover',
        borderWidth:2,
        borderColor:'linear-gradient(90deg, rgba(207,12,12,1) 0%, rgba(198,20,103,1) 38%, rgba(241,180,0,1) 100%)',
    },
    container: {
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    }
})