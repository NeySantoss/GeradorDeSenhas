import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import {ModalPassword} from '../../Components/Modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  //size and setSize are the parameters to change the 
  //slider value from 6 to 20... just use {size} in front of the characters and value in slides
  
  function generatePassword() {
    
    let password = "";
    for(let i = 0 , n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() *  n ))
    }

    setPasswordValue(password);
    setModalVisible(true);


  }
  
  return(
    <View style={style.container}> 
      <Image source={require("../../assets/logo.png")}>
      
      </Image>

      <Text style={style.title}>{size} caracteres</Text>
    
      <View style={style.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}          
          maximumTrackTintColor= "#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9" 
          value={size}     
          onValueChange={ (value) => setSize(value.toFixed(0))}    
        ></Slider>
      </View>

      <TouchableOpacity style={style.button} onPress={generatePassword}>
        <Text style={style.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)}/>
      </Modal>

    
    
    </View>

  )
}


const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: "#392de9",
    width:"80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color:"#FFF",
    fontSize: 20,
  },
  title: {
    fontSize:30,
    fontWeight: 'bold',
    paddingTop: 50  
    
    

  }
})