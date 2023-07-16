import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Authorization = () => {
    return (
        <SafeAreaView>
            <View style={styles.root}>
                <View style={styles.topStyle}>

                </View>
                <View style={styles.bottomStyle}>
                    <Text style={styles.account}>Don’t have an account? 
                        <TouchableOpacity>
                            <Text style={{fontWeight:'bold'}}> Sign Up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Authorization

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    topStyle: {
        height: windowHeight - 200,

    },
    bottomStyle: {
        borderTop: 1,
        borderTopWidth: 1,
        width: windowWidth,
        borderTopColor: 'rgba(0, 0, 0, 0.40)',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    },
    account:{
        fontSize:15,
        color:'rgba(0, 0, 0, 0.40)',
    },
})