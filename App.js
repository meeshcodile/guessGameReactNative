import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'


export default function App() {
  const [userNumber, setUserNumber] = useState('')
  const [guessRounds, setGuessRounds] = useState(0)

  const configureNewGameHandler=()=>{
     setGuessRounds(0)
     setUserNumber(null)
  }
  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const GameOverHandler =(numOfRound)=>{
    setGuessRounds(numOfRound)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <= 0){
    content=<GameScreen userChoice={userNumber} onGameOver={GameOverHandler}/>
  }else if(guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
  }

  return (
    <View style={styles.mainScreen}>
      <Header title="Guess Game" />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  }
});
