import React, { useState } from "react";
import { View,Image, StyleSheet, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { backgroundColor, cardBackground } from '../global';
import CustomHeader from "../components/CustomHeader";
import ProfileCard from "../components/ProfileCard";

export default function Profile({navigation}: NativeStackHeaderProps) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: Date) => {
      setSelectedDate(date);
      hideDatePicker();
    };
  
    return(
        <View style={styles.container}>
        <CustomHeader title="Profile" onBack={() => navigation.goBack()}/>  
        <View style={styles.contentContainer}>
        <ProfileCard
                title="Change Avatar"
                iconName="account-convert"
                cardColor={cardBackground}
                style={{ paddingLeft: '23%'}}
                selectedAnswer="Please Select" 
                onPress={() => {}}
            />
            
            <ProfileCard
                title="Nickname"
                iconName="account-tie"
                cardColor={cardBackground}
                style={{ paddingLeft: '31%'}}
                selectedAnswer="Please Select" 
                onPress={() => {
                }}
            />
            <View style={styles.line} />
            <ProfileCard
                title="Country / Region"
                iconName="earth"
                cardColor={cardBackground}
                style={{ paddingLeft: '19%'}}
                selectedAnswer="Please Select" 
                onPress={() => {
                }}
            />
            <View style={styles.line} />
            <ProfileCard
                title="Gender"
                iconName="gender-male-female"
                cardColor={cardBackground}
                style={{ paddingLeft: '36%'}}
                selectedAnswer="Please Select" 
                onPress={() => {
                }}
            />
            <ProfileCard
                title="Height"
                iconName="human-male-height"
                cardColor={cardBackground}
                style={{ paddingLeft: '37%'}}
                selectedAnswer="Please Select" 
                onPress={() => {
                }}
            />
            <ProfileCard
                title="Weight"
                iconName="weight"
                cardColor={cardBackground}
                style={{ paddingLeft: '37%'}}
                selectedAnswer="Please Select" 
                onPress={() => {
                }}
            />
            <ProfileCard
                title="Birthday"
                iconName="cake-variant"
                cardColor={cardBackground}
                style={{ paddingLeft: '34%'}}
                onPress={showDatePicker}
                selectedAnswer="Please Select" 
            />
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor
    },
    contentContainer: {
        flex: 1,
        padding: 8,
        paddingTop: 20
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black',
    },
    line: {
        width: '92%', 
        height: 1, 
        backgroundColor: '#e5e5e5', 
        margin: 15,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100, 
      },
      modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      datePickerContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      selectedDateText: {
        marginTop: 16,
        fontSize: 18,
      },
});