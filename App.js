import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput,Dimensions, TouchableOpacity} from 'react-native';

import bgImage from './assets/background.jpg'
import logoImage from './assets/logoAcdg.png'
import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH} = Dimensions.get('window')



export default function App() {
  return (
    <ImageBackground source={bgImage} style={styles.BackgroundContainer}>
     <View>
       <Image source={logoImage} style={styles.logo}></Image>
        <Text style={styles.LogoText}>Verificador de gastos diarios</Text>
     </View>
     <View style={styles.inpultContainer}>
       <Icon name={'ios-person-outline'} size={28} color={'rgba(255,255,255,0.7)'}
       style={styles.inpultIcon} />
       <TextInput 
       style={styles.inpult}
       placeholder={'Digite o Login'}
       placeholderTextColor={'rgba(255,255,255,0.7)'}
       underlineColorAndroid='transparent'
       />
     </View>
     <View style={styles.inpultContainer}>
       <Icon name={'lock-open-outline'} size={28} color={'rgba(255,255,255,0.7)'}
       style={styles.inpultIcon} />
       <TextInput 
       style={styles.inpult}
       placeholder={'Digite a senha'}
       secureTextEntry={true}
       placeholderTextColor={'rgba(255,255,255,0.7)'}
       underlineColorAndroid='transparent'
       />

       <TouchableOpacity style={styles.bntEye}>
         <Icon name={'ios-eye-outline'}size={26} color={'rgba(255,255,255,0.7)'} 
         />
       </TouchableOpacity>
     </View>

    <TouchableOpacity style={styles.bntLogin}>
    <Text style={styles.text}>Login</Text>
    </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  BackgroundContainer: {
    flex: 1,
    width:null,
    height:null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    alignItems:'center'
  },
  logo:{
    width:120,
    height:120
  },
  LogoText:{
    color:'white',
    fontSize:20,
    fontWeight:'500',
    marginTop:10,
    opacity:0.5
  },
  inpult:{
    width:WIDTH - 55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
  inpultIcon:{
    position:'absolute',
    top:8,
    left:37

  },
  inpultContainer:{
    marginTop:10,
    marginBottom:25
  },
  bntEye:{
    position:'absolute',
    top:8,
    right:37
  },bntLogin:{
    width:WIDTH - 55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(252,81,37,0.8)',
    justifyContent:'center',
    marginTop:20
  },
  text:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'
  }
});
