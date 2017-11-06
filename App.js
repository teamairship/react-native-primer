import React, { Component } from 'react';
import {
  FlatList,
  Image,
  LayoutAnimation,
  Modal,
  NativeModules,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import data from './data';
import Item from './Item';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
  state = {
    input: '',
    list: [],
    showModal: false
  };

  componentDidMount() {
    StatusBar.setBarStyle('light-content');

    const dataWithCount = data.map(item => ({ ...item, count: 0 }));

    this.setState({ list: dataWithCount });
  }

  onAdd() {
    const newItem = {
      count: 0,
      title: this.state.input
    };
    const newList = [...this.state.list, newItem];

    this.setState({ showModal: false, input: '', list: newList });
  }

  onDelete(item) {
    const filteredList = this.state.list.filter(
      todo => todo.title !== item.title
    );

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ list: filteredList });
  }

  addCount(item) {
    const updatedList = this.state.list.map(
      todo =>
        todo.title === item.title ? { ...todo, count: todo.count + 1 } : todo
    );

    this.setState({ list: updatedList });
  }

  renderItemModal() {
    return (
      <Modal
        animationType="fade"
        transparent
        onRequestClose={() => {}}
        visible={this.state.showModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.modalHeader}>ADD TO-DON'T</Text>

            <TextInput
              style={styles.input}
              placeholder="Don't do dumb stuff."
              value={this.state.input}
              onChangeText={value => this.setState({ input: value })}
            />

            <TouchableOpacity
              style={styles.addButtonContainer}
              onPress={() => this.onAdd()}
            >
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeContainer}
              onPress={() => this.setState({ showModal: false })}
            >
              <Image
                source={require('./assets/close.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TO-DON'T</Text>
          <TouchableOpacity
            style={styles.addContainer}
            onPress={() => this.setState({ showModal: true })}
          >
            <Image
              source={require('./assets/add.png')}
              style={styles.addIcon}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.list}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <Item
              count={item.count}
              title={item.title}
              onDelete={() => this.onDelete(item)}
              addCount={() => this.addCount(item)}
            />
          )}
        />
        {this.renderItemModal()}
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
    height: Platform.OS === 'ios' ? 80 : 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 10 : 20
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: '35%',
    justifyContent: 'space-between'
  },
  modalHeader: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  closeContainer: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  closeIcon: {
    tintColor: 'gray',
    height: 27,
    width: 27
  },
  addContainer: {
    position: 'absolute',
    top: 32,
    right: 30
  },
  addIcon: {
    tintColor: 'white',
    height: 29,
    width: 29
  },
  addButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4200',
    padding: 20
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  input: {
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    fontSize: 20,
    padding: 15
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
  }
});
