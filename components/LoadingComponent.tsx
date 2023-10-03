import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { backgroundColor, primaryColor } from '../global';
import { LoadingProps } from '../types/data';
import CustomHeader from './CustomHeader';

const LoadingComponent: React.FC<LoadingProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => {
      clearTimeout(timer); 
    };
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.contentContainer}>
          <Image source={require("../assets/exersize.png")} style={styles.image} />
          <ActivityIndicator size="large" color={primaryColor} />
          <Text style={styles.text}>Searching...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.contentContainer}>
          <Image source={require("../assets/oops.png")} style={styles.image} />
          <Text style={styles.text}>No device found!</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Device Pairing" />
      {renderContent()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 18,
    color: primaryColor,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -100,
  },
  image: {
    width: 200,
    height: 220,
    borderRadius: 8,
    marginLeft: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
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
});
export default LoadingComponent;