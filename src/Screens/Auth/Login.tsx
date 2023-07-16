import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, Appearance, useColorScheme } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';
import { instagram } from '../../constants/svgData';
import ButtonComp from '../../components/Button';

import Ionicons from '@expo/vector-icons/Ionicons';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const LoginScreen = ({ navigation }) => {
    const theme = useColorScheme();
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Ionicons name="chevron-back" size={32} color="red" />
            </TouchableOpacity>
            <View style={[styles.root, { backgroundColor: theme === 'light' ? 'white' : 'black', }]}>
                <View style={styles.topStyle}>
                    <Svg title="http://www.w3.org/2000/svg" width="200" height="49" viewBox="0 0 200 49" fill="none">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d={instagram} fill={theme === 'light' ? '#262626' : 'white'} />
                    </Svg>
                    <View style={styles.inpuContainer}>
                        <TextInput style={styles.input} placeholder='Username' />
                        <TextInput style={styles.input} placeholder='Password' />
                        <Text></Text>
                    </View>
                    <ButtonComp title="Log In" onPress={() => navigation.navigate('MainApp')} />
                    <TouchableOpacity>
                        <Text style={{ fontWeight: '500', marginVertical: 20, color: theme === 'light' ? 'rgba(0, 0, 0, 0.40)' : 'white' }}> Switch Account</Text>
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

export default LoginScreen

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    topStyle: {
        height: windowHeight - 200,
        width: windowWidth,
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
    },
    account: {
        fontSize: 15,
        marginVertical: 20,
        alignItems: 'center',
    },
    inpuContainer: {
        marginVertical: 20,
    },
    input: {
        width: 340,
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
        borderRadius: 5,
    },
})