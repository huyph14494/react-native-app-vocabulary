/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Picker, View} from 'react-native';
import Style from './../Style';

export default class Filter extends Component {
  render() {
    return (
      <View style={Style.groupForm}>
        <Picker
          selectedValue={'2'}
          //   onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Show All" value="1" />
          <Picker.Item label="Show Forgot" value="2" />
          <Picker.Item label="Show Memorized" value="3" />
        </Picker>
      </View>
    );
  }
}
