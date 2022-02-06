import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';

const HistoryItem = ({ item, index }) => {
  return (
    <Text style={{ color: item.status > 1 ? 'indianred' : 'olivedrab', fontWeight: "bold", }}>
      {item.subject}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things you've focused on ↓</Text>
            <FlatList
              style={{ marginBottom: 20 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  clearContainer: {
    alignItems: 'center',
    padding: 20,
  },
});
