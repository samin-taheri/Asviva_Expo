import { View, StyleSheet, Text, ImageSourcePropType, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { backgroundColor } from '../global';
import { useRoute } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";
import BoxWithItems from "../components/BoxWithItems";
import StatsCard from "../components/StatsCard";

interface DataItem {
  id: string;
  title: string;
  user: string;
  kcal: string;
  imageSource: ImageSourcePropType;
}

const data: DataItem[] = [
  { id: '1',user: '19 min', kcal: '91 kcal', title: 'Hit Whole Body Fat Burning', imageSource: require('../assets/couching-1.jpg') },
  { id: '2',user: '37 min', kcal: '235 kcal', title: 'Fat Burning Cardio Workout New', imageSource: require('../assets/couching-3.jpg') },
  { id: '3',user: '24 min', kcal: '134 kcal', title: 'Sweat Fat Burning', imageSource: require('../assets/couching-5.jpg') },
  { id: '4',user: '17 min', kcal: '89 kcal', title: 'HIT Training New', imageSource: require('../assets/couching-6.jpg') },
  { id: '5',user: '30 min', kcal: '170 kcal', title: 'Rhythmic Fat Riding', imageSource: require('../assets/couching-4.jpg') },
  { id: '6',user: '22 min', kcal: '132 kcal', title: 'Cardşopulmonary Strength Training New', imageSource: require('../assets/couching-8.jpg') },
  { id: '7',user: '29 min', kcal: '185 kcal', title: 'Comprehensive Fat Burning', imageSource: require('../assets/couching-9.jpg') },
  { id: '8',user: '27 min', kcal: '186 kcal', title: 'Strength Training New', imageSource: require('../assets/couching-10.jpg') },
  { id: '9',user: '25 min', kcal: '129 kcal', title: 'Speed & Endurance Training', imageSource: require('../assets/couching-11.jpg') },
  { id: '10',user: '22 min', kcal: '138 kcal', title: 'Endurance Training New', imageSource: require('../assets/couching-3.jpg') },
];
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [50, 45, 60, 70, 52],
    },
  ],
};

const chartWidth = 300;
const chartHeight = 200;
const yAxisSuffix = 'k';
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Bar color
};
export default function CouchingDetails({navigation}: any) {
  const route = useRoute();
  const { id } = route.params as { id: string }; 
  const selectedItem = data.find(item => item.id === id);
  if (selectedItem) {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
          <ImageBackground source={selectedItem.imageSource} style={styles.image}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Feather name="arrow-left" size={30} color="#fff" />
            </TouchableOpacity>
          <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
              <Text style={styles.title}>{selectedItem.title}</Text>
          </View>
          </ImageBackground>
          </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 8, marginTop: 10}}>
            <StatsCard title="Time" value="19.00" />
            <StatsCard title="Energy" value="91 kcal" style={{paddingLeft: 10}}/>
            <StatsCard title="Difficulty" value="2 Star" style={{paddingLeft: 10}}/>
        </View>
          <BoxWithItems/>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },  
    backButton: {
      position: 'absolute',
      top: '10%',
      left: '2%',
      zIndex: 1,
      padding: 16,
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
      padding: 14,
      width: '100%',
      marginTop: '30%',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center', 
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      paddingRight: 30,
      textAlign: 'left'
    },
    cardContainer: {
      overflow: 'hidden',
      borderRadius: 12,
    },
});
