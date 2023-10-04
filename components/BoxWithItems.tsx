import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

interface ListItem {
  id: number;
  text1: string;
  text2: string;
  text3: string;
  backgroundColor: string;
}

const data: ListItem[] = [
  { id: 1, text1: '15 sec', text2: '25% FTP', text3: '18W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 2, text1: '18 sec', text2: '35% FTP', text3: '35W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 3, text1: '12 sec', text2: '50% FTP', text3: '21W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 4, text1: '16 sec', text2: '25% FTP', text3: '149W', backgroundColor: 'rgba(209, 209, 209, 0.4))' },
  { id: 5, text1: '15 sec', text2: '30% FTP', text3: '53W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 6, text1: '14 sec', text2: '40% FTP', text3: '18W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 7, text1: '17 sec', text2: '44% FTP', text3: '19W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 8, text1: '15 sec', text2: '25% FTP', text3: '18W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 9, text1: '18 sec', text2: '35% FTP', text3: '35W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 10, text1: '12 sec', text2: '50% FTP', text3: '21W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 11, text1: '16 sec', text2: '25% FTP', text3: '149W', backgroundColor: 'rgba(209, 209, 209, 0.4))' },
  { id: 12, text1: '15 sec', text2: '30% FTP', text3: '53W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 13, text1: '14 sec', text2: '40% FTP', text3: '18W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 14, text1: '17 sec', text2: '44% FTP', text3: '19W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
  { id: 15, text1: '15 sec', text2: '25% FTP', text3: '18W', backgroundColor: 'rgba(209, 209, 209, 0.4)' },
];

const CardWithItems: React.FC = () => {
  const renderCard = ({ item }: { item: ListItem }) => {
    return (
      <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
        <View style={styles.row}>
          <Text style={styles.text}>{item.text1}</Text>
          <Text style={styles.text}>{item.text2}</Text>
          <Text style={styles.text}>{item.text3}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={data}
      renderItem={renderCard}
      keyExtractor={(item) => item.id.toString()}
      style={{ marginTop: 10 }}
      showsVerticalScrollIndicator={false}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 390,
    height: 40,
    marginVertical: 2,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default CardWithItems;
