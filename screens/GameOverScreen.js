import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Color from '../constant/Colors'


const GameOverScreen =(props)=>{
    return(
        <View style={styles.screen }>
                <Text style={styles.text}>Game Over!!!</Text>
                <Text style={styles.text}>Number of Guess Rounds is: {props.roundsNumber}</Text>
                <Text style={styles.text}>Player Number was  :{props.userNumber}</Text>
                <View style={styles.button}>
                    <Button title="New Game" onPress={props.onRestart}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#333",
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        color:"white"
    },
    button:{
        backgroundColor: Color.primary
    }
})


export default GameOverScreen