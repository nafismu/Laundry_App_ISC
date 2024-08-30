import * as React from 'react'
import { View,Text,StyleSheet,Dimensions, Touchable, TouchableOpacity, Image } from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import {FIREBASE_APP, FIREBASE_AUTH} from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';




const { width } = Dimensions.get('window');
export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [showPassword, setShowPassword] = useState(false); 
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH
    const signIn = async() =>{
      setLoading(true);
      try{
        const response = await signInWithEmailAndPassword(auth,email, password);
        navigation.navigate({
          name:'Home',
          params:{email:email}
        });
        console.log(response);
        alert('Login Successful');

      }catch(error){
        console.log(error);
        alert(error.message);
      }finally{
        setLoading(false);
      }
    }
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };

    const [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Inter_400Regular
    });

    if (!fontsLoaded) { 
      return null; 
    }
  return (
    <View style={Style.container}>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:-50}}>
        <Image
        source={require('../assets/login.png')}
        style={{width:120,height:120}}/>
      </View>
      <Text style={{fontSize:20,marginBottom:30,marginTop:20,fontFamily:'Poppins_400Regular'}}>
        Welcome In Login
      </Text>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
          { loading ? ( <ActivityIndicator size="large" color="#0000ff"/> 
          ):(
            <>
            <TextInput
            style={Style.input}
            keyboardType='email-address'
            autoCapitalize='none'
            placeholder='Email'
            value={email}
            onChangeText={(Text) => setEmail(Text)}
            underlineColor='transparent'/>
            <TextInput
              keyboardType='invisible-password'
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder='Password'
              underlineColor='transparent'
              style={Style.input}
              />
              <MaterialCommunityIcons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="black"
              style={{position:'absolute',right:20,top:105}}
              onPress={toggleShowPassword}
              />
            <TouchableOpacity onPress={signIn}>
            <Text style={{marginTop:30,marginBottom:10,fontSize:20,textAlign:'center', backgroundColor:'pink',color:'white',padding:10,borderRadius:20,fontFamily:'Inter_400Regular', width:350}} title='Login'>Login</Text>
          </TouchableOpacity>
          </>
          )
        }
        <View style={{borderBottomWidth:1,borderColor:'black',width:350,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
          <View style={{backgroundColor:'white',width:50,height:50,top:25}}>
          <Text style={{fontSize:15,fontWeight:'light',textAlign:'center',position:'relative',top:10}}>Or</Text>
          </View>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:40,direction:'row'}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:200}}>
            <View style={{backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/google.png')} style={{width:40,height:40}}/>
            </View>
            <View style={{backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/facebook.png')} style={{width:40,height:40}}/>
            </View>
            <View style={{backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/apple.png')} style={{width:40,height:40}}/>
            </View>
          </View>
        <Text style={{top:40}}>Dont Have an Account ? <Text style={{color:'blue'}} onPress={() => navigation.navigate('Auth',{screen:'CreateAccountScreen'})}>Sign Up</Text></Text>
        </View>
      </View>
    </View>
  )
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },input:{
    height: 50,
    width:width-40, 
    borderColor: 'gray',
    backgroundColor:'white', 
    borderWidth: 1
    ,marginTop:20,
}
})
