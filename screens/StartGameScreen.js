import React,{useState} from 'react'
import {StyleSheet, View, Text,Keyboard,Alert,TouchableWithoutFeedback, Button} from 'react-native'
import Card from '../components/Card'
import Colors from '../constant/Colors'
import Input from '../components/Input'
import Number from '../components/Number'


const StartGameScreen =(props)=>{

    const [enteredValue, setEnteredValue]= useState('')
    const [confirmed,setConfirmed]=useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    

    const numberInputHandler =(inputText) =>{
        setEnteredValue(inputText.replace(/[^0-9]/, ''))
    }

    const resetInputHandler =()=>{
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler =() =>{ 
        const choosenNumber = parseInt(enteredValue)
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert('invalid number', 'Number has to be a number between 1 and 99.', [{text:'okay', style:'destructive', onPress:resetInputHandler}])
            return
        }
        setConfirmed(true)
        setEnteredValue('')
        setSelectedNumber(choosenNumber)
        Keyboard.dismiss()
    }

    let confirmedOutput; 
    if(confirmed){
        console.log(confirmed)
        confirmedOutput =
        <Card style={styles.summaryConatainer}>
            <Text>Choosen Number</Text>
            <Number>{selectedNumber}</Number>
            <Button title="Start Game" onPress={() => props.onStartGame(selectedNumber)}/>
        </Card>
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>start a new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Input a number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} onChangeText={numberInputHandler} value={enteredValue}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button title="Reset" onPress={resetInputHandler} />
                    </View>
                    <View style={styles.button}>
                    <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    inputContainer:{
        width:300, 
        maxWidth:'80%',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10,
    }, 
    button:{
        width:'40%'
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryConatainer:{
        marginTop:20,
        alignItems:'center'
    }
})


export default StartGameScreen