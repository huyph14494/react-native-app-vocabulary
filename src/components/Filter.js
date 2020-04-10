import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './../Style';
import {Picker} from '@react-native-community/picker';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '1',
    };
  }

  setSelectedValue = itemValue => {
    this.setState({
      selectedValue: itemValue,
    });
  };

  render() {
    return (
      <View style={Style.groupForm}>
        <Picker
          selectedValue={this.state.selectedValue}
          onValueChange={(itemValue, itemIndex) =>
            this.setSelectedValue(itemValue)
          }>
          <Picker.Item label="Show All" value="1" />
          <Picker.Item label="Show Forgot" value="2" />
          <Picker.Item label="Show Memorized" value="3" />
        </Picker>
      </View>
    );
  }
}
