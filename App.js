import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, CuciAjaScreen, Login, Register,HomeStack} from "./Screens/Index";
import { View ,Text, Platform} from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const Stack = createNativeStackNavigator();
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
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CuciAjaScreen" component={CuciAjaScreen} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer> 
    
  );
  function Root() {
    return (
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
    );
  };
};

