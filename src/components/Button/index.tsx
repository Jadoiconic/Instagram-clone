import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ButtonProps{
    title:string;
    onPress: ()=> void;
}

const ButtonComp = ({title, onPress, }:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    container:{
        width:250,
        backgroundColor:'#3797EF',
        alignItems:'center',
        borderRadius:5,
    },
    text:{
        color:'white',
        padding:12,
    },
})