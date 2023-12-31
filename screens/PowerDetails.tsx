import { View, StyleSheet, Text, ImageSourcePropType, Image, ScrollView, TouchableOpacity, Pressable, SafeAreaView, FlatList, ImageBackground } from "react-native";
import { backgroundColor, tableBackgroundColor, textColor, workoutBackground1, workoutBackground2, workoutBackground3, workoutBackground4, workoutBackground5, workoutBackground6, workoutBackground7, workoutBackground8 } from '../global';
import { useRoute } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";
import Graph from "../components/Graph";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

interface DataItem {
  id: string;
  title1: string;
  title2: string;
  desc: string;
  kcal: string;
  time: string;
  color: string;
  backgroundColor: string;
  imageSource: ImageSourcePropType;
}

  
const newData: DataItem[] = [
  { id: '1',time: '60 min', color: '#7e4f81', backgroundColor: workoutBackground1, desc: 'Take your first step and master riding skills', title1: 'Beginner', title2: '15-minute Body Warm Up', kcal: '82 kcal',  imageSource: require('../assets/power-bike.png') },
  { id: '2',time: '55 min', color: '#534f81', backgroundColor: workoutBackground2, desc: 'Burn more calories within limited time', title1: 'Fat burning',  title2: '20-minute Basic Training', kcal: '128 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '3',time: '50 min', color: '#72814f', backgroundColor: workoutBackground3, desc: 'Build better mental and physical ability', title1: 'Endurance', title2: '5-minute Basic Exercise for Starters', kcal: '32 kcal',  imageSource: require('../assets/power-bike.png') },
  { id: '4',time: '70 min', color: '#5a7c5f', backgroundColor: workoutBackground4, desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '10-minute Tempo Adaptation', kcal: '62 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '5',time: '65 min', color: '#7c765a', backgroundColor: workoutBackground5, desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '15-minute Energy Awakening', kcal: '98 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '6',time: '60 min', color: '#7c6b5a', backgroundColor: workoutBackground6, desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '20-minute Rhythm Control',  kcal: '139 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '7',time: '50 min', color: '#81624f', backgroundColor: workoutBackground7, desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '20-minute Aerobic Interval Experience', kcal: '137 kcal', imageSource: require('../assets/power-bike.png') },
  { id: '8',time: '55 min', color: '#814f6a', backgroundColor: workoutBackground8, desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '10-minute Daily Health', kcal: '58 kcal', imageSource: require('../assets/power-bike.png') },
];

export default function PowerDetails({ navigation }: any) {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const selectedItem = newData.find(item => item.id === id);
  if (selectedItem) {

    const renderItem = ({ item }: { item: DataItem }) => {
        return (
          <View style={styles.item}>
            <Pressable style={styles.cardContainer} onPress={() => navigation.navigate('PowerSubDetails', {id: item.id})}>
              <View style={[styles.cardContent, { backgroundColor: 'white' }]}>
                <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 8 }}>
                  <Text style={styles.title3}>{item.title2}</Text>
                  <View style={{flexDirection: 'row'}}>
                  <View style={[styles.iconContainer,{backgroundColor: item.backgroundColor}]}>
                <FontAwesome
                    name="flash"
                    size={15}
                    color={item.color}
                />
                  <Text style={[styles.desc2, {color: item.color}]}>{item.kcal}</Text>
                </View>
                <View style={[styles.iconContainer,{backgroundColor: item.backgroundColor}]}>
                <MaterialCommunityIcons
                    name="bike"
                    size={20}
                    color={item.color}
                />
                  <Text style={[styles.desc2, {color: item.color}]}>{item.time}</Text>
                </View>
                </View>
                </View>
                <View style={{marginRight: -25}}>
                <Graph width={140} height={70} barPercentage={0.35} color={item.color}/>
                </View>
              </View>
            </Pressable>
          </View>
        );
      };

    return (
      <View style={styles.container}>
     <LinearGradient
                colors={['gray', '#ccc', "#fff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} 
                style={styles.linearGradient}
              >        
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Feather name="arrow-left" size={30} color="#fff" />
            </TouchableOpacity>
            <View style={styles.cardContent2}>
              <View style={{flexDirection: 'column', paddingTop: '20%'}}>
              <Text style={styles.title}>{selectedItem.title1}</Text>
              <Text style={styles.desc}>{selectedItem.desc}</Text>
              </View>
            </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
        {newData.map((item) => (
        <View key={item.id.toString()}>{renderItem({ item })}</View>
        ))}
        </ScrollView>
        </LinearGradient>
      </View>
    )
  }
  return null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        marginBottom: 16
    }, 
    linearGradient: {
      width: '100%',
      height: '100%',
      opacity: 0.95,
    },
    container3: {
        padding: 16
    },  
    desc: {
        fontSize: 14,
        textAlign: 'left',
        paddingLeft: 10,
        color: 'white'
      },
      desc2: {
        fontSize: 13,
        textAlign: 'left',
        paddingLeft: 10,
        fontWeight: '500'
      },
      cardBackground: {
        width: '100%',
        height: 170,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      cardImage: {
        width: 70,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 8,
      },
    item: {
        padding: 6, 
        marginLeft: 8,
        marginRight: 8,
      },
    backgroundContainer: {
        position: 'relative',
      },
    textContainer: {
      flex: 1,
    },
    backButton: {
      position: 'absolute',
      top: '4%',
      left: '2%',
      zIndex: 1,
      padding: 16,
    },
    imageContainer: {
      position: 'relative',
        width: '100%',
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
      padding: 0,
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center', 
    },
     cardContent2: {
        padding: 10,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
      },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      padding: 10,
      textAlign: 'left',
      color: 'white'
    },
    title3: {
        fontSize: 16,
        fontWeight: "600",
        padding: 10,
        textAlign: 'left',
      },
    introTitle: {
      fontSize: 14,
      fontWeight: "bold",
      padding: 10,
      textAlign: 'left',
    },
    title2: {
      fontSize: 14,
      padding: 10,
      textAlign: 'left',
      paddingTop: 10
    },
    cardContainer: {
      overflow: 'hidden',
      borderRadius: 12,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      flexDirection: 'row',
      alignContent: 'center',
      marginTop: 5,
      padding: 0,
      width: 90,
      height: 30,
      marginLeft: 6
    },
});




