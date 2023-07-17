import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, useColorScheme, StatusBar } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';
import { instagram } from '../../constants/svgData';
import ButtonComp from '../../components/Button';

import Ionicons from '@expo/vector-icons/Ionicons';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const LoginScreen = ({ navigation }: any) => {
    const theme = useColorScheme();
    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: theme === 'light' ? 'white' : 'black', }}
            >
                <Ionicons name="chevron-back" size={32} color={theme === 'dark' ? 'white' : 'black'} />
            </TouchableOpacity>
            <View style={[styles.root, { backgroundColor: theme === 'light' ? 'white' : 'black', }]}>
                <View style={styles.topStyle}>
                    <Svg title="http://www.w3.org/2000/svg" width="200" height="49" viewBox="0 0 200 49" fill="none">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d={instagram} fill={theme === 'light' ? '#262626' : 'white'} />
                    </Svg>
                    <View style={styles.inpuContainer}>
                        <TextInput style={styles.input} placeholder='Username' />
                        <TextInput style={styles.input} placeholder='Password' />
                        <TouchableOpacity style={{ alignItems:'flex-end'}}>
                            <Text style={{ color:'blue'}}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <ButtonComp title="Log In" onPress={() => navigation.navigate('MainApp')} />
                    <TouchableOpacity style={{marginHorizontal:20,}}>
                        <Text style={{ fontWeight: '500', marginVertical: 50, color: theme === 'light' ? 'blue' : 'blue' }}> Log In With Facebook</Text>
                    </TouchableOpacity>

                    <View style={styles.divider}>
                        <View style={styles.dividerBorder} />
                        <View style={{ width: 20,margin:2, }}>
                            <Text>OR</Text>
                        </View>
                        <View style={styles.dividerBorder} />
                    </View>

                    <View style={styles.bottomStyle1}>
                        <Text style={[styles.account, { color: theme === 'light' ? 'rgba(0, 0, 0, 0.40)' : '#dede' }]}>Don’t have an account?
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', color: theme === 'light' ? 'rgba(0, 0, 0, 0.40)' : '#dede' }}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.bottomStyle}>
                    <Text style={[styles.account, { color: theme === 'light' ? 'rgba(0, 0, 0, 0.40)' : '#dede' }]}>Instagram or Facebook
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: theme === 'light' ? 'rgba(0, 0, 0, 0.40)' : '#dede' }}> </Text>
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
        height: windowHeight - 300,
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
        flexDirection: 'row',
        height: 100,
        marginTop:70,
    },
    bottomStyle1: {
        width: windowWidth,
        borderTopColor: 'rgba(0, 0, 0, 0.40)',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 100,
        marginTop:70,
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
    divider: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dividerBorder: {
        borderWidth: 1,
        borderColor:'rgba(0, 0, 0, 0.40)',
        margin: 1,
        width: 100,
        height: 1,
    },
})