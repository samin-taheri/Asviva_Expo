import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { backgroundColor, cardBackground, cardBackground2, primaryColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import ColoredCards2 from "../components/ColoredCards2";
import { Ionicons } from "@expo/vector-icons";
import BarChartComponent from "../components/MyBarChart";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Details({ navigation }: any) {

    return (
        <View style={styles.container}>
            <CustomHeader title="Records of Workouts" onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
                <View style={styles.contentContainer2}>
                    <AnimatedCircularProgress
                        size={200}
                        width={15}
                        fill={80}
                        duration={2000}
                        tintColor={primaryColor}
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#ccc"
                        style={{ alignItems: 'center', paddingTop: '7%', paddingBottom:'7%' }}
                    >
                        {(fill) => (
                            <View style={styles.progressBarTextContainer}>
                                <Text style={styles.progressBarText}>0 km</Text>
                            </View>
                        )}
                    </AnimatedCircularProgress>
                </View>
                <View style={styles.container2}>
                    <ColoredCards2
                        title="Total Duration"
                        color={primaryColor}
                        description="0 min"
                        cardColor={cardBackground2}
                        imageSource={require('../assets/times.png')}
                    />
                    <ColoredCards2
                        title="Exercise Times"
                        color={primaryColor}
                        description="0"
                        cardColor={cardBackground2}
                        imageSource={require('../assets/bike.png')}
                    />
                    <ColoredCards2
                        title="Total  Calories"
                        color={primaryColor}
                        description="0 kcal"
                        cardColor={cardBackground2}
                        imageSource={require('../assets/calories.png')}
                    />
                </View>
                <View style={styles.card}>
                    <View style={styles.iconContainer}>
                        <Ionicons
                            name="bicycle"
                            size={40}
                            color={primaryColor}
                        />
                    </View>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Cycling Milage</Text>
                            <Text style={styles.description}>0 km</Text>
                        </View>
                    </View>
                </View>
                <BarChartComponent />
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
        alignItems: 'center',
    },
    progressBarTextContainer: {
        position: 'absolute',
        paddingTop: '80%',
        paddingLeft: '50%',
        transform: [{ translateX: -30 }, { translateY: -30 }],
    },
    progressBarText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        paddingTop: '50%'
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: '10%',
        color: primaryColor
    },
    icon2: {
        backgroundColor: cardBackground,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginLeft: 8,
    },
    contentContainer2: {
        flex: 1,
        padding: 8
    },
    image: {
        width: 140,
        height: 140,
        resizeMode: 'cover',
        borderRadius: 12,
    },
    container2: {
       flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        width: '95%',
    },
    contentContainer3: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3,
        borderRadius: 12,
        margin: 8,
        width: '90%',
        backgroundColor: cardBackground2
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        width: 60,
        height: 60,
        borderRadius: 12,
        marginLeft: 10
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingLeft: 0,
        color: primaryColor
    },
});
