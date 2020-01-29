import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const Header =(props)=>{
 return(
     <View style={styles.header}>
         <Text style={styles.headerText}>{props.title}</Text>
     </View>
 )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        paddingTop:36,
        height:90,
        backgroundColor:"#dff2fc",
        alignItems:'center',
        justifyContent:"center"
    },
    headerText:{
        color:"black",
        fontSize:18
    }
})

export default Header