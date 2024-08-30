
import React from 'react';
import { View, Text, StyleSheet, Image,Dimensions } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

const { width } = Dimensions.get('window');
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const CuciAjaScreens = () => (
    <View style={{flex:1}}>
        <View style={{judstifyContent:'center',alignItems:'center'}}>
            <Image 
             source={require('../assets/washing.jpg')}
             style={{width:450,height:300,borderBottomRightRadius:200,borderBottomLeftRadius:200,}}/>
        <View style={{
          justifyContent:'center',alignItems:'center',marginTop:-40,width:380,height:150,backgroundColor:'rgb(255, 255, 255)',borderRadius:20, borderColor:'black',borderWidth:1}}>

        </View>
        <View style={{ flex: 1, padding: 70}}>

        </View>
  {/* <Card mode='elevated'>
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card> */}
  </View>
  </View>
);

export default CuciAjaScreens;
