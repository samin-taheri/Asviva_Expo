import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { backgroundColor, primaryColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import LearningPath from "../components/DottedLineWithCircles";
import Myloader from "../components/MyLoader";

export default function Goals({navigation}: any) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); 
  
      return () => {
        clearTimeout(timer); 
      };
    }, []);
  
    
    return(
        <View style={styles.container}>
        <CustomHeader title="Goals" onBack={() => navigation.navigate('Root')} navigation={navigation}  onLogo={false}/> 
        <View style={styles.contentContainer}> 
        {isLoading ? 
          <Myloader title='Generating...'/>
      :
      <>
        <View style={{padding: 30}}>
        <Text style={styles.title}>This week's goals have been generated for you</Text>
        <Text style={styles.subtitle}>This week's goals have been generated for you</Text>
        <LearningPath />
        </View>
        <View style={styles.buttonContainer}> 
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Root')}>
            <Text style={styles.buttonText}>Complete</Text>
            </TouchableOpacity>
        </View>
      </>
      }
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
      width: 200,
      height: 220,
      borderRadius: 8,
      marginLeft: 16,
    },
    text: {
      marginTop: 20,
      fontSize: 18,
      color: primaryColor,
      fontWeight: '600',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8'

    },
    contentContainer2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        width: '90%',
        height: '10%',
        alignItems: 'center',
        paddingLeft: '10%',
      },
      button: {
        backgroundColor: primaryColor,
        paddingVertical: 15,
        width: '100%',
        alignItems: 'center',
        borderRadius: 12,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
      },
    title: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: '600',

    },
    subtitle: {
        fontSize: 14,
        textAlign: 'left',
        paddingTop: 10
    }
});