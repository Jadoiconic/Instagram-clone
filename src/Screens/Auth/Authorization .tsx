import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';
import { instagram } from '../../constants/svgData';
import ButtonComp from '../../components/Button';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Authorization = ({ navigation }) => {

    const theme = useColorScheme();
    return (
        <SafeAreaView>
            <View style={[styles.root, { backgroundColor: theme === 'light' ? 'white' : 'black', }]}>

                <View style={styles.topStyle}>
                <Svg title="http://www.w3.org/2000/svg" width="200" height="49" viewBox="0 0 200 49" fill="none">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d={instagram} fill={theme === 'light' ? '#262626' : 'white'} />
                    </Svg>
                    <View style={styles.account}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" }} style={styles.image} />
                        <Text>Jacob_w</Text>
                    </View>
                    <ButtonComp title="Log In" onPress={() => navigation.navigate('MainApp')} />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontWeight: '500', marginVertical: 20, color: theme === 'light' ? 'rgba(0, 0, 0, 0.40)' : '#dede' }}> Switch Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomStyle}>
                    <Text style={[styles.account, { color: theme === 'light' ? 'rgba(0, 0, 0, 0.40)' : '#dede' }]}>Don’t have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: theme === 'light' ? 'rgba(0, 0, 0, 0.40)' : '#dede' }}> Sign Up</Text>
                    </TouchableOpacity>
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
        backgroundColor: 'white',
    },
    topStyle: {
        height: windowHeight - 200,
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottomStyle: {
        borderTop: 1,
        borderTopWidth: 1,
        width: windowWidth,
        borderTopColor: 'rgba(0, 0, 0, 0.40)',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        height:200,
    },
    account: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.40)',
        marginVertical: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        paddingVertical: 10,

    },
})