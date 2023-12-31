import { View, StyleSheet, Text, ImageSourcePropType, ScrollView, TouchableOpacity } from "react-native";
import { backgroundColor, tableBackgroundColor, workoutBackground1, workoutBackground2, workoutBackground3, workoutBackground4, workoutBackground5, workoutBackground6, workoutBackground7, workoutBackground8 } from '../global';
import { useRoute } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";
import Card from "../components/Card";
import BoxWithItems from "../components/BoxWithItems";
import ColoredCards2 from "../components/ColoredCards2";
import { LinearGradient } from "expo-linear-gradient";
import GraphDetails from "../components/GraphDetails";

interface DataItem {
  id: string;
  title1: string;
  title2: string;
  desc: string;
  intro: string;
  crowd1: string;
  crowd2: string;
  backgroundColor: string;
  color: string;
  imageSource: ImageSourcePropType;
}
  
const newData: DataItem[] = [
    { id: '1', backgroundColor: '#7e4f81', color: workoutBackground1, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'Take your first step and master riding skills', title1: 'Beginner', title2: '15-minute Body Warm Up', imageSource: require('../assets/bg-5.jpg') },
    { id: '2', backgroundColor: '#534f81', color: workoutBackground2, crowd1: 'Have certain exercise habits',crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'Burn more calories within limited time', title1: 'Fat burning',  title2: '20-minute Basic Training', imageSource: require('../assets/bg-5.jpg') },
    { id: '3', backgroundColor: '#72814f', color: workoutBackground3, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'Build better mental and physical ability', title1: 'Endurance', title2: '5-minute Basic Exercise for Starters',  imageSource: require('../assets/bg-5.jpg') },
    { id: '4', backgroundColor: '#5a7c5f', color: workoutBackground4, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '10-minute Tempo Adaptation', imageSource: require('../assets/bg-5.jpg') },
    { id: '5', backgroundColor: '#7c765a', color: workoutBackground5, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '15-minute Energy Awakening', imageSource: require('../assets/bg-5.jpg') },
    { id: '6', backgroundColor: '#7c6b5a', color: workoutBackground6, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '20-minute Rhythm Control', imageSource: require('../assets/bg-5.jpg') },
    { id: '7', backgroundColor: '#81624f', color: workoutBackground7, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '20-minute Aerobic Interval Experience', imageSource: require('../assets/bg-5.jpg') },
    { id: '8', backgroundColor: '#814f6a', color: workoutBackground8, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '10-minute Daily Health', imageSource: require('../assets/bg-5.jpg') },
  ];

export default function PowerSubDetails({ navigation }: any) {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const selectedItem = newData.find(item => item.id === id);
  if (selectedItem) {
    const backgroundStyle = {
      backgroundColor: selectedItem.backgroundColor,
    };


    return (
        <View style={styles.container}>
      <LinearGradient
          colors={[selectedItem.backgroundColor, selectedItem.color, '#fff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }} 
          style={styles.linearGradient}
        >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
          <Text style={styles.title}>{selectedItem.title2}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container2}>
      <ColoredCards2  
        color='#3d3d4e'
        title="Time"
        description="19.00"
        cardColor='rgba(255, 233, 225, 0.8)'
        imageSource={require('../assets/clock-2.png')}
        />
        <ColoredCards2  
        color='#3d3d4e'
        title="Energy"
        description="91 kcal"
        cardColor='rgba(240, 215, 237, 0.5)'
        imageSource={require('../assets/energy.png')}
        />
        <ColoredCards2  
        color='#3d3d4e'
        title="Difficulty"
        description="3 star"
        cardColor='rgba(234, 239, 232, 0.8)'
        imageSource={require('../assets/difficulty.png')}
        />
       </View>
       <View style={{padding: 8}}>
       <Card>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.introTitle}>Course Intro</Text>
          </View>
          <Text style={styles.title2}>{selectedItem.intro}</Text>
        </View>
       </Card>
       <Card>
      <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.introTitle}>Crowd</Text>
          </View>
          <Text style={styles.title2}>‣ {selectedItem.crowd1}</Text>
          <Text style={styles.title2}>‣ {selectedItem.crowd2}</Text>
        </View>
        </Card>
       </View>
       <GraphDetails title={'Course Info'} width={320} height={170} barPercentage={0.5} color={selectedItem.backgroundColor} />
      <BoxWithItems />
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
    },  
    textContainer: {
      flex: 1,
    },
    container2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      marginTop: 10
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
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
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
      padding: 10,
      width: '93%',
      marginLeft: '3.5%',
      marginTop: '37%',
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
      color: 'white',
      marginTop: '25%',
      marginLeft: 10
    },
    introTitle: {
      fontSize: 14,
      fontWeight: "bold",
      padding: 10,
      textAlign: 'left',
    },
    title2: {
      fontSize: 14,
      paddingLeft: 10,
      textAlign: 'left',
      marginTop: 10
    },
    cardContainer: {
      overflow: 'hidden',
      borderRadius: 12,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      backgroundColor: tableBackgroundColor,
      flexDirection: 'row',
      alignContent: 'center',
      marginTop: 5,
      padding: 0,
      width: 120,
    },
});




