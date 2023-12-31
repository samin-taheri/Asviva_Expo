import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { primaryColor } from '../global';
import { CustomTopTabBarProps } from '../types/data';


const CustomTopTabBar: React.FC<CustomTopTabBarProps> = ({
  tabs,
  activeTab,
  onTabPress,
}) => {
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabItem,
            activeTab === index && styles.activeTab,
          ]}
          onPress={() => onTabPress(index)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === index && styles.activeTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff', 
    paddingTop: 15
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2, 
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: primaryColor, 
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000', 
  },
  activeTabText: {
    color: primaryColor, 
  },
});

export default CustomTopTabBar;
