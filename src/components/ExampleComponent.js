import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

export default class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          id: 1,
          title: 'React Redux Tutorial For Beginner',
        },
        {
          id: 2,
          title: "Redux e React: cos'è Redux e come usarlo con React",
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.articles}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
