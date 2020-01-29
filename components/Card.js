import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{ 
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20
    }
})

export default Card