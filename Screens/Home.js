import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity, View, ScrollView ,Platform} from 'react-native';
import { NavigationContainer, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CarouselCards from './carousel/CarouselCards';
import Card from './Card';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import {CuciAjaScreen, Login, Register, HomeStack} from "./Index";
export default function Home() {
  const Route = useRoute();
  const {email} = Route.params;

  const Tab = createBottomTabNavigator();
  const screenOptions = {
    tabBarShowLabel : false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#fff",
      elevation: 0,
      height: 60,
    }
  }
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.leftContainer}>
          <View style={{marginTop:70,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',gap:20, marginEnd:20}}>
          <View style={{marginHorizontal:70,alignItems:'flex-start',justifyContent:'flex-start'}}>
          <Text style={[{fontSize:20,fontWeight:'bold',fontFamily:'Poppins_400Regular'}]}>Selamat Pagi,</Text>
          <Text style={[{fontSize:15,fontFamily:'Poppins_400Regular'}]}>{email}</Text>
          </View>
          <View style={styles.icon_bell}>
              <TouchableOpacity>
                <Icon name="bell" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.icon_user}>
              <TouchableOpacity>
                <Icon name="user" size={30} color="black" />
              </TouchableOpacity>
            </View>
            </View>
        </View>
          <View style={styles.iconRow}>
          <View style={styles.promoContainer}>
            <Text style={styles.promoText}>Promo</Text>
            <Text style={styles.promoLink}>Lihat Semua</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row',justifyContent:'center' ,marginLeft:0,marginTop:30}}>
            <SafeAreaView>
          <CarouselCards style={[styles.carousel,styles.shadowProp]}/>
            </SafeAreaView>
        </View>
        <Card/>
      <View style={styles.rightContainer}>
      </View>
      </ScrollView>
      <StatusBar style="auto" />
      <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
      name="Login" 
      component={Login}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}> 
              <Entypo name="home" size={24} color={focused ? "black" : "grey"}/>
              <Text style={{color: focused ? "black" : "grey", fontSize: 12}}>Login</Text>
            </View>
          )
        }
      }}/>
      <Tab.Screen 
      name="Register" 
      component={Register}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}> 
              <Entypo name="home" size={24} color={focused ? "black" : "grey"}/>
              <Text style={{color: focused ? "black" : "grey" , fontSize: 12}}>Login</Text>
            </View>
          )
        }
      }}
      />
      <Tab.Screen
        name="HomeStack" 
        component={HomeStack}
         options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor:'blue', width: Platform.OS === 'ios' ? 60 : 60, height: Platform.OS === 'ios' ? 60 : 60 , top: Platform.OS === 'ios' ? -10 : -20, borderRadius: Platform.OS === 'ios' ? 25 : 30}}>
                <Entypo name="shopping-cart" size={24} color={focused ? "black" : "white"}/>
              </View>
            )
          }
         }}/>

      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}> 
              <Entypo name="home" size={24} color={focused ? "black" : "grey"}/>
              <Text style={{color: focused ? "black" : "grey" , fontSize: 12}}>Home</Text>
            </View>
          )
        }
      }}/>
      <Tab.Screen 
      name="CuciAjaScreen" 
      component={CuciAjaScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}> 
              <Entypo name="home" size={24} color={focused ? "black" : "grey"}/>
              <Text style={{color: focused ? "black" : "grey", fontSize: 12}}>CuciAja</Text>
            </View>
          )
        }
      }}/>
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0eee9",
    fontFamily: "Poppins_400Regular",
    
  },
  leftContainer: {
    flex: 2,
    justifyContent: "flex-start",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 50,
    marginEnd: 20,
  },
  textContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    gap: 1,
    fontFamily: "Poppins_400Regular",
  },
  greetingText: {
    fontSize: 60,
    fontWeight: "700",
    fontFamily: "Poppins_400Regular",
  },
  nameText: {
    fontSize: 60,
    fontWeight: "700",
    fontFamily: "Poppins_400Regular",
  },
  promoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 30,
  },
  promoText: {
    fontSize: 20,
    fontWeight: "heavy",
    marginRight: 80,
    fontFamily: "Poppins_400Regular",
  },
  promoLink: {
    fontSize: 15,
    marginLeft: 100,
    color: "#db65cc",
  },
  iconContainer: {
    elevation: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconRow: {
    flexDirection: "row",
    gap: 20,
  },
  icon_bell: {
    width: 50,
    height: 50,
    backgroundColor: "#d1cec5",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },icon_user:{
    
    width: 50,
    height: 50,
    backgroundColor: "#d1cec5",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  carousel:{
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
