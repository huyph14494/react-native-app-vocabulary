import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import List from './components/List';
import Style from './Style';
import MyFlatList from './components/MyFlatList';
import Form from './components/Form';
import Filter from './components/Filter';

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
