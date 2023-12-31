import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, SafeAreaView, ImageSourcePropType, Pressable, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { cardBackground2, primaryColor, textColor } from '../global';
import { CouchingCourseComponentProps } from '../types/data';
import Myloader from './MyLoader';

interface DataItem {
  id: string;
  title: string;
  user: string;
  loc: string;
  time: string;
  imageSource: ImageSourcePropType;
}

const ChallengeComponent: React.FC<CouchingCourseComponentProps> = ({onPress }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const newData: DataItem[] = [
        { id: '1',user: '0', time: '20 min', loc: '5.28 km', title: 'Otar River (Norway)', imageSource: require('../assets/challenge-13.jpg') },
        { id: '2',user: '0', time: '20 min', loc: '3.00 km', title: '(Austria) Alpine garden', imageSource: require('../assets/challenge-6.jpg') },
        { id: '3',user: '0', time: '20 min', loc: '3.67 km', title: 'The Alps', imageSource: require('../assets/challenge-17.jpg') },
        { id: '4',user: '0', time: '20 min', loc: '5.58 km', title: 'Sightseeing road (Norway)', imageSource: require('../assets/challenge-1.jpg') },
        { id: '5',user: '1', time: '20 min',loc: '3.66 km', title: '(Xiamen) Skybike path', imageSource: require('../assets/challenge-3.jpg') },
        { id: '6',user: '0', time: '20 min', loc: '17.50 km', title: '(Three dimensional) space tunnel', imageSource: require('../assets/challenge-7.jpg') },
        { id: '7',user: '0', time: '20 min', loc: '20.19 km', title: '(3D) Pink Blue tunnel', imageSource: require('../assets/challenge-8.jpg') },
        { id: '8',user: '0', time: '20 min', loc: '3.35 km', title: '(3D) Love tunnel', imageSource: require('../assets/challenge-10.jpg') },
        { id: '9',user: '0', time: '20 min', loc: '5.01 km', title: '(3D) Purple and Yellow tunnel', imageSource: require('../assets/challenge-11.jpg') },
        { id: '10',user: '0', time: '20 min', loc: '4.96 km', title: '(Three dimensional) time travel', imageSource: require('../assets/challenge-12.jpg') },
      ];
      setData(newData);
      setLoading(false);
    }, 500);
  }, []);

  const renderItem = ({ item }: { item: DataItem }) => {

    return (
      <View style={styles.item}>
        <Pressable style={styles.cardContainer} onPress={() => onPress(item?.id)}>
          <ImageBackground source={item.imageSource} style={styles.cardBackground}>
            <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
              <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name="account-supervisor"
                    size={20}
                    color={textColor}
                />
                <Text style={{fontSize: 11}}>{item.user}</Text>
                </View>
                <View style={[styles.iconContainer , {marginLeft: 10}]}>
                <Entypo
                    name="location-pin"
                    size={20}
                    color={textColor}
                />
                <Text style={{fontSize: 11}}>{item.loc}</Text>
                </View>
                <View style={[styles.iconContainer , {marginLeft: 10}]}>
                <Ionicons
                    name="bicycle"
                    size={20}
                    color={textColor}
                />
                <Text style={{fontSize: 11, paddingLeft: 2}}>{item.time}</Text>
                </View>
                </View>
              </View>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                    name="download-outline"
                    size={20}
                    color={textColor}
                />
            </View>
            </View>
          </ImageBackground>
        </Pressable>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
       <Myloader/>
      </View>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginLeft: 8,
    marginRight: 8
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '13%',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 8, 
  },
  cardContainer: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  cardBackground: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardContent: {
    padding: 14,
    width: '93%',
    marginLeft: '3.5%',
    marginTop: '17%',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  icon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'gray'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.7)',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 5,
    padding: 5
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    paddingRight: 30,
    textAlign: 'left'
  },
  buttonContainer: {
    backgroundColor: primaryColor,
    width: 80,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 5
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 1,
    paddingLeft: 20
  },
  appleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cardBackground2, 
    borderRadius: 30,
    height: 40,
    width: 40,
  },
});

export default ChallengeComponent;
