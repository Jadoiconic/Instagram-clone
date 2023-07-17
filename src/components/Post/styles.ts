import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('screen').width;


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:5,
    },
    profileContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:windowWidth-40,
        paddingHorizontal:10,
        paddingVertical:10,
        alignItems:'center',
    },
    profile:{
        width:30,
        height:30,
        borderRadius:40,
    },
    image:{
        width:windowWidth,
        height:windowWidth,
        resizeMode:'cover',
    },
    options:{
        flexDirection:'row',
        width:100,
        justifyContent:'space-between',
    },
    optionContainer:{
        flexDirection:'row',
        width:windowWidth,
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:5,
    },
    dotContainer:{
        flexDirection:'row',
    },
    dot:{
        width:10,
        height:10,
        backgroundColor:'grey',
        borderRadius:10,
        margin:1,
    },
});

export default styles;