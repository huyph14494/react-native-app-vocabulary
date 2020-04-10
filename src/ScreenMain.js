import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import List from './components/List';
import Style from './Style';
import Form from './components/Form';
import Filter from './components/Filter';
// import MyFlatList from './components/MyFlatList';

export default class ScreenMain extends Component {
  render() {
    return (
      <ScrollView style={Style.container} showsVerticalScrollIndicator={false}>
        <Form />
        <Filter />
        <List />
        {/* <MyFlatList /> */}
      </ScrollView>
    );
  }
}
