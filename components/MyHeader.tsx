import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { loginBackground, } from '../global';
import { MyHeaderProps } from '../types/data';

const { height } = Dimensions.get("screen");

const MyHeader: React.FC<MyHeaderProps> = (props) => {
  return (
    <>
      <View style={styles.topShadow}>
        {props.showLogo
          ? (
            <Animatable.View style={styles.logoContainer} 
            animation="fadeInDown"
            iterationCount={1} >
                <Image
                  style={styles.logoImage2}
                  source={require('../assets/logo.png')}
                />
              </Animatable.View>
          )
          : (
            props.showLogoWithoutBack
              ? (
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 75 }}>
               </View>
              )
              : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                 <TouchableOpacity onPress={props.onPress} style={{ paddingTop: '12%', paddingLeft: '5%', zIndex: 1 }}>
                    <Feather name="arrow-left" size={30} color={'black'}/>
                </TouchableOpacity>
                  <Animatable.Text style={styles.HeaderText} animation="fadeInDown">{props.Title}</Animatable.Text>
                </View>
              )
          )}
       <Animatable.View style={styles.logoContainer} 
       animation="fadeInDown"
        iterationCount={1} >
        <Image
          style={styles.logoImage}
          source={require('../assets/logo.png')}
        />
      </Animatable.View>
      </View>
      <Animatable.View style={styles.boxView} animation="fadeInUp">
        {props.children}
      </Animatable.View>
    </>
  );
}

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  HeaderText: {
    fontSize: 23,
    color: 'white',
    alignSelf: 'flex-start',
    top: '70%',
    left: '7%'
  },
  HeaderText2: {
    fontSize: 23,
    color: 'white',
    alignSelf: 'flex-start',
    top: '50%',
    left: '5%',
  },
  boxView: {
    top: '40%',
    left: '5%',
    padding: 16,
    position: 'absolute',
    backgroundColor: '#fff',
    margin: 'auto',
    algnSelf: 'center',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    width: '90%',
    maxHeight: height - (Platform.OS == 'ios' ? 230 : 200),
    paddingTop: '8%',
    paddingBottom: Platform.OS == 'ios' ? '4%' : '4%'
  },
  logoContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '55%', 
    height: '80%', 
    resizeMode: 'contain',
    position: 'absolute',
    top: -80
  },
  logoImage2: {
    width: '55%', 
    height: '80%', 
    resizeMode: 'contain',
    position: 'absolute',
    top: 0
  },
  topShadow: {
    top: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '60%',
    backgroundColor: loginBackground,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 10,
  },
});
