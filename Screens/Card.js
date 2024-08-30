
import React from 'react';
import { Image,View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = () => {
    const navigation = useNavigation();
	return (
		<View style={styles.container}>
            <View style={{flexDirection:'column',gap:20 }}>
            <Text style={{marginTop:-50,marginLeft:20,fontWeight:'500',color:'black',fontSize:20}}>Layanan Kami</Text>
                <View style={{flexDirection:'row',marginLeft:0, gap:10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('CuciAjaScreen')}>
                    <View style={{alignItems:'left',width:180,height:180,backgroundColor:'rgba(255, 255, 255, 0.5)',borderRadius:20}}>
                        <Image
                        style={{width:80,height:80,borderRadius:20,marginTop:20,marginLeft:20}} 
                        source={require('../assets/laundry-machine.png')}/>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:20,marginLeft:20}}>Cuci Aja</Text>
                        <Text style={{marginLeft:20}}>Tanpa Softener dan Pewangi</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{alignItems:'left',width:180,height:180,backgroundColor:'rgba(255, 255, 255, 0.5)',borderRadius:20}}>
                        <Image
                        style={{width:80,height:80,borderRadius:20,marginTop:20,marginLeft:20}} 
                        source={require('../assets/shoe.png')}/>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:20,marginLeft:20}}>Cuci Sepatu</Text>
                        <Text style={{marginLeft:20}}>Jasa cuci Sepatu dan Tas</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginLeft:0 ,gap:10}}>
                <View style={{alignItems:'left',width:180,height:180,backgroundColor:'rgba(255, 255, 255, 0.5)',borderRadius:20}}>
                        <Image
                        style={{width:80,height:80,borderRadius:20,marginTop:20,marginLeft:20}} 
                        source={require('../assets/iron.png')}/>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:20,marginLeft:20}}>Cuci Setrika</Text>
                        <Text style={{marginLeft:20}}>Cuci bersih wangi dan disetrika</Text>
                    </View>
                    <View style={{alignItems:'left',width:180,height:180,backgroundColor:'rgba(255, 255, 255, 0.5)',borderRadius:20}}>
                        <Image
                        style={{width:80,height:80,borderRadius:20,marginTop:20,marginLeft:20}} 
                        source={require('../assets/delivery.png')}/>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:20,marginLeft:20}}>Jemput dan Antar</Text>
                        <Text style={{marginLeft:20}}>Menerima cuci beres jemput dan antar</Text>
                    </View>
                    
                </View>
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
        marginTop: 50,
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
        rowGap: 40
	},
    cardContainer:{

    },shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
	
});

export default Card;
