import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { backgroundColor, cardBackground, cardBackground2, primaryColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import DetailsSection from '../components/DetailsSection';
import { Feather } from "@expo/vector-icons";

export default function Setting({ navigation }: any) {
    return (
       
        <View style={styles.container}>
            <CustomHeader title="Settings" onBack={()=> navigation.goBack()} navigation={navigation}  onLogo={false}/>
            <ScrollView  showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
            
            
            <DetailsSection
                title="Unit Type"
                iconName="account-tie"
                imageSource={require('../assets/settings-1.png')}
                onPress={() => {}}
            />
            <DetailsSection
                title="Permission Settings"
                iconName="account-tie"
                imageSource={require('../assets/settings-2.png')}
                onPress={()=> {}}
            />
            <DetailsSection
                title="Storage Management"
                iconName="account-tie"
                imageSource={require('../assets/settings-3.png')}
                onPress={() => {
                }}
            />
            <DetailsSection
                title="About"
                iconName="account-tie"
                imageSource={require('../assets/settings-4.png')}
                onPress={() => {
                }}
            />
            <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate('Login')}>
                <Feather name="log-out" size={30} color={'#fff'} style={{right: 110}}/>
                <Text style={styles.buttonText2}>Sign Out</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    contentContainer: {
        flex: 1,
        padding: 8
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    loginButton: {
        width: '96%',
        height: 45,
        backgroundColor: primaryColor,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: 'center'
      },
      buttonText2: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    line: {
        width: '92%', 
        height: 1, 
        backgroundColor: '#e5e5e5', 
        margin: 15,
    },
    duration: {
        fontSize: 15
    },
    difficulty: {
        fontSize: 15
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      image: {
        width: 130,
        height: 120,
        borderRadius: 8,
        marginLeft: 16,
      },
      title: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
      },
      description: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
      },
      button: {
        backgroundColor: primaryColor,
        width: 115,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
      },
      icon: {
        backgroundColor: cardBackground,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 0,
        marginLeft: '24%'
      },
});
