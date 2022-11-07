import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Stories from '../components/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
      },
});
