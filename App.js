import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Bird from './components/Bird';
import Pipes from './components/Pipes';

export default function App() {
  //get window and screen info
  let window = Dimensions.get('window')
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height

  //Define Gamelogic information
  const refreshInterval = 1000/40 //number of fps 30 refresh in 1000 milliseconds
  const gravity = 3
  let gameTimerID
  let pipesTimerId
  
  //Define Brid position in screen
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdbottom] = useState(window.height/2)

  //Define Pipes position in screen
  const [pipesPosX, setPipesPosX] = useState(window.width-60)
  const pipeWidth = 60
  const pipeHeight = 300
  const gap = 50


  //Set Gravity on Bird using React Native Useeffect 
  useEffect(() => {
     if(birdBottom > 0 ){
       gameTimerID =  setInterval(() => {
          setBirdbottom(birdBottom => birdBottom - gravity)
          //console.log(birdBottom)
       },30)

       return () => {
         clearInterval(gameTimerID)
       }

     }
  },[birdBottom])

useEffect(() => {
  if(pipesPosX > 0){
    pipesTimerId =  setInterval(() => {
      setPipesPosX(pipesPosX => pipesPosX - 5)
      console.log(pipesPosX)
    },30)
  }

  return () => {
    clearInterval(pipesTimerId)
  }

},[pipesPosX])


  //Gameloop
  // useEffect(() => {
  //   gameTimerID = setInterval(() => { //Every object must run and move at the same interval
      
  //     //Apply Gravity on Bird using useEffect 
  //     if(birdBottom > 0){
  //       setBirdbottom(birdBottom => birdBottom - gravity)
  //       console.log(birdBottom)
  //     }
  //     //Apply mouvement to pipes

    
  //   }, refreshInterval)

  //   return () => {
  //     clearInterval(gameTimerID)
  //   }

  // },[birdBottom])


  //console.log(screenWidth,screenHeight)
  //console.log(window.width,window.height)
  
  return (
    <View style={styles.container}>
      <Bird
        birdBottom = {birdBottom}
        birdleft = {birdLeft}
      />
      <Pipes
        pipeheight = {pipeHeight}
        pipewidth = {pipeWidth}
        pipesPosX = {pipesPosX}
        gap = {gap}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
