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
    },
    container: {
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    }
})