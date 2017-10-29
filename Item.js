import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-swipeable';

const Item = props => {
  return (
    <Swipeable
      rightButtons={[
        <TouchableOpacity
          style={styles.deleteContainer}
          onPress={props.onDelete}
        >
          <Image
            source={require('./assets/close.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      ]}
    >
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={props.addCount}
          style={styles.countContainer}
        >
          <Text style={styles.count}>{props.count}</Text>
        </TouchableOpacity>
        <Text style={styles.itemText}>{props.title}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    alignItems: 'center',
    paddingLeft: 30,
    borderBottomWidth: 2,
    borderColor: '#f9f9f9',
    flexDirection: 'row'
  },
  itemText: {
    backgroundColor: 'transparent',
    fontWeight: '600'
  },
  deleteContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  deleteIcon: {
    tintColor: 'white',
    height: 20,
    width: 20,
    resizeMode: 'contain'
  },
  countContainer: {
    backgroundColor: 'gray',
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  count: {
    color: 'white'
  }
});

export default Item;
