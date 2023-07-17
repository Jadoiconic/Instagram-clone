import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        marginTop:40,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:5,
    },
    headerRight:{
        flexDirection:'row',
        width:80,
        justifyContent:'space-around',
    },
    story:{
        paddingVertical:10,
        marginVertical:1,
    },
});

export default styles;