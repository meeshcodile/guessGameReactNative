import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../constant/Colors'

const Number = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:3,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor:Colors.primary
    },
    number:{
        fontSize:22,
        color:'blue'
    }
})


export default Number