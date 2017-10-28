import React, { Component } from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import data from './data';

export default class App extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TO-DON'T</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.title}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#FF4200',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 30,
    borderBottomWidth: 2,
    borderColor: '#f9f9f9'
  },
  itemText: {
    fontWeight: '600'
  }
});
